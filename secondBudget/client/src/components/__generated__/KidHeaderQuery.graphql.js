/**
 * @flow
 * @relayHash 0c9935f27c8014f14db5330e0791fafb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type KidHeaderQueryVariables = {|
  id: string
|};
export type KidHeaderQueryResponse = {|
  +kid: ?{|
    +name: ?string,
    +budgetAmount: ?number,
    +amountRemaining: ?number,
  |}
|};
export type KidHeaderQuery = {|
  variables: KidHeaderQueryVariables,
  response: KidHeaderQueryResponse,
|};
*/


/*
query KidHeaderQuery(
  $id: ID!
) {
  kid(id: $id) {
    name
    budgetAmount
    amountRemaining
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "budgetAmount",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "amountRemaining",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "KidHeaderQuery",
  "id": null,
  "text": "query KidHeaderQuery(\n  $id: ID!\n) {\n  kid(id: $id) {\n    name\n    budgetAmount\n    amountRemaining\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "KidHeaderQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "kid",
        "storageKey": null,
        "args": v1,
        "concreteType": "Kid",
        "plural": false,
        "selections": [
          v2,
          v3,
          v4
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "KidHeaderQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "kid",
        "storageKey": null,
        "args": v1,
        "concreteType": "Kid",
        "plural": false,
        "selections": [
          v2,
          v3,
          v4,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ee79d7aeb2c529d09bfaaf2924982565';
module.exports = node;
