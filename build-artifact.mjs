// Builds dist/vtechhub.html: ONE self-contained page (css, js, data inlined) for hosts that only take a single file.
//   node build-artifact.mjs
import fs from 'fs';
const read = (p) => fs.readFileSync(p, 'utf8');
const strip = (src) => src.replace(/^import .*$/gm, '').replace(/^export /gm, '');
const industries = fs.readdirSync('data/industries').filter((f) => f.endsWith('.json')).map((f) => JSON.parse(read('data/industries/' + f)));
const experts = JSON.parse(read('data/experts.json')).map((x) => ({ ...x, photo: x.photo ? `data:image/${x.photo.split('.').pop()};base64,` + fs.readFileSync(x.photo).toString('base64') : null }));
const images = JSON.parse(read('data/images.json'));
// local photos are inlined as data URIs so the single-file build is self-contained
for (const v of Object.values(images)) {
  // local photo -> [inline data URI, relative published file]; the second is a fallback when the host serves the files next to the page
  if (v && Array.isArray(v.src)) v.src = v.src.flatMap((x) => (/^https?:/.test(x) ? [x] : [`data:image/${x.split('.').pop()};base64,` + fs.readFileSync(x).toString('base64'), x]));
}
const menu = JSON.parse(read('data/solutionmenu.json'));
const data = { experts, images, menu, ui: JSON.parse(read('data/ui.json')), solutions: JSON.parse(read('data/solutions.json')), industries };
const js = [read('js/config.js'), read('js/icons.js'), read('js/art.js'), read('js/app.js')].map(strip).join('\n');
const html = `<meta charset="utf-8">
<title>V-TECH FOUNDRY</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
${read('css/styles.css')}
</style>
<div id="app"></div>
<script>window.__DATA__ = ${JSON.stringify(data).replace(/</g, '\\u003c')};</script>
<script type="module">
${js}
</script>
`;
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/vtechhub.html', html);
console.log((html.length / 1024).toFixed(0) + ' KB');
