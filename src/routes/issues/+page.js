export async function load({fetch}) {
    const res = await fetch('/api');
    const posts = await res.json();
    return {
        posts
    }
}