import {useEffect, useRef} from 'react';

type VideoPlayerCardProps = {
  src: string
  isPlaying: boolean
  isMuted?: boolean
  poster?: string
  width?: number
  height?: number
}

function VideoPlayerCard(props: VideoPlayerCardProps): JSX.Element {
  const {
    src,
    isPlaying,
    isMuted = true,
    poster,
    width,
    height
  } = props;

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      controls={false}
      muted={isMuted}
      width={width}
      height={height}
    />
  );
}

export default VideoPlayerCard;
