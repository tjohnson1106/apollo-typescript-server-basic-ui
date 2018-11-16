import * as React from "react";

import { customRender } from "../../../testing-utils/customRender";
import { Account } from "../Account";
import { meQuery } from "../../../graphql/queries/me";
import { Route } from "react-router-dom";

// pass in queries to mock

const mePaidUserMock = {
  request: {
    query: meQuery,
    variables: {}
  },

  result: {
    date: {
      me: {
        id: "123",
        email: "q@q.com",
        type: "paid",
        ccLast4: "4242"
      }
    }
  }
};

const meFreeTrialUserMock = {
  request: {
    query: meQuery,
    variables: {}
  },
  result: {
    data: {
      me: {
        id: "123",
        email: "diane@diane.com",
        type: "free-trial"
      }
    }
  }
};

const meNullMock = {
  request: {
    query: meQuery,
    variables: {}
  },
  result: {
    data: {
      me: null
    }
  }
};

const waitForData = () => new Promise(res => setTimeout(res, 0));

describe("account", () => {
  it("paid user", async () => {
    const { getByTestId } = customRender(<Account />, [mePaidUserMock as any]);
    await waitForData();
    const el = getByTestId("cc-number");
    expect(el.textContent).toContain("4242");
  });

  it("free trial", async () => {
    const { getByText } = customRender(<Account />, [meFreeTrialUserMock]);
    await waitForData();
    expect(getByText("Pay with card")).toBeDefined();
  });

  it("not authenticated", async () => {
    const { history }: any = customRender(
      <Route path="/" render={() => <Account />} />,
      [meNullMock]
    );
    await waitForData();
    expect(history.location.pathname).toEqual("/login");
  });
});
