export async function load({fetch}) {
    const res = await fetch('/api/articles');
    const posts = await res.json();
    return {
        posts
    }
}