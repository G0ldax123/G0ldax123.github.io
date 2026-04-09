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
  { Icon: VscFiles, key: 'files' },
  { Icon: VscCode, key: 'code' },
  { Icon: VscEdit, key: 'edit' },
  { Icon: VscGithubAlt, key: 'github' },
  { Icon: VscMail, key: 'mail' },
];

const sidebarBottomItems = [
  { Icon: VscAccount, key: 'account' },
  { Icon: VscSettings, key: 'settings' },
];

const Sidebar = () => {
  const pathname = usePathname();
  const contentPaths = ['/', ...contentSections.map((item) => item.path)];
  const isContentRoute = contentPaths.includes(pathname);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, key }, index) => {
          const isActive = index === 0 ? isContentRoute : false;

          return (
            <Link href="/" key={key}>
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
        {sidebarBottomItems.map(({ Icon, key }) => (
          <div className={styles.iconContainer} key={key}>
            <Link href="/">
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
