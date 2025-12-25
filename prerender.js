import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// Manifest not used currently

// Determine the base path from the environment or default
// This should match vite.config.ts base
const BASE = '/BlogCaNhan/';

// Mock window/document for any code that might access it immediately (though unlikely in SSR if careful)
// But constants.tsx might need it? No, constants just defines data.

async function main() {
    const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');

    // Import the server render function
    // Note: We need to handle the import path carefully
    const { render } = await import('./dist/server/entry-server.js');

    // Define routes to prerender
    // We can fetch this from the server bundle if we exported routes, 
    // but for now we can hardcode the static ones plus dynamic ones from constants if accessible.
    // HOWEVER, we can't easily import constants.tsx here because it's TS and has Vite specific syntax.
    // Best approach: Export the list of paths from the server entry as well!

    // Let's do a hardcoded list for now + try to infer if possible, OR just duplicate the logic efficiently.
    // Actually, importing the constants from the built server bundle is possible?
    // Let's rely on a predefined list or modify entry-server to export routes.

    // For simplicity in this step, I'll hardcode the known routes + I'll read the blog posts from file to generate dynamic routes
    // OR I can parse constants.tsx content with regex? That's hacky.
    // Better: I will modify entry-server.tsx to export the routes list!

    // Wait, I cannot modify entry-server.tsx in this tool call easily without retracing steps.
    // I will just read the file manually or duplicate the BLOG_POSTS logic here?
    // No, duplicating is bad.
    // I will look at constants.tsx again. It is a pure TS file. 
    // The built server bundle SHOULD contain the constants.

    // Temporary: I will define Static paths.
    const routesToPrerender = ['/', '/about', '/blog', '/certificates'];

    // Dynamic routes: unfortunately I need the IDs.
    // I will trust that I can import them from the server bundle if it exports them?
    // 'entry-server.tsx' only exports 'render'.

    // PLAN CHANGE: I will use a helper to get routes, OR just regex parse the constants.tsx file here to get IDs. 
    // Since this is a build script, regex on source is acceptable and robust enough for this simple structure.

    const constantsContent = fs.readFileSync(toAbsolute('constants.tsx'), 'utf-8');
    const postIdRegex = /id:\s*'([^']+)'/g;
    let match;
    while ((match = postIdRegex.exec(constantsContent)) !== null) {
        routesToPrerender.push(`/blog/${match[1]}`);
    }

    console.log('Pre-rendering routes:', routesToPrerender);

    for (const url of routesToPrerender) {
        // Construct full URL matching the basename expected by StaticRouter
        const fullUrl = url === '/' ? BASE : BASE + url.substring(1);

        const appHtml = await render(fullUrl);

        // Inject the app-rendered HTML into the template.
        const html = template.replace(`<!--ssr-outlet-->`, appHtml);

        // Save the file.
        // url is like /blog/abc. We want dist/blog/abc/index.html
        const filePath = `dist/static${url === '/' ? '/index.html' : `${url}/index.html`}`;
        const dir = path.dirname(toAbsolute(filePath));
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(toAbsolute(filePath), html);
        console.log(`Prerendered ${filePath}`);
    }

    // Move everything from dist/static to dist (optional, or just deploy dist/static)
    // But gh-pages usually deploys 'dist'.
    // If I build client to dist/static, I should deploy dist/static.
    // I will update package.json to deploy dist/static.
}

main();
