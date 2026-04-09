import Tab from '@/components/Tab';

import { contentSections, markdownIconPath } from '@/data/navigation';
import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      {contentSections.map((item) => (
        <Tab
          key={item.path}
          icon={markdownIconPath}
          filename={item.filename}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default Tabsbar;
