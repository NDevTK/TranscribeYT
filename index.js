const youtubedl = require('youtube-dl');
const deepspeech = require('deepspeech');

const url = "https://www.youtube.com/watch?v=ck7utXYcZng";

youtubedl.exec(url, ['-x', '--audio-format', 'wav'], {}, function(err, output) {
  if (err) throw err
 
  console.log(output.join('\n'))
})
