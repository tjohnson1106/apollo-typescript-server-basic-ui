import * as React from "react";
import PureComponent = React.PureComponent;
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

import { CancelSubscriptionMutation } from "src/schemaTypes";
import { userFragment } from "../../graphql/fragments/userFragment";

const cancelSubscriptionMutation = gql`
  mutation CancelSubscriptionMutation {
    cancelSubscription {
      ...UserInfo
    }
  }
  ${userFragment}
`;

export class CancelSubscription extends PureComponent {
  render() {
    return (
      <Mutation<CancelSubscriptionMutation>
        mutation={cancelSubscriptionMutation}
      >
        {mutate => (
          <button onClick={() => mutate()}>cancel subscription</button>
        )}
      </Mutation>
    );
  }
}
