const lyrics = 'tumi bondhu kala pakhi ami jani ki ei, boshonto kaleee tomay bolte parini';

const searchString = 'Pakhi';
// const doesExist = lyrics.includes('pakhi');
// const doesExist = lyrics.includes('pokhi');
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

// console.log(doesExist);
console.log(doesExist);