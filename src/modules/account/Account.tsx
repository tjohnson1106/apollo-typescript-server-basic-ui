import * as React from "react";
import PureComponent = React.PureComponent;
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { MeQuery } from "../../schemaTypes";
import { Link } from "react-router-dom";

const meQuery = gql`
  query MeQuery {
    me {
      id
      email
      type
    }
  }
`;

export class Account extends PureComponent {
  state = {};
  render() {
    return (
      <Query<MeQuery> fetchPolicy="network-only" query={meQuery}>
        {({ data, loading }) => {
          if (loading) {
            return null;
          }

          if (!data) {
            return <div>data is undefined</div>;
          }

          if (!data.me) {
            return <Link to="/login">Please login</Link>;
          }

          return <div>{data.me.email}</div>;
        }}
      </Query>
    );
  }
}
