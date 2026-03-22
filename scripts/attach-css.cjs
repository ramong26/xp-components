const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const esmPath = path.join(distDir, 'index.mjs');
const cjsPath = path.join(distDir, 'index.cjs');

if (fs.existsSync(esmPath)) {
  const esm = fs.readFileSync(esmPath, 'utf8');
  if (!esm.startsWith("import './index.css';")) {
    fs.writeFileSync(esmPath, "import './index.css';\n" + esm);
  }
}

if (fs.existsSync(cjsPath)) {
  const cjs = fs.readFileSync(cjsPath, 'utf8');
  const prefix = "try { require('./index.css'); } catch {}\n";
  if (!cjs.startsWith(prefix)) {
    fs.writeFileSync(cjsPath, prefix + cjs);
  }
}
