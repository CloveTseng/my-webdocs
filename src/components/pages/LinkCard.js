import Link from '@docusaurus/Link';
import styles from './cards.module.css';
import Heading from '@theme/Heading';
const ProjectList = [
  {
    title: 'OFFWORK 健康生活 APP',
    img: '/img/cover.png',
    link: 'https://clovetseng.dev/blog/projects/offwork',
    tags: ['#Vue3', '#Nuxt', '#TailwindCSS', '#Git', '#Vercel'],
    description: 'OFFWORK 由 UI/UX 組成員設計，3位前端工程師協作開發，作為一套「下班儀式引導」，透過語音、書寫與互動模組，幫助使用者切斷工作連結、釋放壓力，建立可持續的「心理下班習慣」'
  },
  {
    title: '餘味尋蹤',
    img: '/img/flavortrail-cover.png',
    link: 'https://clovetseng.dev/blog/2025/2025-r&d-camp',
    tags: ['#React', '#Bootstrap', '#Vite', '#Git'],
    description: 'OFFWORK 由 UI/UX 組成員設計，3位前端工程師協作開發，作為一套「下班儀式引導」，透過語音、書寫與互動模組，幫助使用者切斷工作連結、釋放壓力，建立可持續的「心理下班習慣」'
  },
];

function Card({ img, link, title, description, tags}) {
  return (
    <Link className={ styles.card } to={ link }>
      <img src={ img } alt={ title } className={ styles.cardImg } />
      <div className={styles.cardContent}>
        <Heading as="h3">{title}</Heading>
        <ul className={ styles.tagsList }>
          { tags.map((tag, index) => (
            <li key={index} className={ styles.tag }>{ tag }</li>
          ))}
        </ul>
        <p>{description}</p>
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
