const lyrics = 'tumi bondhu kala pakhi ami jani ki ei, boshonto kaleee tomay bolte parini, kala kala shada shada.';

const parts = lyrics.split(' ');
const sentences = lyrics.split(',');
const chars = lyrics.split(' ');

const partial = lyrics.slice(3, 5)
// console.log(partial);

const lines = [
    'tumi bondhu kala pakhi ami jani ki',
'boshonto kaleee tomay bolte parini',
  'kala kala shada shada.'
];

console.log(lines.join(' '));
// const newLines = lines.join(' ');
// console.log(newLines);
