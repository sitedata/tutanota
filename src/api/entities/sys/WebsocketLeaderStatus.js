// @flow

import {create, TypeRef} from "../../common/EntityFunctions"


export const WebsocketLeaderStatusTypeRef: TypeRef<WebsocketLeaderStatus> = new TypeRef("sys", "WebsocketLeaderStatus")
export const _TypeModel: TypeModel = {
	"name": "WebsocketLeaderStatus",
	"since": 63,
	"type": "DATA_TRANSFER_TYPE",
	"id": 1759,
	"rootId": "A3N5cwAG3w",
	"versioned": false,
	"encrypted": false,
	"values": {
		"_format": {
			"name": "_format",
			"id": 1760,
			"since": 63,
			"type": "Number",
			"cardinality": "One",
			"final": false,
			"encrypted": false
		},
		"leaderStatus": {
			"name": "leaderStatus",
			"id": 1761,
			"since": 63,
			"type": "Boolean",
			"cardinality": "One",
			"final": false,
			"encrypted": false
		}
	},
	"associations": {},
	"app": "sys",
	"version": "63"
}

export function createWebsocketLeaderStatus(values?: $Shape<$Exact<WebsocketLeaderStatus>>): WebsocketLeaderStatus {
	return Object.assign(create(_TypeModel, WebsocketLeaderStatusTypeRef), values)
}

export type WebsocketLeaderStatus = {
	_type: TypeRef<WebsocketLeaderStatus>;

	_format: NumberString;
	leaderStatus: boolean;
}