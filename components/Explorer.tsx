import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { VscChevronRight } from 'react-icons/vsc';

import { contentSections, markdownIconPath } from '@/data/navigation';
import styles from '@/styles/Explorer.module.css';

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
          AX123
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {contentSections.map((item) => (
            <Link href={item.path} key={item.path}>
              <div className={styles.file}>
                <Image src={markdownIconPath} alt={item.filename} height={18} width={18} />{' '}
                <p>{item.filename}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
