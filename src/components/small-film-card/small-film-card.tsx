import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Film} from '../../types/films';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: Film
}
type Timer = ReturnType<typeof setTimeout> | null

const PLAYBACK_DELAY = 1000;

const removeTimeout = (timer: Timer) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = null;
};

function SmallFilmCard({film}: SmallFilmCardProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);

  let timer: Timer;

  useEffect(() => () => removeTimeout(timer));

  const onCardMouseEnter = () => {
    timer = setTimeout(() => {
      setIsPlaying(true);
    }, PLAYBACK_DELAY);
  };

  const onCardMouseLeave = () => {
    setIsPlaying(false);
    removeTimeout(timer);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={onCardMouseEnter}
      onMouseLeave={onCardMouseLeave}
    >
      <div className="small-film-card__image">
        <img
          src={film.smallPoster}
          alt={film.name}
          width="280"
          height="175"
          hidden={isPlaying}
        />
        <VideoPlayer
          src={film.previewVideo}
          isPlaying={isPlaying}
          isMuted
          poster={film.smallPoster}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link"
          to={`${AppRoute.Film}/${film.id}`}
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
