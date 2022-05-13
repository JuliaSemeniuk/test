const options = {
  method: "GET",
  url: "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks",
  params: { id: "40008598", locale: "en-US" },
  headers: {
    "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    "X-RapidAPI-Key": "63cc2995d5msh827271a2efeed52p16450cjsn6a79dd14c949",
  },
};

export default class ShazamServer {
  _apiBase =
    "https://shazam.p.rapidapi.com/songs/list-artist-top-tracks?id=40008598&locale=en-US";

  async getResource(url: string) {
    const response = await fetch(`${this._apiBase}${url}`, options);

    if (!response.ok) {
      throw new Error(
        `Could not fetch ${url}` + `, resevied ${response.status}`
      );
    }

    const body = await response.json();
    return body;
  }

  async getTopTracksList() {
    const response = await this.getResource(`${this._apiBase}`);
    return response;
  }
}

export const shazam = new ShazamServer();

shazam.getTopTracksList().then((body) => {
  console.log(body);
});

//top tracks titles, URLs, images
const results = shazam.getTopTracksList().then((body) => {
  body.tracks.map((track: any) => {
    // console.log(track.title, track.url, track.images.coverart);
  });

  return body.tracks;
});

// const tracksTitles = shazam.getTopTracksList().then((body) => {
//   body.tracks.map((track: any) => {
//     console.log(track.title);
//   });
// });

// const tracksUrls = shazam.getTopTracksList().then((body) => {
//   body.tracks.map((track: any) => {
//     console.log(track.url);
//   });
// });

// const tracksCoverarts = shazam.getTopTracksList().then((body) => {
//   body.tracks.map((track: any) => {
//     console.log(track.images.coverart);
//   });
// });
