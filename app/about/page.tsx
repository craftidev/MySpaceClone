import Link from "next/link";
import { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
    title: 'About us',
    description: 'Follow our projects on Github'
};

export default async function About() {

    return (
        <main>
            <h1>About</h1>
            <p>This is a Next.js training project. See my <Link href={'https://github.com/craftidev/'}>GitHub page</Link>.</p>
        </main>
    );
}
