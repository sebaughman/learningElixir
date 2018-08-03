/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type Transaction_transaction$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TransactionList_transactions$ref: FragmentReference;
export type TransactionList_transactions = $ReadOnlyArray<{|
  +$fragmentRefs: Transaction_transaction$ref,
  +$refType: TransactionList_transactions$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "TransactionList_transactions",
  "type": "Transaction",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Transaction_transaction",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '673d106585ce216fabdb8ad0a5476678';
module.exports = node;
