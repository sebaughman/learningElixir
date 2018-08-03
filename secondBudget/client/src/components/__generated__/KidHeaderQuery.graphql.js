/**
 * @flow
 * @relayHash 0dcced338142129f2cf9de5084197e21
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
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "KidHeaderQuery",
  "id": null,
  "text": "query KidHeaderQuery(\n  $id: ID!\n) {\n  kid(id: $id) {\n    name\n    budgetAmount\n    id\n  }\n}\n",
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
          v3
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
(node/*: any*/).hash = '4a7e7aa89c327cf1ccfc7c3e156b0b93';
module.exports = node;
