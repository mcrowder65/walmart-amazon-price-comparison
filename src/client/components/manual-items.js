import React from "react";
import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";

import Item from "./item";

const QUERY = gql`
  query searchItems($searchQuery: String!) {
    searchItems(searchQuery: $searchQuery) {
      name
      itemId
    }
  }
`;
class ManualItems extends React.Component {
  state = {
    input: "",
    items: []
  }

  onInputChange = e => {
    this.setState({ input: e.target.value });
  }

  onItemsChanged = items => {
    this.setState({ items });
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.onInputChange} />
        <br/>
        <ApolloConsumer>
          {client => (
            <div>
              {this.state.items.length === 0 && "No data!"}
              <button
                onClick={async () => {
                  const { data } = await client.query({
                    query: QUERY,
                    variables: { searchQuery: this.state.input }
                  });
                  this.onItemsChanged(data.searchItems);
                }}
              >
              Search
              </button>
            </div>
          )}
        </ApolloConsumer>

        {this.state.items.map((item, index) => {
          return (
            <div key={index}>
              <Item {...item}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ManualItems;
