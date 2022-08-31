import {useEffect, useRef} from 'react';

type VideoPlayerProps = {
  src: string
  isPlaying: boolean
  isMuted?: boolean
  poster?: string
  width?: number
  height?: number
}

function VideoPlayer(props: VideoPlayerProps): JSX.Element {
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
      style={{
        verticalAlign: 'top',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}
    />
  );
}

export default VideoPlayer;
