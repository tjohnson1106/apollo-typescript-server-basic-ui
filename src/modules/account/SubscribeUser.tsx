import * as React from "react";
import PureComponent = React.PureComponent;
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import {
  CreateSubscriptionMutationVariables,
  CreateSubscriptionMutation
} from "../../schemaTypes";

const createSubscriptionMutation = gql`
  mutation CreateSubscriptionMutation($source: String!) {
    createSubscription(source: $source) {
      id
      email
      type
    }
  }
`;

export class SubscribeUser extends PureComponent {
  render() {
    return (
      <Mutation<CreateSubscriptionMutation, CreateSubscriptionMutationVariables>
        mutation={createSubscriptionMutation}
      >
        {mutate => (
          <StripeCheckout
            name="Bracket Factory LLC"
            token={async token => {
              const response = await mutate({
                variables: { source: token.id }
              });
              console.log(response);
            }}
            stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE!}
          />
        )}
      </Mutation>
    );
  }
}
