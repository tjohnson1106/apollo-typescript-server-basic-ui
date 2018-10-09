import * as React from "react";
import PureComponent = React.PureComponent;
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import {
  ChangeCreditCardMutation,
  ChangeCreditCardMutationVariables
} from "../../schemaTypes";

const changeCreditCardMutation = gql`
  mutation ChangeCreditCardMutation($source: String!) {
    changeCreditCard(source: $source) {
      id
      email
      type
    }
  }
`;

export class ChangeCreditCard extends PureComponent {
  render() {
    return (
      <Mutation<ChangeCreditCardMutation, ChangeCreditCardMutationVariables>
        mutation={changeCreditCardMutation}
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
