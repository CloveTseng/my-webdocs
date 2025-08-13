import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'React',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <ul>
        <li>使用 **Vite** + React 開發 SPA 網站經驗</li>
        <li>運用 **Hook**，掌握元件資料流與拆分元件</li>
        <li>使用 **React Router** 建構路由</li>
        <li>使用 React Hook Form 製作表單及驗證功能</li>
        <li>使用 **Redux** 進行複雜狀態管理</li>
      </ul>
    ),
  },
  {
    title: 'JavaScript',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <div className={ styles.glassContainer }>
      <section className={ styles.features }>
        <div className="container">
          <h2>技能與工具</h2>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <div className={ styles.glassOverlay }>
        <div className={ styles.message }>
          <h2>施工中</h2>
          <p>此頁面正在努力建置中，敬請期待！</p>
        </div>
      </div>
      </div>
    </>
  );
}
