import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(posts);
}

const posts = [
    {
        title: 'Mystical Forest Adventure',
        slug: 'mystical-forest-adventure',
        content: 'The deep woods of the mystical forest were home to many wonders and mysteries.'
    },
    {
        title: 'Secrets of the Ocean Deep',
        slug: 'secrets-of-the-ocean-deep',
        content: 'Beneath the waves, the ocean held secrets unknown to the surface world.'
    },
    {
        title: 'Journey Through the Desert',
        slug: 'journey-through-the-desert',
        content: 'The vast desert stretched endlessly, a challenge for any traveler to cross.'
    },
    {
        title: 'Exploring the Ancient Ruins',
        slug: 'exploring-the-ancient-ruins',
        content: 'The ancient ruins whispered tales of a lost civilization and forgotten lore.'
    },
    {
        title: 'Tales of Distant Galaxies',
        slug: 'tales-of-distant-galaxies',
        content: 'In the night sky, distant galaxies told stories of cosmic wonders and far-off planets.'
    },
    {
        title: 'Enchanted Winter Wonderland',
        slug: 'enchanted-winter-wonderland',
        content: 'The winter wonderland was a magical place where snowflakes danced in the moonlight.'
    }
];
