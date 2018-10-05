import * as React from "react";
import PureComponent = React.PureComponent;
import StripeCheckout from "react-stripe-checkout";

export class SubscribeUser extends PureComponent {
  render() {
    return (
      <StripeCheckout
        name="Bracket Factory LLC"
        token={token => {
          console.log(token);
        }}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE!}
      />
    );
  }
}
