import {Fragment, useState} from 'react';

const MAX_RAITING = 10;

function ReviewForm(): JSX.Element {
  const [rating, setRating] = useState(0);
  const [reviewText, setreviewText] = useState('');

  return (
    <div className="add-review">
      <form className="add-review__form" action="#">

        <div className="rating">
          <div className="rating__stars">
            {Array.from({length: MAX_RAITING}, (_, i) => {
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
            onChange={(evt) => setreviewText(evt.target.value)}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>

      </form>
    </div>
  );
}

export default ReviewForm;
