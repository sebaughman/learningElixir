/**
 * @flow
 * @relayHash 090aebafdd11e7744a5c848cedf1a901
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TransactionList_transactions$ref = any;
export type TransactionBoxQueryVariables = {|
  kidId: string
|};
export type TransactionBoxQueryResponse = {|
  +allTransactions: ?$ReadOnlyArray<?{|
    +$fragmentRefs: TransactionList_transactions$ref
  |}>
|};
export type TransactionBoxQuery = {|
  variables: TransactionBoxQueryVariables,
  response: TransactionBoxQueryResponse,
|};
*/


/*
query TransactionBoxQuery(
  $kidId: ID!
) {
  allTransactions(kidId: $kidId) {
    ...TransactionList_transactions
    id
  }
}

fragment TransactionList_transactions on Transaction {
  ...Transaction_transaction
}

fragment Transaction_transaction on Transaction {
  id
  transactionAmount
  category {
    type
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "kidId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "kidId",
    "variableName": "kidId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TransactionBoxQuery",
  "id": null,
  "text": "query TransactionBoxQuery(\n  $kidId: ID!\n) {\n  allTransactions(kidId: $kidId) {\n    ...TransactionList_transactions\n    id\n  }\n}\n\nfragment TransactionList_transactions on Transaction {\n  ...Transaction_transaction\n}\n\nfragment Transaction_transaction on Transaction {\n  id\n  transactionAmount\n  category {\n    type\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TransactionBoxQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allTransactions",
        "storageKey": null,
        "args": v1,
        "concreteType": "Transaction",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TransactionList_transactions",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TransactionBoxQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allTransactions",
        "storageKey": null,
        "args": v1,
        "concreteType": "Transaction",
        "plural": true,
        "selections": [
          v2,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "transactionAmount",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "category",
            "storageKey": null,
            "args": null,
            "concreteType": "Category",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "type",
                "args": null,
                "storageKey": null
              },
              v2
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '578679dfd9a11ef5a0b3878b7095b317';
module.exports = node;
