import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = localStorage.getItem('pausedTime');
const parsedSavedTime = JSON.parse(savedTime);

if (parsedSavedTime) {
  player.setCurrentTime(parsedSavedTime);
}
player.on('timeupdate', throttle(updateTime, 1000));

function updateTime(evt) {
  console.log(evt.seconds);
  localStorage.setItem('pausedTime', JSON.stringify(evt.seconds));
}
