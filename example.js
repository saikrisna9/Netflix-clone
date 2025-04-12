// const url = 'https://streaming-availability.p.rapidapi.com/search/title';
const params = new URLSearchParams({
  country: 'us',
  title: 'Inception',
  show_type: 'movie',
  output_language: 'en'
});
const id = 'tt1375666'; // IMDb ID for Inception
const url = `https://streaming-availability.p.rapidapi.com/shows/${id}`;



const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '3fb34d02c8msh11193a4fc8ff63cp155502jsn0f606867cbb5',
    'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
  }
};

async function searchMovie() {
  try {
    const response = await fetch(`${url}?${params}`, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

searchMovie();
