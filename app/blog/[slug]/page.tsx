export const revalidate = 600; // Secondes

interface Post {
    title: string;
    slug: string;
    content: string;
}

interface Props {
    params: { slug: string; };
}

// Incremental Static Regeneration
export async function generateStaticParams() {
    const posts: Post[] = await fetch('http://127.0.0.1:3000/api/content')
        .then((response) => response.json());
    
    return posts.map((post) => ({
        slug: post.slug
    }));
}

export default async function BlogPostPage({ params }: Props) {
    const posts: Post[] = await fetch('http://127.0.0.1:3000/api/content')
        .then((response) => response.json());
    const post = posts.find((post) => post.slug === params.slug)!; // TODO handle null

    return (
        <div>
            <h1>{ post.title }</h1>
            <p>{ post.content }</p>
        </div>
    );
}
