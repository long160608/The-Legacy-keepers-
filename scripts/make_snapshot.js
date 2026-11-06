/**
 * THE LEGACY KEEPERS - AUTOMATED PROJECT SNAPSHOT TOOL
 * Creates an instant full project checkpoint in the _backups/ directory.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_DIR = path.resolve(__dirname, '..');
const BACKUP_BASE_DIR = path.join(PROJECT_DIR, '_backups');

function formatTimestamp(d) {
  const pad = n => String(n).padStart(2, '0');
  const yyyy = d.getFullYear();
  const MM = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const HH = pad(d.getHours());
  const mm = pad(d.getMinutes());
  const ss = pad(d.getSeconds());
  return `${yyyy}-${MM}-${dd}_${HH}-${mm}-${ss}`;
}

function copyRecursive(src, dest, ignoreDirs = ['node_modules', '.git', '_backups', '__pycache__']) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (ignoreDirs.includes(entry.name)) continue;

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath, ignoreDirs);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function createSnapshot(customNote = '') {
  const now = new Date();
  const stamp = formatTimestamp(now);
  const backupFolder = path.join(BACKUP_BASE_DIR, `backup_${stamp}`);

  console.log('================================================================');
  console.log('📦 DANG TAO BAN SAVE (PROJECT SNAPSHOT)...');
  console.log(`-> Thu muc luu: _backups/backup_${stamp}`);

  // Create backup directory
  fs.mkdirSync(backupFolder, { recursive: true });

  // 1. Copy app directory
  copyRecursive(path.join(PROJECT_DIR, 'app'), path.join(backupFolder, 'app'));

  // 2. Copy root files
  const rootFiles = ['server.py', 'start.bat', 'readme.md', '.env', '.gitignore'];
  rootFiles.forEach(f => {
    const p = path.join(PROJECT_DIR, f);
    if (fs.existsSync(p)) {
      fs.copyFileSync(p, path.join(backupFolder, f));
    }
  });

  // 3. Copy schemas and scripts
  if (fs.existsSync(path.join(PROJECT_DIR, 'schemas'))) {
    copyRecursive(path.join(PROJECT_DIR, 'schemas'), path.join(backupFolder, 'schemas'));
  }
  if (fs.existsSync(path.join(PROJECT_DIR, 'scripts'))) {
    copyRecursive(path.join(PROJECT_DIR, 'scripts'), path.join(backupFolder, 'scripts'));
  }

  // 4. Inspect data.json
  let dataSummary = {};
  const dataPath = path.join(PROJECT_DIR, 'app', 'data.json');
  if (fs.existsSync(dataPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      dataSummary = {
        pinsCount: (data.pins || []).length,
        figuresCount: (data.figures || []).length,
        storiesCount: (data.stories || []).length,
        badgesCount: (data.badges || []).length
      };
    } catch (e) {}
  }

  // 5. Try getting git commit hash
  let gitCommit = 'N/A';
  try {
    gitCommit = execSync('git rev-parse --short HEAD', { cwd: PROJECT_DIR, stdio: ['pipe', 'pipe', 'ignore'] }).toString().trim();
  } catch (e) {}

  // 6. Write manifest
  const manifest = {
    timestamp: now.toISOString(),
    humanTime: now.toLocaleString('vi-VN'),
    folderName: `backup_${stamp}`,
    note: customNote || 'Ban save thu cong',
    gitCommit,
    dataSummary
  };
  fs.writeFileSync(path.join(backupFolder, 'snapshot_info.json'), JSON.stringify(manifest, null, 2), 'utf8');

  // Also maintain an index file of all snapshots in _backups/snapshots_index.json
  const indexPath = path.join(BACKUP_BASE_DIR, 'snapshots_index.json');
  let indexList = [];
  if (fs.existsSync(indexPath)) {
    try {
      indexList = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    } catch (e) {}
  }
  indexList.unshift(manifest);
  fs.writeFileSync(indexPath, JSON.stringify(indexList, null, 2), 'utf8');

  console.log('✓ DA TAO BAN SAVE HOAN TAT AN TOAN 100%!');
  console.log(`-> Thoi gian: ${manifest.humanTime}`);
  console.log(`-> Dữ liệu: ${dataSummary.pinsCount || 0} Pins, ${dataSummary.figuresCount || 0} Danh nhân, ${dataSummary.storiesCount || 0} Giai thoại, ${dataSummary.badgesCount || 0} Huy hiệu`);
  console.log('================================================================');
  return manifest;
}

if (require.main === module) {
  const note = process.argv.slice(2).join(' ');
  createSnapshot(note);
}

module.exports = { createSnapshot };
