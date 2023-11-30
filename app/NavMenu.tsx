import Image from 'next/image';
import Link from 'next/link';
import styles from './NavMenu.module.css';

export default function NavMenu() {
    return (
        <nav className={styles.nav}>
            <p className={styles.logo}>
                <Link href={'/'}>
                    <Image
                        src="/logo.svg"
                        width={60}
                        height={60}
                        alt="MySpaceClone Logo"
                    />
                    <Image
                        src="/logo_text.png"
                        width={500}
                        height={60}
                        alt="MySpaceClone Text Logo"
                    />
                </Link>
            </p>
            <ul className={styles.links}>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'/blog'}>Blog</Link>
                </li>
                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
            </ul>
        </nav>
    );
}
