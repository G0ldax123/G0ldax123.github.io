'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { VscArrowRight, VscCode, VscCopy, VscGithub, VscMail } from 'react-icons/vsc';

import { contentSections } from '@/data/navigation';
import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  const email = 'kdo1206@korea.ac.kr';
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isCopied) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsCopied(false);
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [isCopied]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  };

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

            <h1 className={styles.name}>ax123&apos;s blog</h1>

            <p className={styles.role}>{'\uBCF4\uC548 \u00B7 \uAC1C\uBC1C \u00B7 \uD559\uC2B5 \uAE30\uB85D'}</p>

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
            <div className={styles.contactWrapper} ref={contactRef}>
              <button
                type="button"
                className={styles.secondaryAction}
                onClick={() => setIsContactOpen((prev) => !prev)}
                aria-expanded={isContactOpen}
                aria-haspopup="dialog"
              >
                <VscMail size={18} />
                <span>Contact</span>
              </button>

              {isContactOpen && (
                <div className={styles.contactPopover} role="dialog" aria-label="Contact information">
                  <p className={styles.contactLabel}>E-mail</p>
                  <p className={styles.contactEmail}>{email}</p>
                  <button type="button" className={styles.copyButton} onClick={handleCopyEmail}>
                    <VscCopy size={16} />
                    <span>{isCopied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              )}
            </div>
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
