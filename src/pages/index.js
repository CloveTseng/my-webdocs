import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <Heading as="h1" className="hero__title">
          {siteConfig.title}Clove</Heading> */}
          <h1 className=''>Hi, 我是 Clove</h1>
        <p className="hero__subtitle">我是一位前端工程師，主要使用 React 進行開發
          </p>
          <p className="hero__subtitle">並且有搭配 GitHub、Vite 等工具開發 SPA 網站的經驗。</p>
        <ul className='list'>
          <li>為加強前端技能的廣度，目前在了解 Vue 的觀念與實作</li>
          <li>並且持續進修 Next.js 與 Tailwind CSS，強化元件化設計與 Hooks 應用能力。</li>
          <li>使用 JSON-server 模擬 RESTful API 並串接的經驗，並使用 Apidog 等 API 開發工具來進行測試及產出 API 文件供團隊使用。</li>
          <li>在團隊協作中，我熟悉使用 Git 進行版本控制，並在專案中運用 PR Template 促進團隊效率進行程式碼審查與討論，同時也使用 Notion 來共編技術文件，能快速融入團隊並一同創造成果。</li>
        </ul>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            看筆記 
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
