import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';


function HomepageHeader() {
  return (
    <header className={ clsx(styles.heroBanner, styles.hero) }>
      <h1 className={ styles.fsBanner }><span className={styles.bgBlack}>CLOVE</span> TSENG</h1>
      <div className={ clsx('container', styles.itemsCenter) }>
        <div>
          <h3 className='hero__subtitle'>Hi, 我是 Clove</h3>
          <p className="hero__subtitle">一位前端工程師，專注於 <span className={styles.bgBlack}>Vue.js</span> 開發技術，<br/>並且搭配 GitHub、Vite 等工具開發網站經驗
          </p>
          <div className={ styles.flex }>
            <div className={ styles.buttons }>
              <Link
                className={ clsx('button', 'button--lg', styles.border) }
                to="/blog/projects/about">
                關於我
              </Link>
            </div>
            <div className={ styles.buttons }>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                看筆記
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="前端開發者的作品集與技術隨筆，記錄在程式與設計領域的探索與思考。A developer's portfolio and tech log. Exploring code, design, and everything in between."
    >
      <HomepageHeader />
      <main>
        {/* <HomepageNews /> */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
