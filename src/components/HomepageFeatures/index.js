import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import LinkCard from '../pages/LinkCard';
import CollSwiper from '../pages/CollSwiper';

const FeatureList = [
  {
    title: 'Vue3',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <ul>
        <li>使用 Nuxt.js 開發 SSR 網站經驗 </li>
        <li>能運用 Composition API 掌握元件資料流與拆分</li>
        <li>使用 Vue Router 建構路由</li>
        <li>使用 Pinia 進行全域狀態管理</li>
      </ul>
    ),
  },
  {
    title: 'JavaScript',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <ul>
        <li> 熟悉基礎 JavaScript 6 語法 </li>
        <li> ESLint 管理程式碼風格 </li>
        <li> 熟悉 AJAX / JSON，使用 Axios 串接 RESTful API 能力 </li>
        <li> 使用 JSON server 模擬 RESTful API 經驗 </li>
      </ul>
    ),
  },
  {
    title: 'HTML5 / CSS3',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <ul>
        <li> 具備 RWD 響應式開發經驗 </li>
        <li> 熟悉 TailwindCSS 開發元件化樣式 </li>
        <li> 熟悉 OOCSS 設計模式將容器與內容分離 </li>
        <li> 熟悉 Sass (SCSS 語法)，利用 Mixin 減少重複程式碼 </li>
      </ul>
    ),
  },
  {
    title: '其他',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <ul>
        <li> 具備使用 Git / GitHub 進行版本控制與團隊協作經驗 </li>
        <li> 認識 Figma 設計工具， 懂得查看設計文件，與設計師無障礙溝通 </li>
        <li> 使用 Chart.js 處理圖表 </li>
      </ul>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
      </div>
      <div className="padding-horiz--md">
        <Heading as="h3" className={styles.bgBlack}>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <section className={ styles.features }>
        <div className="container">
          <h2>使用技術</h2>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <section className={ styles.features }>
        <div className="container">
          <h2>專案</h2><span id="專案"></span>
          <LinkCard />
        </div>
      </section>
      <section className={ styles.features }>
        <div className="container">
          <h2>合作與反饋</h2>
          <CollSwiper />
        </div>
      </section>
    </>
  );
}
