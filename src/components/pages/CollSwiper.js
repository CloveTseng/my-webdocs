import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './collswiper.module.css';
import FeedbackCard from './FeedbackCard';
import { Autoplay } from 'swiper/modules';
const feedbackData = [
  {
    img: '/img/avatar/Maggie.webp',
    from: 'UI/UX 前端工程師 - Hao Jing',
    content: 'Clove 對新技術很有好奇心，願意嘗試各種新東西，而且學會後馬上就能運用到我們的專案裡，這點讓人印象深刻。做事情很積極，也有自己的規劃。最重要的是溝通很順暢，有什麼問題都能很直接地討論。總的來說，Clove 是個很棒的合作夥伴，如果有機會的話還會想再次合作。',
    point: '★★★★★'
  },
  {
    img: '/img/avatar/Alvie.webp',
    from: '前端工程師 - yameow',
    content: '在專案Flavor Trail合作過程中，Clove 展現出高度的配合度與主動性，開發上願意嘗試新東西，積極尋找合適的套件使用、協助建立後端資料並完善整體專案架構，在開會討論時也能營造良好的溝通氛圍，是個可靠的協作夥伴，未來若有機會，非常期待能再次合作',
    point: '★★★★★'
  },
  {
    img: '/img/avatar/Anna.webp',
    from: '前端工程師 - Ariel',
    content: 'Clove 出色的親和力、縝密的邏輯思維及出色的執行能力，是我合作過最可靠且高效的夥伴之一。面對複雜或緊急的任務，他能迅速拆解問題、制定清晰可行的行動計畫，並始終準時、高品質地完成工作。',
    point: '★★★★★'
  },
  {
    img: '/img/avatar/Jerry.webp',
    from: '全端工程師 - Aaron',
    content: '合作中總是保持著開朗樂觀的態度',
    point: '★★★★★'
  },
  {
    img: '/img/avatar/Oliver.webp',
    from: '前端工程師 - Tippy',
    content: '跟他合作真的滿有動力的，他會主動推進進度，不會拖拖拉拉，整個專案就跑得很順。而且遇到不熟悉的知識就會去研究、主動學和做筆記，這點真的很讚。一起合作的時候，團隊整體的氣氛也會被他帶起來，大家都變得比較積極。',
    point: '★★★★★'
  },
  {
    img: '/img/avatar/Yien.webp',
    from: 'PM - 葉子',
    content: '每週進度準時交付，有問題也會即時提問，訊息回覆速度很快，讓人很放心～',
    point: '★★★★★'
  },
  {
    img: '/img/avatar/Alvie.webp',
    from: '波利馬資訊科技有限公司 - 執行長',
    content: '做事細心，軟體專案交辦給她讓人很放心，遇到工作模糊地帶也會主動協助釐清，讓交付品質變得更完善 👍',
    point: '★★★★★'
  },
  {
    img: '/img/avatar/Jerry.webp',
    from: '工程師 - Gui',
    content: '與 Clove 一同參與 Discord 社群「十二週目標互助計畫」的幕後工作，看見其具有非常高的行動力，當計畫主持人提出舉辦工作坊的構想，Clove 馬上就與主持人一來一回將當天有什麼可能流程、細節討論完成。Clove 積極的態度、熱情與行動力是團隊不可或缺的重要人物～',
    point: '★★★★★'
  },
]
export default function CollSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={ 1.2 }
        spaceBetween={ 16 }
        className={ styles.swiper }
        modules={ [Autoplay] }
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        } }
        loop={ true }
        speed={ 5000 }
        breakpoints={{
          640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
        }}
      >
        { feedbackData.map((props, idx) => (
          <SwiperSlide key={ idx }><FeedbackCard {...props} /></SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}