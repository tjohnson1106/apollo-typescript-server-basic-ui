import * as React from "react";
import PureComponent = React.PureComponent;
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { RegisterMutationVariables, RegisterMutation } from "../../schemaTypes";
import { RouteComponentProps } from "react-router-dom";
import { Form } from "./Form";

// TODO implement types with apollo-cli

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password)
  }
`;

export class RegisterView extends PureComponent<RouteComponentProps<{}>> {
  render() {
    return (
      <Mutation<RegisterMutation, RegisterMutationVariables>
        mutation={registerMutation}
      >
        {mutate => (
          <Form
            buttonText="register"
            onSubmit={async data => {
              const response = await mutate({
                variables: data
              });
              console.log(response);
              this.props.history.push("/login");
            }}
          />
        )}
      </Mutation>
    );
  }
}
