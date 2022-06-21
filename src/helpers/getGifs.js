

//Hago el fetch a Giphy para obtener los gifs
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=zCok1QrnePJBQwqd2audYXemcg3bRwBg`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map(img => {   //Uso el map() para obtener los datos que me interesan
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });
    
    return gifs;
}