'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  VscAccount,
  VscSettings,
  VscMail,
  VscGithubAlt,
  VscCode,
  VscFiles,
  VscEdit,
} from 'react-icons/vsc';

import styles from '@/styles/Sidebar.module.css';
import { contentSections } from '@/data/navigation';

const sidebarTopItems = [
  { Icon: VscFiles, path: '/' },
  { Icon: VscCode, path: '/dev' },
  { Icon: VscEdit, path: '/blog' },
  { Icon: VscGithubAlt, path: '/bugbounty' },
  { Icon: VscMail, path: '/ctf' },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: '/paper' },
  { Icon: VscSettings, path: '/cert' },
];

const Sidebar = () => {
  const pathname = usePathname();
  const contentPaths = ['/', ...contentSections.map((item) => item.path)];
  const isContentRoute = contentPaths.includes(pathname);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => {
          const isActive = path === '/' ? isContentRoute : false;

          return (
            <Link href={path} key={path}>
              <div
                className={`${styles.iconContainer} ${
                  isActive && styles.active
                }`}
              >
                <Icon
                  size={16}
                  fill={
                    isActive
                      ? 'rgb(225, 228, 232)'
                      : 'rgb(106, 115, 125)'
                  }
                  className={styles.icon}
                />
              </div>
            </Link>
          );
        })}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                fill={'rgb(106, 115, 125)'}
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
