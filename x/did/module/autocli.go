package did

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "github.com/SmplEcosystem/SmplIdentityChain/api/smplidentitychain/did"
)

// AutoCLIOptions implements the autocli.HasAutoCLIConfig interface.
func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions {
	return &autocliv1.ModuleOptions{
		Query: &autocliv1.ServiceCommandDescriptor{
			Service: modulev1.Query_ServiceDesc.ServiceName,
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "Params",
					Use:       "params",
					Short:     "Shows the parameters of the module",
				},
				{
					RpcMethod:      "ResolveDidRequest",
					Use:            "resolve-did-request [did]",
					Short:          "Query ResolveDidRequest",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "did"}},
				},

				// this line is used by ignite scaffolding # autocli/query
			},
		},
		Tx: &autocliv1.ServiceCommandDescriptor{
			Service:              modulev1.Msg_ServiceDesc.ServiceName,
			EnhanceCustomCommand: true, // only required if you want to use the custom command
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "UpdateParams",
					Skip:      true, // skipped because authority gated
				},
				{
					RpcMethod:      "UpsertDid",
					Use:            "upsert-did [did-document] [did-document-metadata]",
					Short:          "Send a UpsertDid tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "didDocument"}, {ProtoField: "didDocumentMetadata"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
