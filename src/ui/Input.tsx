import * as React from "react";
import PureComponent = React.PureComponent;

interface Props {
  label: string;
}

export class Input extends PureComponent<Props> {
  render() {
    const { label } = this.props;
    return (
      <div>
        <div>{label}</div>
        <div>
          <input />
        </div>
      </div>
    );
  }
}
