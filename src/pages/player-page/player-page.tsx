import {useEffect, useRef, useState} from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import ClipLoader from 'react-spinners/BarLoader';
import PlayerPlayButton from '../../components/player-play-button/player-play-button';
import PlayerTimeline from '../../components/player-timeline/player-timeline';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';

function PlayerPage(): JSX.Element {
  const {id} = useParams();

  const {films} = useAppSelector(((state) => state));
  const film = films.find((item) => (item.id === id));

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  if (!film) {
    return <Navigate to={AppRoute.Root} />;
  }

  const timeUpdateHandler = () => {
    setCurrentTime(videoRef.current?.currentTime ?? 0);
    setProgress(currentTime / duration * 100);
  };

  const loadedDataHandler = () => {
    setIsLoading(false);
    setDuration(videoRef.current?.duration ?? 0);
  };

  const fullscreenClickHandler = () => {
    videoRef.current?.requestFullscreen();
  };

  const playButtonClickHandler = () => setIsPlaying(!isPlaying);

  return (
    <div className="player">

      {isLoading && (
        <div className='player__overlay'>
          <ClipLoader color={'#c9b37e'}/>
        </div>
      )}

      <video className="player__video"
        poster={film.backgroundPoster}
        src={film.video}
        ref={videoRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedData={loadedDataHandler}
      >
      </video>

      <Link className="player__exit" to={`${AppRoute.Film}/${id}`}>
        Exit
      </Link>

      <div className="player__controls">
        <PlayerTimeline
          progress={progress}
          duration={duration}
          currentTime={currentTime}
          isLoading={isLoading}
        />

        <div className="player__controls-row">
          <PlayerPlayButton
            isPlaying={isPlaying}
            onClickButton={playButtonClickHandler}
          />
          <div className="player__name">{film.name}</div>

          <button className="player__full-screen"
            type="button"
            onClick={fullscreenClickHandler}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
