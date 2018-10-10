import * as React from "react";
import PureComponent = React.PureComponent;
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { LoginMutation, LoginMutationVariables } from "../../schemaTypes";
import { RouteComponentProps } from "react-router-dom";
import { meQuery } from "../../graphql/queries/me";
import { userFragment } from "../../graphql/fragments/userFragment";
import { BlueButton } from "../../ui/BlueButton";
import { Input } from "../../ui/Input";

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ...UserInfo
    }
  }

  ${userFragment}
`;

export class LoginView extends PureComponent<RouteComponentProps<{}>> {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { password, email } = this.state;
    return (
      <Mutation<LoginMutation, LoginMutationVariables>
        update={(cache, { data }) => {
          if (!data || !data.login) {
            return;
          }

          cache.writeQuery({
            query: meQuery,
            data: { me: data.login }
          });
        }}
        mutation={loginMutation}
      >
        {(mutate, { client }) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div>
              <Input
                label="EMAIL"
                type="text"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <Input
                label="PASSWORD"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <BlueButton
                onClick={async () => {
                  // optional reset store
                  client.resetStore();
                  const response = await mutate({
                    variables: this.state
                  });
                  console.log(response);
                  this.props.history.push("/account");
                }}
              >
                login
              </BlueButton>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}
