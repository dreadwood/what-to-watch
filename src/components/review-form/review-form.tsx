import {FormEvent, Fragment, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Review, ReviewStatus} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {sendReviewAction} from '../../store/api-actions';
import {ReviewData} from '../../types/review-data';


function ReviewForm(): JSX.Element {
  const {id} = useParams();

  const [rating, setRating] = useState(0);
  const [reviewText, setreviewText] = useState('');

  const dispatch = useAppDispatch();
  const {reviewStatus} = useAppSelector((state) => state);

  const isSubmitDisabled = () => rating < Review.MinRaiting
    || reviewText.length < Review.MinTextLength
    || reviewText.length > Review.MaxTextLength
    || reviewStatus === ReviewStatus.Sending;

  const onSubmit = (reviewData: ReviewData) => {
    dispatch(sendReviewAction(reviewData));
  };

  useEffect(() => {
    if (reviewStatus === ReviewStatus.Ready) {
      setRating(0);
      setreviewText('');
    }
  }, [reviewStatus]);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isSubmitDisabled()) {
      return;
    }

    onSubmit({
      comment: reviewText,
      rating,
      id,
    });
  };

  return (
    <div className="add-review">
      <form className="add-review__form"
        style={reviewStatus === ReviewStatus.Sending ? {filter: 'blur(2px)'} : undefined}
        onSubmit={handleSubmit}
      >
        <div className="rating">
          <div className="rating__stars">
            {Array.from({length: Review.MaxRaiting}, (_, i) => {
              const value = i + 1;
              return (
                <Fragment key={value}>
                  <input className="rating__input"
                    id={`star-${value}`}
                    type="radio"
                    name="rating"
                    value={value}
                    checked={value === rating}
                    onChange={() => setRating(value)}
                  />
                  <label className="rating__label" htmlFor={`star-${value}`}>Rating {value}</label>
                </Fragment>
              );
            }).reverse()}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            required
            value={reviewText}
            minLength={Review.MinTextLength}
            maxLength={Review.MaxTextLength}
            onChange={(evt) => setreviewText(evt.target.value)}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn"
              type="submit"
              disabled={isSubmitDisabled()}
            >Post
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}

export default ReviewForm;
