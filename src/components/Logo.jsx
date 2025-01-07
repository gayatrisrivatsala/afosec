import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Link href="/">
        <Image
          src="/logo.jpg"
          alt="AFOSEC Logo"
          width={50}
          height={50}
          className={styles.logoImage}
        />
      </Link>
      <h1 className={styles.logoText}>AFOSEC</h1>
    </div>
  );
};

export default Logo;
