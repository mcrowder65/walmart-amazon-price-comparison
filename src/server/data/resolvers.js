import { WalmartLabsApi } from "./connectors";

const resolvers = {
  Query: {
    searchItems(_, { searchQuery } = {}) {
      return WalmartLabsApi.search(searchQuery);
    },
    item(_, { itemId } = {}) {
      return WalmartLabsApi.getItem(itemId);
    }
  },

};

export default resolvers;