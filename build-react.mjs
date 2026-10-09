// Builds the React version of V-TECH FOUNDRY.
//   node build-react.mjs
//     react/VTechFoundry.jsx        -> the self-contained component (paste into a Claude React artifact as-is)
//     dist/vtechfoundry-react.html  -> the same component compiled into one HTML page (React from cdnjs, Tailwind play CDN)
import fs from 'fs';
import { build } from 'esbuild';
import * as O from './react/overlay.mjs';

const read = (p) => fs.readFileSync(p, 'utf8');
const rawInds = fs.readdirSync('data/industries').filter((f) => f.endsWith('.json')).map((f) => JSON.parse(read('data/industries/' + f))).sort((a, b) => a.order - b.order);
const rawSols = JSON.parse(read('data/solutions.json'));

const solutions = new Map();
const addSol = (s) => solutions.set(s.id, { id: s.id, icon: s.icon, layer: O.LAYER[s.id], name: s.name, tagline: s.tagline, description: s.description });
rawSols.forEach(addSol);
rawInds.forEach((i) => (i.newSolutions || []).forEach((s) => { if (!solutions.has(s.id)) addSol(s); }));
solutions.set(O.AI_AGENT.id, { ...O.AI_AGENT, layer: O.LAYER[O.AI_AGENT.id] });
const order = ['ai-agent', 'email-security', 'anti-ddos-cdn', 'web-waf', 'cdn', 'anti-ddos-waf', 'dlp', 'database-security', 'ai-legal'];
const solList = order.filter((id) => solutions.has(id)).map((id) => solutions.get(id));
for (const s of solutions.values()) if (!order.includes(s.id)) throw new Error('solution not ordered: ' + s.id);
for (const s of solList) if (!s.layer) throw new Error('solution without layer: ' + s.id);

const industries = rawInds.map((i) => {
  if (!O.STORIES[i.id]) throw new Error('missing story: ' + i.id);
  const bundle = [...i.bundle, ...(O.BUNDLE_ADD[i.id] || [])];
  bundle.forEach((id) => { if (!solutions.has(id)) throw new Error(`${i.id}: unknown solution ${id}`); });
  return {
    id: i.id, icon: i.icon, name: O.NAME_OVERRIDE[i.id] || i.name, bundle, image: O.IMAGES[i.id] || null,
    story: O.STORIES[i.id], outcomes: i.outcomes.map((o) => o.title)
  };
});

const lean = (s) => (s.id === 'ai-agent' ? s : { id: s.id, icon: s.icon, layer: s.layer, name: s.name, tagline: s.tagline });
const DATA = { solutions: solList.map(lean), industries, signing: O.SIGNING, experts: O.EXPERTS };
const dataSrc = `const DATA = ${JSON.stringify(DATA, null, 1)};`;
const jsx = read('react/template.jsx').replace('/*__DATA__*/', () => dataSrc);
fs.writeFileSync('react/VTechFoundry.jsx', jsx);

// ---- compile for the standalone HTML page ----
const globalsPlugin = {
  name: 'react-globals',
  setup(b) {
    const map = { react: 'window.React', 'react-dom/client': 'window.ReactDOM', 'react-dom': 'window.ReactDOM' };
    b.onResolve({ filter: /^react(-dom(\/client)?)?$/ }, (a) => ({ path: a.path, namespace: 'g' }));
    b.onLoad({ filter: /.*/, namespace: 'g' }, (a) => ({ contents: `module.exports = ${map[a.path]};`, loader: 'js' }));
  }
};
const entry = `import React from 'react';import { createRoot } from 'react-dom/client';import App from './react/VTechFoundry.jsx';
createRoot(document.getElementById('root')).render(React.createElement(App));`;
const out = await build({
  stdin: { contents: entry, resolveDir: process.cwd(), loader: 'jsx' }, bundle: true, write: false, format: 'iife', minify: true,
  target: 'es2019', jsx: 'transform', plugins: [globalsPlugin], legalComments: 'none'
});
const bundle = out.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
const html = `<title>V-TECH FOUNDRY</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500..800&family=Inter:wght@400..700&display=swap">
<style>:root{color-scheme:light}body{background:#ffffff;color:#0f172a;margin:0}</style>
<div id="root"></div>
<script src="https://cdn.tailwindcss.com/3.4.17"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js"></script>
<script>
${bundle}
</script>
`;
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/vtechfoundry-react.html', html);
console.log('jsx', (jsx.length / 1024).toFixed(0) + ' KB', '| html', (html.length / 1024).toFixed(0) + ' KB');
