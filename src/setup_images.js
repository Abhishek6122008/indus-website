const fs = require('fs');
const path = require('path');
const https = require('https');

const dirs = [
  'public/images/about',
  'public/images/businesses/logistics',
  'public/images/businesses/enterprise',
  'public/images/businesses/skill-development',
  'public/images/businesses/real-estate',
  'public/images/businesses/hbc-franchise'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const brainDir = 'C:\\Users\\ASUS\\.gemini\\antigravity-ide\\brain\\5aa9182b-f43d-49d8-958b-1cbe426a8c1c';
const filesToCopy = [
  { src: 'company_team_1781861904756.png', dest: 'public/images/about/company-team.png' },
  { src: 'company_story_1781861954242.png', dest: 'public/images/about/company-story.png' },
  { src: 'logistics_hero_1781861994926.png', dest: 'public/images/businesses/logistics/logistics-hero.png' },
  { src: 'enterprise_hero_1781862016381.png', dest: 'public/images/businesses/enterprise/enterprise-hero.png' },
  { src: 'skill_dev_hero_1781862089310.png', dest: 'public/images/businesses/skill-development/skill-dev-hero.png' },
  { src: 'real_estate_hero_1781862106035.png', dest: 'public/images/businesses/real-estate/real-estate-hero.png' }
];

filesToCopy.forEach(f => {
  const srcPath = path.join(brainDir, f.src);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, f.dest);
    console.log(`Copied ${f.src} to ${f.dest}`);
  } else {
    console.error(`Source not found: ${srcPath}`);
  }
});

const franchiseUrl = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop';
const franchiseDest = 'public/images/businesses/hbc-franchise/hbc-hero.png';

const file = fs.createWriteStream(franchiseDest);
https.get(franchiseUrl, response => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded franchise image to ' + franchiseDest);
  });
}).on('error', err => {
  fs.unlink(franchiseDest, () => {});
  console.error('Error downloading franchise image:', err.message);
});
