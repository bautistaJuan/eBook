async function getData() {
  // Search for Volume especif :
  const getAPIBooksVolume = await fetch(
    `https://www.googleapis.com/books/v1/volumes/gNAwDwAAQBAJ?key=AIzaSyArKJEmIP1SiCVdKvcHxrlum0T3BaDuX1o`
  );
  // Search for title and author :
  const getAPIBooks = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=gato&maxResults=20&key=AIzaSyArKJEmIP1SiCVdKvcHxrlum0T3BaDuX1o`
  );
  const getEbooks = await getAPIBooks.json();
  const getEbooksV = await getAPIBooksVolume.json();
  return getEbooksV;
}
export { getData };
