import {Comments} from '../../types/comment';
import {convertDate, splitArrayHalf} from '../../utils';

type TabReviewsProps = {
  comments: Comments
}

function TabReviews({comments}: TabReviewsProps):JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      { comments.length === 0 ? (
        <p style={{color: '#252525'}}>No one has yet left a review for this film.</p>
      ) : (
        splitArrayHalf(comments).map((half) => (
          <div className="film-card__reviews-col" key={half[0].id}>
            {half.map((comment) => (
              <div className="review" key={comment.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{comment.comment}</p>
                  <footer className="review__details">
                    <cite className="review__author">{comment.user.name}</cite>
                    <time className="review__date" dateTime={comment.date}>{convertDate(comment.date)}</time>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default TabReviews;
