const labels = {
  in: 'Breathe in',
  out: 'Breathe out',
  hold: 'Hold your breath',
};

const sounds = {
  in: 'in.mp3',
  out: 'out.mp3',
  hold: 'hold.mp3',
};

const noteOutSh = 'Breathe out while making "sh" sound.';
const noteOutF1 = 'Breathe out while making short "f" sound many times.';
const noteOutF2 = 'Breathe out while making 1 long "f" sound.';

export const exercises = [
  {
    label: 'Relaxation breathing',
    periods: [
      {seconds: 4, label: labels.in, sound: sounds.in},
      {seconds: 7, label: labels.hold, sound: sounds.hold},
      {seconds: 8, label: labels.out, sound: sounds.out, note: noteOutSh},
    ],
  },
  {
    label: 'Exercise 1',
    periods: [
      {seconds: 4, label: labels.in, sound: sounds.in},
      {seconds: 8, label: labels.out, sound: sounds.out, note: noteOutSh},
    ],
  },
  {
    label: 'Exercise 2',
    periods: [
      {seconds: 4, label: labels.in, sound: sounds.in},
      {seconds: 4, label: labels.hold, sound: sounds.hold},
      {seconds: 4, label: labels.out, sound: sounds.out, note: noteOutSh},
      {seconds: 4, label: labels.hold, sound: sounds.hold},
    ],
  },
  {
    label: 'Exercise 3',
    periods: [
      {seconds: 4, label: labels.in, sound: sounds.in},
      {seconds: 4, label: labels.out, sound: sounds.out, note: noteOutF1},
      {seconds: 4, label: labels.out, sound: sounds.out, note: noteOutF2},
      {seconds: 4, label: labels.hold, sound: sounds.hold},
    ],
  },
  {
    label: 'Exercise 4',
    periods: [
      {seconds: 4, label: labels.in, sound: sounds.in},
      {seconds: 4, label: labels.hold, sound: sounds.hold},
      {seconds: 4, label: labels.in, sound: sounds.in},
      {seconds: 8, label: labels.out, sound: sounds.out, note: noteOutSh},
    ],
  },
  {
    label: 'Exercise 5',
    periods: [
      {seconds: 4, label: labels.in, sound: sounds.in},
      {seconds: 4, label: labels.hold, sound: sounds.hold},
      {seconds: 4, label: labels.in, sound: sounds.in},
      {seconds: 4, label: labels.hold, sound: sounds.hold},
      {seconds: 4, label: labels.in, sound: sounds.in},
      {seconds: 8, label: labels.out, sound: sounds.out, note: noteOutSh},
    ],
  },
  {
    label: 'Power breathing 1',
    periods: [
      {seconds: 4, label: labels.in, sound: sounds.in},
      {seconds: 4, label: labels.out, sound: sounds.out},
    ],
  },
  {
    label: 'Power breathing 2',
    periods: [
      {seconds: 3, label: labels.in, sound: sounds.in},
      {seconds: 3, label: labels.out, sound: sounds.out},
    ],
  },
  {
    label: 'Power breathing 3',
    periods: [
      {seconds: 2, label: labels.in, sound: sounds.in},
      {seconds: 2, label: labels.out, sound: sounds.out},
    ],
  },
  {
    label: 'Power breathing 4',
    periods: [
      {seconds: 1, label: labels.in, sound: sounds.in},
      {seconds: 1, label: labels.out, sound: sounds.out},
    ],
  },
];
