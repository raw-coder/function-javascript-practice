// 명령형 프로그래밍
const _ = require('underscore');

const lyrics = [];

for (let bottles = 99; bottles > 0; bottles--) {
  lyrics.push(`${bottles} bottles of beer on the wall`);
  lyrics.push(`${bottles} bottles of beer`);
  lyrics.push('Take one down, pass it around!');
  if (bottles > 1) {
    lyrics.push(`${bottles - 1} bottles of beer on the wall`);
  } else {
    lyrics.push('No more bottles of beer on the wall');
  }
}

console.log(lyrics);

// 함수형 프로그래밍
function lyricsSegment(n) {
  return _.chain([])
    .push(`${n} bottles of beer on the wall`)
    .push(`${n} bottles of beer`)
    .push('Take one down, pass it around!')
    .tap(function (lyrics) {
      if (n > 1) {
        lyrics.push(`${n - 1} bottles of beer on the wall`);
      } else {
        lyrics.push('No more bottles of beer on the wall');
      }
    })
    .value();
}

console.log(lyricsSegment(9));

function song(start, end, lyricGen) {
  return _.reduce(_.range(start, end, -1), function(acc, n) {
    return acc.concat(lyricGen(n));
  }, []);
}

console.log(song(99, 0, lyricsSegment));