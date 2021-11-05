async function getImages(query) {
  const url = `https://www.google.com/search?q=${query}&tbm=isch`;
  const html = fetch(url).then((r) => r.text());
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const images = [...doc.getElementsByClassName("rg_i Q4LuWd")]; // all search results are of the class "rg_i Q4LuWd"
  const links = images.map((i) => i.src);
  return links;
}

export default getImages;
