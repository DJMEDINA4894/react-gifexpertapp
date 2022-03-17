export const GetFetchGifs = async (category) => {
  const resp = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=aPvDNEqvKYXIqs6sPa2nAJv5W5N5ENJj`
  );

  const { data } = await resp.json();

  const dataGIFS = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      images: gif.images?.downsized_medium.url,
    };
  });

  return dataGIFS;
};
