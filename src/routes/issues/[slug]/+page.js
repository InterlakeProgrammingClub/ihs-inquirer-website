export async function load({params}) {
    const post = await import(`../../../issues/${params.slug}.md`);
    console.log(post);
    return {
        content: post.default,
        meta: post.metadata
    }
}