const ApiKey = 'ea4ec6f9a33124bba29e1aa289b4c432';

function getImages(seachItem) {
  const data = {
    method: 'flickr.photos.search',
    api_key: ApiKey,
    text: seachItem, // Search Text
    sort: 'interestingness-desc',
    per_page: 12,
    license: '4',
    extras: 'owner_name,license',
    format: 'json',
    nojsoncallback: 1,
  };

  const parameters = new URLSearchParams(data);

  const url = `https://api.flickr.com/services/rest/?${parameters}`;
  return fetch(url).then(res => res.json())
}

export {
  getImages
}