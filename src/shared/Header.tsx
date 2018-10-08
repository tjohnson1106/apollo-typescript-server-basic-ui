import * as React from "react";
import PureComponent = React.PureComponent;
import { Link } from "react-router-dom";

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
        <div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    );
  }
}
