// Builds dist/vtechhub.html: ONE self-contained page (css, js, data inlined) for hosts that only take a single file.
//   node build-artifact.mjs            -> animation libs from jsdelivr (what the artifact publishes)
//   node build-artifact.mjs --local    -> libs inlined from assets/vendor (offline testing)
import fs from 'fs';
const local = process.argv.includes('--local');
const read = (p) => fs.readFileSync(p, 'utf8');
const strip = (src) => src.replace(/^import .*$/gm, '').replace(/^export /gm, '');
const industries = fs.readdirSync('data/industries').filter((f) => f.endsWith('.json')).map((f) => JSON.parse(read('data/industries/' + f)));
const data = { ui: JSON.parse(read('data/ui.json')), solutions: JSON.parse(read('data/solutions.json')), industries };
const js = [read('js/config.js'), read('js/icons.js'), read('js/scenes.js'), read('js/app.js')].map(strip).join('\n');
const libs = local
  ? ['gsap.min.js', 'ScrollTrigger.min.js', 'lenis.min.js'].map((f) => `<script>${read('assets/vendor/' + f)}</script>`).join('\n')
  : ['gsap@3.12.5/dist/gsap.min.js', 'gsap@3.12.5/dist/ScrollTrigger.min.js', 'lenis@1.1.18/dist/lenis.min.js'].map((p) => `<script src="https://cdn.jsdelivr.net/npm/${p}"></script>`).join('\n');
const html = `<meta charset="utf-8">
<title>V-TECH HUB</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,200;0,6..72,300;0,6..72,400;1,6..72,300&display=swap" rel="stylesheet">
<style>
${read('css/styles.css')}
</style>
<div id="app"></div>
${libs}
<script>window.__DATA__ = ${JSON.stringify(data).replace(/</g, '\\u003c')};</script>
<script type="module">
${js}
</script>
`;
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync(local ? 'dist/vtechhub.local.html' : 'dist/vtechhub.html', html);
console.log(local ? 'local' : 'cdn', (html.length / 1024).toFixed(0) + ' KB');
