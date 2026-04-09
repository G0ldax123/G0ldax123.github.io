import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="markdown_icon.svg" filename="개발.md" path="/dev" />
      <Tab icon="markdown_icon.svg" filename="CTF-Wargame.md" path="/ctf" />
      <Tab icon="markdown_icon.svg" filename="BugBounty.md" path="/bugbounty" />
      <Tab icon="markdown_icon.svg" filename="블로그-기술문서.md" path="/blog" />
      <Tab icon="markdown_icon.svg" filename="논문-컨퍼런스.md" path="/paper" />
      <Tab icon="markdown_icon.svg" filename="공모전-자격증.md" path="/cert" />
    </div>
  );
};

export default Tabsbar;
