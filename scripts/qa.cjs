const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs/promises');
const base=process.env.MAVE_QA_URL || 'http://127.0.0.1:4174';
const out='work/qa';
(async()=>{
 await fs.mkdir(out,{recursive:true});
 const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 const page=await context.newPage();
 const errors=[];const missing=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('response',r=>{if(r.status()>=400 && r.url().startsWith(base))missing.push(`${r.status()} ${r.url()}`);});
 const goto=async route=>{await page.goto(base+route);await page.locator('h1').first().waitFor();await page.evaluate(()=>document.fonts.ready);};
 const shot=async name=>{
  const position=await page.evaluate(()=>scrollY);
  const height=await page.evaluate(()=>document.documentElement.scrollHeight);
  for(let y=0;y<height;y+=750){await page.evaluate(y=>window.scrollTo({top:y,behavior:'instant'}),y);await page.waitForTimeout(70);}
  await page.evaluate(()=>Promise.all(Array.from(document.images).filter(img=>img.complete).map(img=>img.decode().catch(()=>{}))));
  await page.evaluate(y=>window.scrollTo({top:y,behavior:'instant'}),position);
  await page.screenshot({path:`${out}/${name}.png`,fullPage:true});
 };
 const overflow=async()=>assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,'Horizontal overflow');
 try {
  await goto('/');await page.locator('.m-hero-image').evaluate(img=>img.decode());
  await page.screenshot({path:`${out}/home-desktop.png`});
  await page.locator('#mave-method').scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>document.querySelector('.m-molecule')?.dataset.scene==='ready',{timeout:10000});
  await page.locator('#mave-method').screenshot({path:`${out}/method-desktop.png`});
  await shot('home-full');await overflow();console.log('PASS home, Three.js scene and desktop layout');
  await goto('/checkout/contact');assert.match(await page.locator('h1').innerText(),/empty/);assert.equal(await page.getByText('Glow Renewal Serum').count(),0);console.log('PASS empty checkout has no fake items');
  await goto('/collections');assert.equal(await page.locator('.m-product-card').count(),14);
  await page.getByLabel('Search by role').fill('barrier');assert.ok(await page.locator('.m-product-card').count()>0);
  await page.getByLabel('Search by role').fill('nothingmatches');assert.equal(await page.locator('.m-product-card').count(),0);
  await page.getByRole('button',{name:'Clear filters'}).click();assert.equal(await page.locator('.m-product-card').count(),14);
  await page.getByLabel('Sort formulas').selectOption('price-low');assert.match(await page.locator('.m-product-title').first().innerText(),/Micellar Wipes/);
  await page.getByLabel('Sort formulas').selectOption('featured');await shot('catalog-desktop');
  await page.getByRole('button',{name:'Quick shop',exact:true}).first().click();await page.getByRole('button',{name:'Add to cart',exact:true}).click();await page.getByRole('dialog',{name:'Shopping bag'}).waitFor();await page.getByRole('button',{name:'Remove Molecular Oil Treatment from cart',exact:true}).click();await page.keyboard.press('Escape');
  await page.getByRole('button',{name:'Save Molecular Oil Treatment to wishlist',exact:true}).click();
  await goto('/wishlist');assert.equal(await page.locator('.m-product-card').count(),1);await page.reload();assert.equal(await page.locator('.m-product-card').count(),1);console.log('PASS search, sorting, empty state and wishlist persistence');
  await page.getByRole('button',{name:'Add to ritual'}).click();await page.getByRole('dialog',{name:'Shopping bag'}).waitFor();
  await page.getByRole('button',{name:'Increase Molecular Oil Treatment quantity'}).click();await page.screenshot({path:`${out}/cart-desktop.png`});
  await page.keyboard.press('Escape');await page.getByRole('dialog',{name:'Shopping bag'}).waitFor({state:'hidden'});
  await page.reload();await page.getByRole('button',{name:'Cart (2)',exact:true}).click();
  await page.getByRole('button',{name:'Checkout',exact:true}).click();await page.waitForURL('**/checkout/contact');
  await page.getByRole('button',{name:/Continue as guest/}).click();assert.match(await page.getByRole('alert').innerText(),/valid email/);
  await page.getByPlaceholder('Enter your email').fill('qa@example.com');await shot('checkout-contact-desktop');
  await page.getByRole('button',{name:/Continue as guest/}).click();await page.waitForURL('**/checkout/delivery');
  await page.getByRole('button',{name:'Continue to payment',exact:true}).click();assert.match(await page.getByRole('alert').innerText(),/Complete your country/);
  await page.getByLabel('Country / Region').selectOption('Estonia');
  for(const [label,value] of [['First name','Test'],['Last name','Customer'],['Address','Test street 1'],['Postal code','80010'],['City','Pärnu']]) await page.getByLabel(label,{exact:true}).fill(value);
  await shot('checkout-delivery-desktop');await page.getByRole('button',{name:'Continue to payment',exact:true}).click();await page.waitForURL('**/checkout/payment');
  assert.match(await page.locator('main').innerText(),/No payment has been taken/);assert.equal(await page.getByPlaceholder('Card number').count(),0);
  assert.equal(await page.evaluate(()=>localStorage.getItem('mave-checkout-payment')),null);await shot('checkout-payment-desktop');
  await page.getByRole('link',{name:/Review your selection/}).click();await page.waitForURL('**/checkout/review');
  assert.equal(await page.getByRole('button',{name:'Ordering not available'}).isDisabled(),true);await shot('checkout-review-desktop');console.log('PASS cart persistence, quantity, Escape, validation and unavailable payment');
  await goto('/?product=molecular-oil-treatment');await page.locator('button.m-link[aria-pressed]').waitFor();await shot('pdp-desktop');
  await goto('/routine-guide');await shot('routine-desktop');
  for(const label of ['Dry','Barrier','Minimal','Oil']) await page.getByRole('button',{name:new RegExp('^'+label+' Choose$')}).click();
  assert.ok(await page.evaluate(()=>Object.keys(JSON.parse(localStorage.getItem('mave-routine-guide')||'{}')).length===4));
  await page.reload();assert.ok(await page.evaluate(()=>Object.keys(JSON.parse(localStorage.getItem('mave-routine-guide')||'{}')).length===4));
  await goto('/account');assert.equal(await page.getByText('Alessandra',{exact:true}).count(),0);await shot('account-desktop');
  await goto('/science');await shot('science-desktop');console.log('PASS PDP, routine, account and science routes');
  await page.setViewportSize({width:390,height:844});
  for(const [route,name] of [['/','home-mobile'],['/collections','catalog-mobile'],['/?product=molecular-oil-treatment','pdp-mobile'],['/checkout/contact','checkout-contact-mobile'],['/checkout/delivery','checkout-delivery-mobile'],['/checkout/payment','checkout-payment-mobile'],['/checkout/review','checkout-review-mobile']]){
   await goto(route);await overflow();await shot(name);if(name==='home-mobile') await page.screenshot({path:`${out}/home-mobile-viewport.png`});
  }
  console.log('PASS 390px home, catalog, PDP and checkout layout');
  await page.emulateMedia({reducedMotion:'reduce'});await goto('/');await page.locator('#mave-method').scrollIntoViewIfNeeded();await page.waitForFunction(()=>document.querySelector('.m-molecule')?.dataset.scene==='ready');await shot('reduced-motion');
  assert.deepEqual(errors,[],'JavaScript errors');assert.deepEqual(missing,[],'Missing local assets');
  console.log('PASS reduced motion, no JS errors, no missing local assets');
  await fs.writeFile(`${out}/result.json`,JSON.stringify({passed:true,errors,missing,checkedAt:new Date().toISOString()},null,2));
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1;});


