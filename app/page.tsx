'use client';

import Link from 'next/link';
import { VscArrowRight, VscBook, VscCode, VscGithub } from 'react-icons/vsc';

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
            <p className={styles.greeting}>WELCOME TO</p>

            <h1 className={styles.name}>ax123{'\uC758'} {'\uBE14\uB85C\uADF8'}</h1>

            <p className={styles.role}>{'\uBCF4\uC548 \u00B7 \uAC1C\uBC1C \u00B7 \uD559\uC2B5 \uAE30\uB85D'}</p>

            <div className={styles.divider} />

            <p className={styles.description}>
              {'\uAC1C\uBC1C\uD558\uBA74\uC11C \uBC30\uC6B4 \uAC83, CTF\uC640 Bug Bounty\uC5D0\uC11C \uC815\uB9AC\uD560 \uAC83, '}
              {'\uADF8\uB9AC\uACE0 \uB2E4\uC2DC \uAEBC\uB0B4 \uBCFC \uAE30\uC220 \uBB38\uC11C\uB97C \uCC28\uBD84\uD558\uAC8C \uC313\uC544\uAC00\uB294 \uACF5\uAC04\uC785\uB2C8\uB2E4.'}
            </p>
          </div>

          <div className={styles.actions}>
            <Link href="/blog" className={styles.primaryAction}>
              <span>{'\uBE14\uB85C\uADF8 \uBCF4\uAE30'}</span>
              <VscArrowRight size={18} />
            </Link>

            <Link href="/dev" className={styles.secondaryAction}>
              <span>{'\uAC1C\uBC1C \uAE30\uB85D \uBCF4\uAE30'}</span>
            </Link>
          </div>

          <div className={styles.links}>
            <Link href="/ctf" className={styles.link}>
              <VscCode size={16} />
              <span>CTF</span>
            </Link>

            <span className={styles.linkSeparator}>/</span>

            <Link href="/blog" className={styles.link}>
              <VscBook size={16} />
              <span>{'\uAE30\uC220 \uBB38\uC11C'}</span>
            </Link>

            <span className={styles.linkSeparator}>/</span>

            <a
              href="https://github.com/G0ldax123"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithub size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
