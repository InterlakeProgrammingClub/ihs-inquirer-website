import { json } from '@sveltejs/kit';

async function getPosts() {
    const modules = import.meta.glob('/src/issues/*.md');
    let posts = [];

    for (const path in modules) {
        const post = await modules[path]();
        const slug = path.split('/').pop().split('.')[0];
        posts.push({...post.metadata, slug});
    }
    
    return posts;
}

export async function GET() {
    const posts = await getPosts();
    return json(posts);
}