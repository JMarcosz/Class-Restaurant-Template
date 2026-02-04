import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const IMAGE_QUALITY = 85;
const MAX_SIZES = {
  background: { width: 1920, height: 1080 },
  banner: { width: 800, height: 800 },
  icon: { width: 64, height: 64 },
  product: { width: 800, height: 800 }
};

async function convertToWebP(inputPath, outputPath, maxSize) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    let resizeOptions = {};
    if (maxSize) {
      resizeOptions = {
        width: maxSize.width,
        height: maxSize.height,
        fit: 'inside',
        withoutEnlargement: true
      };
    }

    await image
      .resize(resizeOptions)
      .webp({ quality: IMAGE_QUALITY })
      .toFile(outputPath);

    console.log(`✓ Converted: ${basename(inputPath)} -> ${basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error converting ${inputPath}:`, error.message);
  }
}

async function processDirectory(inputDir, outputDir, maxSize) {
  try {
    if (!existsSync(outputDir)) {
      await mkdir(outputDir, { recursive: true });
    }

    const files = await readdir(inputDir, { withFileTypes: true });

    for (const file of files) {
      const inputPath = join(inputDir, file.name);
      
      if (file.isDirectory()) {
        const newOutputDir = join(outputDir, file.name);
        await processDirectory(inputPath, newOutputDir, maxSize);
      } else if (file.isFile()) {
        const ext = extname(file.name).toLowerCase();
        if (['.png', '.jpg', '.jpeg'].includes(ext)) {
          const outputFileName = basename(file.name, ext) + '.webp';
          const outputPath = join(outputDir, outputFileName);
          await convertToWebP(inputPath, outputPath, maxSize);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${inputDir}:`, error.message);
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  const imagesDir = 'src/assets/images';
  const outputDir = 'src/assets/images-webp';

  // Process different image types with appropriate sizes
  console.log('📸 Converting background images...');
  await processDirectory(
    join(imagesDir, 'bannersImg'),
    join(outputDir, 'bannersImg'),
    MAX_SIZES.background
  );

  console.log('\n📸 Converting main images...');
  const mainImages = ['local_bg.png', 'image1.png', 'image2.png', 'image3.png', 'image4.png'];
  for (const img of mainImages) {
    const inputPath = join(imagesDir, img);
    const outputPath = join(outputDir, basename(img, extname(img)) + '.webp');
    if (existsSync(inputPath)) {
      await convertToWebP(inputPath, outputPath, MAX_SIZES.background);
    }
  }

  console.log('\n📸 Converting icon images...');
  const iconImages = ['ig.png', 'tiktok.png'];
  for (const img of iconImages) {
    const inputPath = join(imagesDir, img);
    const outputPath = join(outputDir, basename(img, extname(img)) + '.webp');
    if (existsSync(inputPath)) {
      await convertToWebP(inputPath, outputPath, MAX_SIZES.icon);
    }
  }

  console.log('\n✅ Image optimization complete!');
  console.log(`📁 WebP images saved to: ${outputDir}`);
}

main().catch(console.error);
