'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  VscArrowRight,
  VscBook,
  VscFolderLibrary,
  VscGithubAlt,
  VscRepo,
  VscShield,
} from 'react-icons/vsc';

import styles from '@/styles/CtfPage.module.css';

const TREE_API_URL =
  'https://api.github.com/repos/G0ldax123/ctf-writeups/git/trees/main?recursive=1';
const REPO_URL = 'https://github.com/G0ldax123/ctf-writeups';

const formatLabel = (value) =>
  value
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const parseWriteupPath = (path) => {
  const segments = path.split('/');

  if (segments.length < 3) return null;

  const [year, event, maybeCategory, maybeChallenge] = segments;
  const hasCategory = segments.length >= 5;
  const category = hasCategory ? maybeCategory : null;
  const challenge = hasCategory ? maybeChallenge : maybeCategory;
  const filename = segments[segments.length - 1];

  return {
    year,
    event: formatLabel(event),
    category: category ? formatLabel(category) : null,
    challenge: formatLabel(challenge),
    filename,
    path,
    url: `${REPO_URL}/blob/main/${path}`,
  };
};

const Page = () => {
  const [writeups, setWriteups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const loadWriteups = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(TREE_API_URL, {
          headers: {
            Accept: 'application/vnd.github+json',
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        const markdownFiles = (data.tree || [])
          .filter((item) => item.type === 'blob')
          .filter((item) => /(writeup|wrtieup)\.md$/i.test(item.path))
          .map((item) => parseWriteupPath(item.path))
          .filter(Boolean)
          .sort((a, b) => b.path.localeCompare(a.path));

        if (!cancelled) {
          setWriteups(markdownFiles);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            'ctf-writeups 레포를 불러오지 못했습니다. 잠시 후 다시 시도해주세요.'
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadWriteups();

    return () => {
      cancelled = true;
    };
  }, []);

  const stats = useMemo(() => {
    const years = new Set(writeups.map((item) => item.year));
    const events = new Set(writeups.map((item) => `${item.year}-${item.event}`));

    return {
      total: writeups.length,
      years: years.size,
      events: events.size,
    };
  }, [writeups]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerMain}>
            <div className={styles.iconWrapper}>
              <VscShield className={styles.icon} size={24} />
            </div>

            <div className={styles.headerContent}>
              <div className={styles.headerTop}>
                <h1 className={styles.title}>CTF / Wargame</h1>
                <div className={styles.stats}>
                  <span className={styles.stat}>
                    <VscBook size={14} />
                    {stats.total} writeups
                  </span>
                  <span className={styles.divider} />
                  <span className={styles.stat}>
                    <VscFolderLibrary size={14} />
                    {stats.events} events
                  </span>
                  <span className={styles.divider} />
                  <span className={styles.stat}>
                    <VscRepo size={14} />
                    {stats.years} years
                  </span>
                </div>
              </div>

              <p className={styles.subtitle}>
                클릭 시 해당 저장소로 이동합니다.
              </p>
            </div>
          </div>

          <a
            href={REPO_URL}
            target="_blank"
            rel="noreferrer noopener"
            className={styles.repoLink}
          >
            <VscGithubAlt size={16} />
            <span>ctf-writeups 열기</span>
            <VscArrowRight size={16} />
          </a>
        </header>

        {loading && <div className={styles.emptyState}>write-up 목록을 불러오는 중입니다...</div>}
        {!loading && error && <div className={styles.errorState}>{error}</div>}

        {!loading && !error && (
          <div className={styles.list}>
            {writeups.map((item, index) => (
              <a
                key={item.path}
                href={item.url}
                target="_blank"
                rel="noreferrer noopener"
                className={styles.card}
              >
                <div className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</div>

                <div className={styles.cardBody}>
                  <div className={styles.cardTop}>
                    <div className={styles.badges}>
                      <span className={styles.badge}>{item.year}</span>
                      <span className={styles.badge}>{item.event}</span>
                      {item.category && <span className={styles.badgeMuted}>{item.category}</span>}
                    </div>
                    <span className={styles.filename}>{item.filename}</span>
                  </div>

                  <h2 className={styles.cardTitle}>{item.challenge}</h2>
                  <p className={styles.cardPath}>{item.path}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
