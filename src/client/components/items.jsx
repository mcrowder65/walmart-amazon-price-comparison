import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Item from "./item";
import { browserHistory } from "browser-history";

const QUERY = gql`
  query searchItems($searchQuery: String!) {
    searchItems(searchQuery: $searchQuery) {
      name
      itemId
    }
  }
`;
class FirstGraphqlComponent extends React.Component {
  state = {
    input: "",
  }

  onInputChange = e => {
    this.setState({ input: e.target.value });
  }
  render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.onInputChange} />
        <br/>
        <Query query={QUERY} variables={{ searchQuery: this.state.input }} skip={!this.state.input}>
          {
            ({ loading, error, data }) => {
              if (!this.state.input) return null;
              if (this.state.input && loading) return "Loading...";
              if (this.state.input && !data.searchItems || data.searchItems && data.searchItems.length === 0) {
                return `${this.state.input} returned no results`;
              }
              if (error) return `Error!: ${error}`;
              return (
                <div>
                  {(data.searchItems || []).map((item, index) => {
                    return (
                      <div key={index}>
                        <Item {...item}
                          onClick={() => {
                            browserHistory.push(`/item/${item.itemId}`);
                          }}
                        />
                      </div>
                    );
                  }
                  )}
                </div>
              );

            }

          }
        </Query>
      </div>
    );
  }
}

export default FirstGraphqlComponent;
