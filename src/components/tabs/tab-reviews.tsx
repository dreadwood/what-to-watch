import {Comments} from '../../types/comment';
import {convertDate, splitArrayHalf} from '../../utils';

type TabReviewsProps = {
  comments: Comments
}

function TabReviews({comments}: TabReviewsProps):JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      {splitArrayHalf(comments).map((halfComments) => (

        // TODO: set correct key
        <div className="film-card__reviews-col" key={halfComments[0].id}>

          {halfComments.map((comment) => (
            <div className="review" key={comment.id}>
              <blockquote className="review__quote">
                <p className="review__text">{comment.comment}</p>
                <footer className="review__details">
                  <cite className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime={comment.date}>{convertDate(comment.date)}</time>
                </footer>
              </blockquote>
              <div className="review__rating">{comment.rating}</div>
            </div>
          ))}

        </div>

      ))}
    </div>
  );
}

export default TabReviews;
