'use client';

import Link from 'next/link';
import { VscArrowRight, VscCode, VscGithub } from 'react-icons/vsc';

import { contentSections } from '@/data/navigation';
import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.icon}>
              <VscCode size={32} />
            </div>
          </div>

          <div className={styles.intro}>
            <h1 className={styles.name}>ax123{'\uC758'} {'\uBE14\uB85C\uADF8'}</h1>

            <p className={styles.role}>{'\uBCF4\uC548 \u00B7 \uAC1C\uBC1C. \uD559\uC2B5 \uAE30\uB85D'}</p>

            <div className={styles.divider} />

            <p className={styles.description}>
              {'\uACF5\uBD80\uD55C \uAC83\uB4E4\uC744 \uC815\uB9AC\uD558\uB294 \uBE14\uB85C\uADF8\uC785\uB2C8\uB2E4.'}
            </p>
          </div>

          <div className={styles.actions}>
            <a
              href="https://github.com/G0ldax123"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              <VscGithub size={18} />
              <span>GitHub</span>
              <VscArrowRight size={18} />
            </a>
          </div>

          <div className={styles.links}>
            {contentSections.map((item) => (
              <Link href={item.path} className={styles.link} key={item.path}>
                <VscCode size={16} />
                <span>{item.folderName}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
