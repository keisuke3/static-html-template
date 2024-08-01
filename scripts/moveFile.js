import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'

const fileName = fileURLToPath(import.meta.url)
const dirName = path.dirname(fileName)

const buildDir = path.join(dirName, '../dist/src/pages');
const targetDir = path.join(dirName, '../dist');
const imageDir = path.join(dirName, '../dist/assets/images');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const htmlFiles = fs.readdirSync(buildDir).filter(file => file.endsWith('.html'));
htmlFiles.forEach(file => {
  const srcPath = path.join(buildDir, file);
  const destPath = path.join(targetDir, file);
  fs.renameSync(srcPath, destPath);
  console.log(`Moved ${file} to ${targetDir}`);
});

if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

const imageFiles = fs.readdirSync(targetDir).filter(file => /\.(png|jpe?g|webp|avif|svg)$/.test(file));
imageFiles.forEach(file => {
  const srcPath = path.join(targetDir, file);
  const destPath = path.join(imageDir, file);
  fs.renameSync(srcPath, destPath);
  console.log(`Moved ${file} to ${targetDir}`);
});

function deleteDirectory(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.readdirSync(dirPath).forEach((file) => {
      const currentPath = path.join(dirPath, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        deleteDirectory(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
    fs.rmdirSync(dirPath);
  }
}

const srcDir = path.join(targetDir, 'src');
deleteDirectory(srcDir);
console.log(`Deleted ${srcDir}`);
