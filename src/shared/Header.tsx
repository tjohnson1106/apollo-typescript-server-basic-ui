import * as React from "react";
import PureComponent = React.PureComponent;
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import { MeQuery } from "../schemaTypes";
import { meQuery } from "../graphql/queries/me";
import { HeaderButton } from "../ui/HeaderButton";

export class Header extends PureComponent {
  state = {};
  render() {
    return (
      <div
        style={{
          height: 50,
          width: "100%",
          backgroundColor: " #FFFEFC",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 10
        }}
      >
        <Link to="/">
          <HeaderButton
            style={{
              fontStyle: "oblique",
              fontWeight: "lighter",
              fontSize: 24
            }}
          >
            Stripe Payments
          </HeaderButton>
        </Link>
        <Query<MeQuery> query={meQuery}>
          {({ data, loading }) => {
            if (loading || !data) {
              return null;
            }

            if (!data.me) {
              return (
                <div>
                  <Link to="/login">
                    <HeaderButton>login</HeaderButton>
                  </Link>
                  <Link to="/register">
                    <HeaderButton>register</HeaderButton>
                  </Link>
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
