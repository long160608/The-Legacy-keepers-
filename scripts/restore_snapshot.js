/**
 * THE LEGACY KEEPERS - RESTORE SNAPSHOT TOOL
 * Restores project files and data from a backup snapshot.
 */
const fs = require('fs');
const path = require('path');

const PROJECT_DIR = path.resolve(__dirname, '..');
const BACKUP_BASE_DIR = path.join(PROJECT_DIR, '_backups');

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function restoreLatestSnapshot() {
  const indexPath = path.join(BACKUP_BASE_DIR, 'snapshots_index.json');
  if (!fs.existsSync(indexPath)) {
    console.error('❌ Khong tim thay ban save nao trong _backups/!');
    return false;
  }

  let indexList = [];
  try {
    indexList = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  } catch (e) {
    console.error('❌ Loi doc danh sach ban save:', e.message);
    return false;
  }

  if (indexList.length === 0) {
    console.error('❌ Danh sach ban save trong!');
    return false;
  }

  const latest = indexList[0];
  const targetBackupFolder = path.join(BACKUP_BASE_DIR, latest.folderName);

  if (!fs.existsSync(targetBackupFolder)) {
    console.error(`❌ Khong tim thay thu muc: ${targetBackupFolder}`);
    return false;
  }

  console.log('================================================================');
  console.log(`⏪ DANG KHOI PHUC BAN SAVE: ${latest.folderName}`);
  console.log(`-> Thoi gian tao: ${latest.humanTime}`);

  // Restore app directory
  const backupAppDir = path.join(targetBackupFolder, 'app');
  if (fs.existsSync(backupAppDir)) {
    copyRecursive(backupAppDir, path.join(PROJECT_DIR, 'app'));
  }

  console.log('✓ DA KHOI PHUC HOAN TAT THANH CONG!');
  console.log('================================================================');
  return true;
}

if (require.main === module) {
  restoreLatestSnapshot();
}

module.exports = { restoreLatestSnapshot };
