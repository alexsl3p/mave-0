import * as THREE from './vendor/three.module.min.js';

// A decorative interpretation of molecular structure, not a scientific model.
export function mountMolecule(host) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); }
  catch { return () => {}; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 40);
  camera.position.z = 9;
  const group = new THREE.Group();
  scene.add(group);
  scene.add(new THREE.HemisphereLight(0xfff3db, 0x51371f, 3));
  const light = new THREE.DirectionalLight(0xffe4b6, 5);
  light.position.set(-3, 5, 4);
  scene.add(light);
  const rim = new THREE.DirectionalLight(0xffffff, 3);
  rim.position.set(3, -2, 2);
  scene.add(rim);
  const sphere = new THREE.SphereGeometry(1, 32, 24);
  const bond = new THREE.CylinderGeometry(0.022, 0.022, 1, 10);
  const amber = new THREE.MeshPhysicalMaterial({ color: 0xb88642, metalness: 0.35, roughness: 0.18, clearcoat: 1 });
  const pearl = new THREE.MeshPhysicalMaterial({ color: 0xe8d7b8, metalness: 0.2, roughness: 0.23, clearcoat: 1 });
  const wire = new THREE.MeshStandardMaterial({ color: 0xad8653, metalness: 0.55, roughness: 0.35 });
  const points = [[0,0,0],[-1.2,.7,.3],[1.05,.95,-.4],[1.3,-.75,.4],[-.6,-1.2,-.55],[-2,.1,-.3],[.7,1.9,.15],[2.2,-.15,-.2],[-1.4,-1.85,.1]];
  points.forEach((point,i)=>{
    const node = new THREE.Mesh(sphere, i % 3 ? pearl : amber);
    node.position.set(...point);
    node.scale.setScalar(i === 0 ? .58 : i < 5 ? .38 : .22);
    group.add(node);
  });
  [[0,1],[0,2],[0,3],[0,4],[1,5],[2,6],[3,7],[4,8],[1,4],[2,3]].forEach(([a,b])=>{
    const start = new THREE.Vector3(...points[a]);
    const end = new THREE.Vector3(...points[b]);
    const mesh = new THREE.Mesh(bond, wire);
    mesh.position.copy(start).add(end).multiplyScalar(.5);
    mesh.scale.y = start.distanceTo(end);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0), end.sub(start).normalize());
    group.add(mesh);
  });
  let frame = 0, active = false, disposed = false, pointerX = 0, pointerY = 0;
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const render = time => {
    frame = 0;
    if (disposed) return;
    const t = media.matches ? 0 : time * .00016;
    group.rotation.y = Math.sin(t) * .38 + pointerX;
    group.rotation.x = Math.cos(t * .8) * .12 + pointerY;
    group.rotation.z = -.22;
    renderer.render(scene, camera);
    if(active && !document.hidden && !media.matches) frame = requestAnimationFrame(render);
  };
  const refresh = () => {
    cancelAnimationFrame(frame); frame = 0;
    if(active && !document.hidden) render(performance.now());
  };
  const resize = new ResizeObserver(()=>{
    const {width,height}=host.getBoundingClientRect();
    renderer.setSize(width, height);
    camera.aspect = width / Math.max(height,1);
    camera.updateProjectionMatrix(); refresh();
  });
  resize.observe(host);
  const observer = new IntersectionObserver(([entry])=>{ active=entry.isIntersecting; refresh(); });
  observer.observe(host);
  const move = event => {
    if (media.matches || event.pointerType === 'touch') return;
    const rect=host.getBoundingClientRect();
    pointerX=(event.clientX-rect.left-rect.width/2)/rect.width*.25;
    pointerY=(event.clientY-rect.top-rect.height/2)/rect.height*.15;
  };
  const contextLost = event => {event.preventDefault(); host.dataset.scene='fallback'; active=false; cancelAnimationFrame(frame);};
  renderer.domElement.addEventListener('webglcontextlost',contextLost);
  host.dataset.scene='ready';
  host.addEventListener('pointermove',move);
  document.addEventListener('visibilitychange',refresh);
  media.addEventListener('change',refresh);
  return ()=>{
    disposed=true; cancelAnimationFrame(frame); observer.disconnect(); resize.disconnect();
    host.removeEventListener('pointermove',move);
    document.removeEventListener('visibilitychange',refresh); media.removeEventListener('change',refresh);
    sphere.dispose(); bond.dispose(); amber.dispose(); pearl.dispose(); wire.dispose();
    renderer.dispose(); renderer.domElement.remove(); delete host.dataset.scene;
  };
}
