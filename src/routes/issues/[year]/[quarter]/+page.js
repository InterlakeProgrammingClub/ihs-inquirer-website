export async function load({fetch}) {
    const res = await fetch('/api/structure');
    const posts = await res.json();
    return {
        posts
    }
}