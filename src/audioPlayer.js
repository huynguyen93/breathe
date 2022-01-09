import {sounds} from './constants';

const audioFilenames = {
  [sounds.in]: 'in.mp3',
  [sounds.out]: 'out.mp3',
  [sounds.hold]: 'hold.mp3',
};

const audios = {};

function loadAudio(folderName) {
  Object.keys(audioFilenames).map((key) => {
    audios[key] = null;

    const audio = new Audio(`/sound/${folderName}/${audioFilenames[key]}`);
    audio.load();

    audio[key] = audio;
  });
}

function isReady() {
  Object.keys(audioFilenames).map((key) => {
    console.log(audios);
    if (audios[key]) {
      console.log(audios[key].readyState);
      if (audios[key].readyState) {

      }
    }
  });
}

function play(audioKey) {

}

const audioPlayer = {
  loadAudio,
  isReady,
};

export default audioPlayer;
