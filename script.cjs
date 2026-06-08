const fs=require('fs'); 
let c = fs.readFileSync('src/content.config.ts', 'utf8'); 
c = c.replace(/import \{ z, defineCollection \} from 'astro:content';/, "import { defineCollection } from 'astro:content';\nimport { z } from 'astro:schema';"); 
fs.writeFileSync('src/content.config.ts', c);
