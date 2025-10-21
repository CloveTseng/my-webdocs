import Link from '@docusaurus/Link';
import styles from './cards.module.css';
import Heading from '@theme/Heading';
const ProjectList = [
  {
    title: 'OFFWORK 健康生活 APP',
    img: '/img/cover.png',
    link: 'https://clovetseng.dev/blog/projects/offwork',
    github: 'https://github.com/CloveTseng/offwork',
    demo: 'https://offwork.clovetseng.dev/',
    tags: ['#Vue3', '#Nuxt', '#TailwindCSS', '#Git', '#Vercel'],
    description: 'OFFWORK 由 UI/UX 組成員設計，3位前端工程師協作開發，作為一套「下班儀式引導」，透過語音、書寫與互動模組，幫助使用者切斷工作連結、釋放壓力，建立可持續的「心理下班習慣」'
  },
  {
    title: '餘味尋蹤',
    img: '/img/flavortrail-cover.png',
    link: '',
    github: 'https://github.com/CloveTseng/flavor-trail-react',
    demo: 'https://ariel0508.github.io/flavor-trail-react/',
    tags: ['#React', '#Bootstrap', '#Vite', '#Git'],
    description: '這是一個食物分享平台，讓用戶可分享和領取剩餘食物，促進資源共享並減少浪費。平台支持貼文發布、搜尋篩選、預約領取和社群互動功能。'
  },
];

function Card({ img, link, title, description, tags, github, demo}) {
  return (
    <Link className={ styles.card } to={ link }>
      <img src={ img } alt={ title } className={ styles.cardImg } />
      <div className={styles.cardContent}>
        <Heading as="h3" className={ styles.title }>{title}</Heading>
        <ul className={ styles.tagsList }>
          { tags.map((tag, index) => (
            <li key={index} className={ styles.tag }>{ tag }</li>
          ))}
        </ul>
        <p>{ description }</p>
        <Link to={ github }>Github</Link> | <Link to={ demo }>Demo</Link>
        <p className={ styles.textAlign }>點擊卡片查看更多 <span className={ styles.circle } >→</span></p>
      </div>
    </Link>
  );
}

export default function LinkCard() {
  return (
    <>
      <section>
          {ProjectList.map((props, idx) => (
            <Card key={ idx } { ...props } />
          ))}
      </section>
    </>
  );
}
