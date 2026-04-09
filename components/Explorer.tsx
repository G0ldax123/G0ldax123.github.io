import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { VscChevronRight, VscFolder, VscFolderOpened } from 'react-icons/vsc';

import { contentSections, markdownIconPath } from '@/data/navigation';
import styles from '@/styles/Explorer.module.css';

const Explorer = () => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>(
    Object.fromEntries(contentSections.map((item) => [item.path, true]))
  );

  const toggleFolder = (path: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div className={styles.sectionList}>
        {contentSections.map((item) => {
          const isOpen = openFolders[item.path];

          return (
            <div key={item.path} className={styles.sectionItem}>
              <button
                type="button"
                className={styles.folderButton}
                onClick={() => toggleFolder(item.path)}
              >
                <VscChevronRight
                  className={styles.chevron}
                  style={isOpen ? { transform: 'rotate(90deg)' } : {}}
                />
                {isOpen ? (
                  <VscFolderOpened className={styles.folderIcon} />
                ) : (
                  <VscFolder className={styles.folderIcon} />
                )}
                <span>{item.folderName}</span>
              </button>

              {isOpen && (
                <div className={styles.files}>
                  <Link href={item.path}>
                    <div className={styles.file}>
                      <Image
                        src={markdownIconPath}
                        alt={item.filename}
                        height={18}
                        width={18}
                      />
                      <p>{item.filename}</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explorer;
