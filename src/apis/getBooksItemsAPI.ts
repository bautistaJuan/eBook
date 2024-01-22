async function getData(title: string) {
  // Search for Volume especif :
  // const getAPIBooksVolume = await fetch(
  //   `https://www.googleapis.com/books/v1/volumes/gNAwDwAAQBAJ?key=AIzaSyArKJEmIP1SiCVdKvcHxrlum0T3BaDuX1o`
  // );
  // Search for title and author :
  // const getAPIBooks = await fetch(
  //   `https://www.googleapis.com/books/v1/volumes?q=gato+inauthor:Poe&maxResults=20&key=AIzaSyArKJEmIP1SiCVdKvcHxrlum0T3BaDuX1o`
  // );

  // Search for title  :
  const getAPIBooksT = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${title}&maxResults=30&key=AIzaSyArKJEmIP1SiCVdKvcHxrlum0T3BaDuX1o`
  );
  // Next Page  Result :
  // const nextPage = await fetch(
  //   `https://www.googleapis.com/books/v1/volumes?q=gato&maxResults=20&startIndex=3&key=AIzaSyArKJEmIP1SiCVdKvcHxrlum0T3BaDuX1o`
  // );
  const getEbooksT = await getAPIBooksT.json();
  return getEbooksT;
}
export { getData };
