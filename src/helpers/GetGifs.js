export const getGifs = async (category, amount) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=eKt0MO1DORNEAJeGm9JttXY93Jhtx8eu&q=${category}&limit=${amount}&offset=0&rating=g&lang=en`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  return data.map((info) => ({
    id: info.id,
    title: info.title,
    url: info.images.downsized_medium.url,
  }));
};
