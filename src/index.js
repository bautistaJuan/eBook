import { getData } from "./apis/getBooksItemsAPI";
async function main() {
  const e = await getData();
  console.log(e);
}
main();
