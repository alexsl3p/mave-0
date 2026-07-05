// Build step for Vercel: precompile the in-page JSX with esbuild so the
// browser никогда не грузит Babel Standalone. index.html остаётся единственным
// исходником — правьте его как раньше, dist/ собирается автоматически.
import { transform } from 'esbuild';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const dist = path.join(root, 'dist');

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const open = html.indexOf('<script type="text/babel">');
const close = html.lastIndexOf('</script>');
if (open === -1 || close === -1 || close < open) {
  throw new Error('Babel script block not found in index.html');
}
const jsx = html.slice(open + '<script type="text/babel">'.length, close);

const { code } = await transform(jsx, {
  loader: 'jsx',
  target: 'es2019',
  minify: true,
  legalComments: 'none',
});

const hash = createHash('sha256').update(code).digest('hex').slice(0, 8);
const bundleName = `app.${hash}.js`;

let outHtml = html.slice(0, open) + `<script src="/${bundleName}" defer></script>` + html.slice(close + '</script>'.length);
outHtml = outHtml.replace(/^\s*<script[^>]*@babel\/standalone[^>]*><\/script>\s*$/m, '');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'index.html'), outHtml);
fs.writeFileSync(path.join(dist, bundleName), code);
fs.cpSync(path.join(root, 'assets'), path.join(dist, 'assets'), { recursive: true });

const size = (fs.statSync(path.join(dist, bundleName)).size / 1024).toFixed(0);
console.log(`built dist/index.html + dist/${bundleName} (${size} KB, Babel removed)`);
