import { gql } from "apollo-boost";
// import { userFragment } from "../fragments/userFragment";

// fragment removed for testing incompatibility with apollo

export const meQuery = gql`
  query MeQuery {
    me {
      id
      email
      type
      ccLast4
    }
  }
`;

// export const meQuery = gql`
//   query MeQuery {
//     me {
//       ...UserInfo
//     }
//   }

//   ${userFragment}
// `;
