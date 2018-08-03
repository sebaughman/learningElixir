/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type KidLink_kid$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type KidList_kids$ref: FragmentReference;
export type KidList_kids = $ReadOnlyArray<{|
  +$fragmentRefs: KidLink_kid$ref,
  +$refType: KidList_kids$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "KidList_kids",
  "type": "Kid",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "KidLink_kid",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '646991a72afc36f800efd8cb12e1ad07';
module.exports = node;
