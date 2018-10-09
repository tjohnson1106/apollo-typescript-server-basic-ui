import * as React from "react";
import PureComponent = React.PureComponent;
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import {
  ChangeCreditCardMutation,
  ChangeCreditCardMutationVariables
} from "../../schemaTypes";
import { userFragment } from "../../graphql/fragments/userFragment";

const changeCreditCardMutation = gql`
  mutation ChangeCreditCardMutation($source: String!, $ccLast4: String!) {
    changeCreditCard(source: $source, ccLast4: $ccLast4) {
      ...UserInfo
    }
  }
  ${userFragment}
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
                variables: { source: token.id, ccLast4: token.card.last4 }
              });
              console.log(response);
            }}
            panelLabel="Change Card"
            stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE!}
          >
            <button
              style={{
                borderRadius: 20,
                borderColor: "black",
                backgroundColor: "#4b77be",
                paddingTop: 3,
                textAlign: "justify"
              }}
            >
              Change Credit Card
            </button>
          </StripeCheckout>
        )}
      </Mutation>
    );
  }
}
