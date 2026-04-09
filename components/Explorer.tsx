import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { VscChevronRight } from 'react-icons/vsc';

import styles from '@/styles/Explorer.module.css';

const explorerItems = [
  {
    name: '개발.md',
    path: '/dev',
    icon: 'markdown_icon.svg',
  },
  {
    name: 'CTF-Wargame.md',
    path: '/ctf',
    icon: 'markdown_icon.svg',
  },
  {
    name: 'BugBounty.md',
    path: '/bugbounty',
    icon: 'markdown_icon.svg',
  },
  {
    name: '블로그-기술문서.md',
    path: '/blog',
    icon: 'markdown_icon.svg',
  },
  {
    name: '논문-컨퍼런스.md',
    path: '/paper',
    icon: 'markdown_icon.svg',
  },
  {
    name: '공모전-자격증.md',
    path: '/cert',
    icon: 'markdown_icon.svg',
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <VscChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image src={item.icon} alt={item.name} height={18} width={18} />{' '}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
