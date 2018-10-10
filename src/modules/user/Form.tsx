import * as React from "react";
import PureComponent = React.PureComponent;
import { Input } from "../../ui/Input";
import { BlueButton } from "../../ui/BlueButton";
import { StringValueNode } from "graphql";

interface State {
  email: string;
  password: string;
}

interface Props {
  onSubmit: (data: State) => void;
  buttonText: string;
}

export class Form extends PureComponent<Props, State> {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    } as any);
  };
  render() {
    const { password, email } = this.state;
    return (
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

          <Input
            label="PASSWORD"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={this.handleChange}
          />

          <BlueButton onClick={() => this.props.onSubmit(this.state)}>
            {this.props.buttonText}
          </BlueButton>
        </div>
      </div>
    );
  }
}
