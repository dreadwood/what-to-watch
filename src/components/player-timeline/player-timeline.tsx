import {getDuration} from '../../utils';

type PlayerTimelineProps = {
  progress: number
  duration: number
  currentTime: number
  isLoading: boolean
}

function PlayerTimeline(props: PlayerTimelineProps) {
  const {
    progress,
    duration,
    currentTime,
    isLoading,
  } = props;

  return (
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
  );
}

export default PlayerTimeline;
