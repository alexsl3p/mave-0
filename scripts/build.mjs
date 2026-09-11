import { readFile, writeFile, mkdir, cp } from 'node:fs/promises';
import { transform } from 'esbuild';

const source = await readFile('index.html','utf8');
const match = source.match(/<script type="text\/babel">([\s\S]*?)<\/script>/);
if(!match) throw new Error('React entry was not found');
const compiled = await transform(match[1], {loader:'jsx', target:'es2020', minify:true, legalComments:'none'});
await mkdir('dist/assets', {recursive:true});
await cp('assets','dist/assets',{recursive:true});
await writeFile('dist/assets/app.js',compiled.code);
let html=source.replace(match[0],'<script src="/assets/app.js" defer></script>');
html=html.replace(/<script src="https:\/\/unpkg.com\/@babel[^\n]+\n/,'');
html=html.replace('https://unpkg.com/react@18.3.1/umd/react.development.js','/assets/vendor/react.production.min.js');
html=html.replace('https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js','/assets/vendor/react-dom.production.min.js');
html=html.replace('https://unpkg.com/framer-motion@6.5.1/dist/framer-motion.js','/assets/vendor/framer-motion.js');
await writeFile('dist/index.html',html);
await cp('mave-logo.svg','dist/mave-logo.svg');
console.log(`Built MAVE: ${Math.round(compiled.code.length/1024)} KB JS; runtime JSX compilation removed.`);
