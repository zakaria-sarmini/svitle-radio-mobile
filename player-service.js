import TrackPlayer from 'react-native-track-player';

module.exports = async function() {
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play()
  })

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.stop()
  });

  TrackPlayer.addEventListener('remote-stop', () => {
    TrackPlayer.destroy()
  });

  TrackPlayer.addEventListener('remote-duck', (paused, permanent) => {
    if (paused || permanent) {
      TrackPlayer.stop()
    } else {
      TrackPlayer.play()
    }
  });
};