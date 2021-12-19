const music = {
  title: 'Viva Forever',
  artist: 'Spice Girls',
  album: 'Spiceworld',
};

const greeting = (name) => `Hello ${name}:`;

const songSnippet = `${greeting('Bob')} Your favourite song is ${
  music.title
} by ${music.artist} from the album ${music.album}!!!`;

console.log(songSnippet);
