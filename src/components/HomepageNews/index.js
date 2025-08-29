import Link from '@docusaurus/Link';
import styles from './news.module.css';
export default function HomepageNews() {
  return (
    <section className='container py-15'>
      <h2>最新消息</h2>
      <ul>
        <li>為加強前端技能的廣度，目前在了解 Vue 的觀念與實作，可以點擊<Link to="/docs/vue-daily/v-text">『Vue 每日學習筆記』</Link>查看</li>
        <li>現正開發中：使用 `Nuxt.js` 及 `TailwindCSS` 協作開發 [OFFWORK](https://offwork.clovetseng.dev/)</li>
      </ul>
    </section>
  )
}