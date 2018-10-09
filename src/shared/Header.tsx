import * as React from "react";
import PureComponent = React.PureComponent;
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { MeQuery } from "../schemaTypes";
import { meQuery } from "../graphql/queries/me";

export class Header extends PureComponent {
  state = {};
  render() {
    return (
      <div
        style={{
          height: 50,
          width: "100%",
          backgroundColor: "#fafafa",
          display: "flex",
          justifyContent: "space-around",
          padding: 10
        }}
      >
        <Link to="/">
          <h2
            style={{
              fontStyle: "oblique",
              fontWeight: "lighter"
            }}
          >
            Stripe Payments
          </h2>
        </Link>
        <Query<MeQuery> query={meQuery}>
          {({ data, loading }) => {
            if (loading || !data) {
              return null;
            }

            if (!data.me) {
              return (
                <div>
                  <div>
                    <Link to="/login">Login</Link>
                  </div>
                  <div>
                    <Link to="/register">Register</Link>
                  </div>
                </div>
              );
            }

            // user is logged in

            return (
              <div>
                <Link to="/account">Account</Link>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
