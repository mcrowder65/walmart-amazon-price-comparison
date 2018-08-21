import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const QUERY = gql`
  query item($itemId: String) {
    item(itemId: $itemId) {
      name
      itemId
    }
  }
`;
class Item extends React.Component {
  static propTypes = {
    itemId: PropTypes.string,
    name: PropTypes.string,
    match: PropTypes.shape({
      params: PropTypes.shape({
        itemId: PropTypes.string
      })
    }),
    onClick: PropTypes.func,
    classes: PropTypes.object.isRequired
  };
  static defaultProps = {
    match: {
      params: {}
    },
    itemId: "",
    name: "",
    onClick: () => {}
  };

  getItemIdAndName = item => {
    if (this.props.itemId && this.props.name) {
      return {
        itemId: this.props.itemId,
        name: this.props.name
      };
    } else if (item.itemId && item.name) {
      return {
        itemId: item.itemId,
        name: item.name
      };
    } else return {};
  };
  render() {
    const { onClick, classes } = this.props;
    return (
      <div>
        <Query
          query={QUERY}
          variables={{ itemId: this.props.match.params.itemId }}
          skip={this.props.itemId && this.props.name}
        >
          {({ loading, error, data = {} }) => {
            if (this.props.match.params.itemId && loading) return "Loading...";
            if (error) return `Error!: ${error}`;
            const { name, itemId } = this.getItemIdAndName(data.item);
            return (
              <div>
                <Card className={classes.card} onClick={onClick}>
                  name: {name} <br />
                  itemId: {itemId}
                  <br />
                </Card>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
const styles = {
  card: {
    width: 200,
    margin: 20
  }
};
export default withStyles(styles)(Item);
