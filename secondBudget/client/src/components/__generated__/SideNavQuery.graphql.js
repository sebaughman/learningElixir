/**
 * @flow
 * @relayHash da80c32352a0a133bd196f7e217e8886
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type KidList_kids$ref = any;
export type SideNavQueryVariables = {||};
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
query SideNavQuery {
  allKids(userId: 1) {
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
    "kind": "Literal",
    "name": "userId",
    "value": 1,
    "type": "ID!"
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SideNavQuery",
  "id": null,
  "text": "query SideNavQuery {\n  allKids(userId: 1) {\n    ...KidList_kids\n    id\n  }\n}\n\nfragment KidList_kids on Kid {\n  ...KidLink_kid\n}\n\nfragment KidLink_kid on Kid {\n  id\n  name\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SideNavQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allKids",
        "storageKey": "allKids(userId:1)",
        "args": v0,
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
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allKids",
        "storageKey": "allKids(userId:1)",
        "args": v0,
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
(node/*: any*/).hash = '2c37977b96938d29623419c626b8bb11';
module.exports = node;
