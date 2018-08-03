/**
 * @flow
 * @relayHash 39916fdaeea7d711c4a4fef43039d4a7
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type KidList_kids$ref = any;
export type SideNavQueryVariables = {|
  userId: string
|};
export type SideNavQueryResponse = {|
  +allKids: ?$ReadOnlyArray<?{|
    +$fragmentRefs: KidList_kids$ref
  |}>
|};
export type SideNavQuery = {|
  variables: SideNavQueryVariables,
  response: SideNavQueryResponse,
|};
*/


/*
query SideNavQuery(
  $userId: ID!
) {
  allKids(userId: $userId) {
    ...KidList_kids
    id
  }
}

fragment KidList_kids on Kid {
  ...KidLink_kid
}

fragment KidLink_kid on Kid {
  id
  name
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId",
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SideNavQuery",
  "id": null,
  "text": "query SideNavQuery(\n  $userId: ID!\n) {\n  allKids(userId: $userId) {\n    ...KidList_kids\n    id\n  }\n}\n\nfragment KidList_kids on Kid {\n  ...KidLink_kid\n}\n\nfragment KidLink_kid on Kid {\n  id\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SideNavQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allKids",
        "storageKey": null,
        "args": v1,
        "concreteType": "Kid",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "KidList_kids",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SideNavQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allKids",
        "storageKey": null,
        "args": v1,
        "concreteType": "Kid",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
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
(node/*: any*/).hash = 'b27a40929591ed263ca34d29a3bdd382';
module.exports = node;
