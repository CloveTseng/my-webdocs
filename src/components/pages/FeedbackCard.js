import styles from './cards.module.css';
import clsx from 'clsx';
export default function FeedbackCard({ img, from, content, point}) {
  return (
    <>
      <div className={ styles.feedbackCard }>
        <div className={ clsx(styles.feedbackContent, styles.feedbackBody) }>
          <img src={img} className={ styles.avatarImg } alt="avatar" />
          <h5>{ content }</h5>
        </div>
        <div className={ styles.feedbackContent }>
          <p className={ styles.feedbackPoint }>{ point }</p>
          <p className={ styles.feedbackFrom }>{ from }</p>
          </div>
        </div>
    </>
  )
}