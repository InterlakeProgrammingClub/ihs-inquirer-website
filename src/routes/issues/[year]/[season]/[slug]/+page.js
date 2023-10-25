export async function load({params, url}) {
    const URL = url.pathname;

    const year = URL.split('/')[2];
    const season = URL.split('/')[3];

    const post = await import(`/src/issues/${year}/${season}/${params.slug}.md`);
    console.log(post);
    return {
        content: post.default,
        meta: post.metadata
    }
}