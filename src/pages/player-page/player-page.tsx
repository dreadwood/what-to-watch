import {useEffect, useRef, useState} from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';
import {getDuration} from '../../utils';

type PlayButtonProps = {
  isPlaying: boolean
  onClickButton: () => void
}

function PlayButton(props: PlayButtonProps): JSX.Element {
  const {isPlaying, onClickButton} = props;

  return (
    <button className="player__play"
      type="button"
      onClick={onClickButton}
    >
      {isPlaying ? (
        <>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </>
      ) : (
        <>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </>
      )}
    </button>
  );
}

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

  const timeUpdateHandler = () => {
    setCurrentTime(videoRef.current?.currentTime ?? 0);
    setProgress(currentTime / duration * 100);
  };

  const loadedDataHandler = () => {
    setIsLoading(false);
    setDuration(videoRef.current?.duration ?? 0);
  };

  const playButtonClickHandler = () => setIsPlaying(!isPlaying);

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

  const fullscreenClickHandler = () => {
    videoRef.current?.requestFullscreen();
  };

  return (
    <div className="player">
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
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
            {/* TODO: 2022-09-17 / add change timeline */}
            {/* <label className="visually-hidden" htmlFor="player-toggler">Toggler</label>
            <input className="player__input-toggler"
              type="range"
              id="player-toggler"
              max="100"
              value={progress}
            /> */}
          </div>
          <div className="player__time-value">{isLoading || getDuration(duration, currentTime)}</div>
        </div>

        <div className="player__controls-row">
          <PlayButton
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
