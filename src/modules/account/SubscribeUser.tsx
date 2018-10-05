import * as React from "react";
import PureComponent = React.PureComponent;
import StripeCheckout from "react-stripe-checkout";

export class SubscribeUser extends PureComponent {
  render() {
    return (
      <StripeCheckout
        token={token => {
          console.log(token);
        }}
        stripeKey="my_PUBLISHABLE_stripekey"
      />
    );
  }
}
