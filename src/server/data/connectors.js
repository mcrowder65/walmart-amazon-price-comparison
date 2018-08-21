import "isomorphic-fetch";
// add this somewhere in the middle

export const WalmartLabsApi = {
  async search(query) {
    const response = await fetch(`http://matthewjcrowder.com/search/${query}`, { method: "GET" });
    const json = await response.json();
    return json.items;
  },
  async getItem(itemId) {
    // return { itemId: `GraphQL read ${itemId}!` };
    const response = await fetch(`http://matthewjcrowder.com/itemLookup/${itemId}`, { method: "GET" });
    const json = await response.json();
    return json;
  }
};