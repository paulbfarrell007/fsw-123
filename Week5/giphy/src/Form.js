//text
//search box
//submit button
//image container
//Key rFOHLC1B46pPfSRGBzFIusBcEFE55NHk
// api.giphy.com/v1/gifs/search?api_key=rFOHLC1B46pPfSRGBzFIusBcEFE55NHk&q=music&limit=1

fetch('api.giphy.com/v1/gifs/search?api_key=rFOHLC1B46pPfSRGBzFIusBcEFE55NHk&q=music&limit=1')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });