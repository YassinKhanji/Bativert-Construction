const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const resourcesDir = "C:\\Users\\yassi\\OneDrive\\Documents\\Business and Finance\\Businesses\\Bativert-Construction\\resources";
const targetDir = "C:\\Users\\yassi\\OneDrive\\Documents\\Business and Finance\\Businesses\\Bativert-Construction\\bativert-v2\\public\\project-galleries";

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const generateSlug = (name) => {
  return name.replace(/[^a-zA-Z0-9]/g, '-').replace(/-+/g, '-').toLowerCase();
};

const processFolder = async (folderPath, slug) => {
  const destFolder = path.join(targetDir, slug);
  if (!fs.existsSync(destFolder)) {
    fs.mkdirSync(destFolder, { recursive: true });
  }

  const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
      const dirFile = path.join(dir, file);
      try {
        if (fs.statSync(dirFile).isDirectory()) {
          filelist = walkSync(dirFile, filelist);
        } else {
          filelist.push(dirFile);
        }
      } catch (err) {
      }
    });
    return filelist;
  };

  const files = walkSync(folderPath);
  let count = 0;
  for (const file of files) {
    if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
      count++;
      const destFile = path.join(destFolder, `${count}.jpg`);
      if (!fs.existsSync(destFile)) {
         try {
           await sharp(file)
             .resize(1000, null, { withoutEnlargement: true })
             .jpeg({ quality: 75 })
             .toFile(destFile);
         } catch(e) {
           console.error("Error processing", file, e);
         }
      }
    }
  }
  console.log(`Processed ${count} images for ${slug}`);
};

const main = async () => {
  const folders = fs.readdirSync(resourcesDir);
  for (const f of folders) {
    const fPath = path.join(resourcesDir, f);
    if (fs.statSync(fPath).isDirectory()) {
      const slug = generateSlug(f);
      console.log(`Processing folder ${f} -> ${slug}`);
      await processFolder(fPath, slug);
    }
  }
  console.log("Done!");
}

main();
