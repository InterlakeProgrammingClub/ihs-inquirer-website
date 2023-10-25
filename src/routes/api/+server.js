import { json } from '@sveltejs/kit';

async function getPosts() {
    const modules = import.meta.glob('/src/issues/*/*/*.md');
    let posts = {};

    for (const path in modules) {
        const post = await modules[path]();
        const years = path.split('/')[3];
        const season = path.split('/')[4];
        
        if(!posts[years]) {
            posts[years] = {};
        }
        if(!posts[years][season]) {
            posts[years][season] = [];
        }

        const slug = path.split('/').pop().split('.')[0];
        posts[years][season].push({...post.metadata, slug});
    }

    return posts;
}

export async function GET() {
    const posts = await getPosts();
    return json(posts);
}