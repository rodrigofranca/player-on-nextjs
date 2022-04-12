import Script from 'next/script';
import React from 'react';
import useIsomorphicLayoutEffect from './../hooks/useIsomorphicLayoutEffect.js'

/**
 * @see https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 */
export const Player = ({ media, autoplay, poster, onPlaybackStatusChange }) => {

  const ref = React.useRef();

  useIsomorphicLayoutEffect(() => {

    const { current: player } = ref;

    player.autoplay = autoplay;
    player.poster = poster;
    player.media = media

    player.addEventListener('playbackStatusChanged', customEvent =>
      onPlaybackStatusChange(customEvent.detail)
    );

  }, [ref, autoplay, media]);

  return (
    <>
      <Script
        src="http://localhost:3333/js/fantascope-player.esm.js"
        type="module"
      />
      <fantascope-player
        ref={ref}
        autoplay
      />
    </>
  );
};