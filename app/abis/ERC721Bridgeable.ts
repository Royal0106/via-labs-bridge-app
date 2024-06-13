export const ERC721Bridgeable = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "approved",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "Approval",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool",
      },
    ],
    "name": "ApprovalForAll",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newOwner",
        "type": "address",
      },
    ],
    "name": "MessageOwnershipTransferred",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "token",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256",
      },
    ],
    "name": "RecoverToken",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "txId",
        "type": "uint256",
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "destinationChainId",
        "type": "uint256",
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "featureId",
        "type": "uint32",
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "featureData",
        "type": "bytes",
      },
    ],
    "name": "SendMessageWithFeature",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "exsig",
        "type": "address",
      },
    ],
    "name": "SetExsig",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxfee",
        "type": "uint256",
      },
    ],
    "name": "SetMaxfee",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "maxGas",
        "type": "uint256",
      },
    ],
    "name": "SetMaxgas",
    "type": "event",
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "Transfer",
    "type": "event",
  },
  {
    "stateMutability": "payable",
    "type": "fallback",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "name": "CHAINS",
    "outputs": [
      {
        "internalType": "address",
        "name": "endpoint",
        "type": "address",
      },
      {
        "internalType": "bytes",
        "name": "endpointExtended",
        "type": "bytes",
      },
      {
        "internalType": "uint16",
        "name": "confirmations",
        "type": "uint16",
      },
      {
        "internalType": "bool",
        "name": "extended",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32",
      },
    ],
    "name": "FEATURES",
    "outputs": [
      {
        "internalType": "address",
        "name": "endpoint",
        "type": "address",
      },
      {
        "internalType": "bytes",
        "name": "endpointExtended",
        "type": "bytes",
      },
      {
        "internalType": "uint16",
        "name": "confirmations",
        "type": "uint16",
      },
      {
        "internalType": "bool",
        "name": "extended",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "FEATURE_GATEWAY",
    "outputs": [
      {
        "internalType": "contract IFeatureGateway",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "FEE_TOKEN",
    "outputs": [
      {
        "internalType": "contract IERC20cl",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "MESSAGE_OWNER",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "MESSAGEv3",
    "outputs": [
      {
        "internalType": "contract IMessageV3",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_destChainId",
        "type": "uint256",
      },
      {
        "internalType": "address",
        "name": "_recipient",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "_nftId",
        "type": "uint256",
      },
    ],
    "name": "bridge",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_messageV3",
        "type": "address",
      },
      {
        "internalType": "uint256[]",
        "name": "_chains",
        "type": "uint256[]",
      },
      {
        "internalType": "address[]",
        "name": "_endpoints",
        "type": "address[]",
      },
      {
        "internalType": "uint16[]",
        "name": "_confirmations",
        "type": "uint16[]",
      },
    ],
    "name": "configureClient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_messageV3",
        "type": "address",
      },
      {
        "internalType": "uint256[]",
        "name": "_chains",
        "type": "uint256[]",
      },
      {
        "internalType": "bytes[]",
        "name": "_endpoints",
        "type": "bytes[]",
      },
      {
        "internalType": "uint16[]",
        "name": "_confirmations",
        "type": "uint16[]",
      },
    ],
    "name": "configureClientExtended",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_featureGateway",
        "type": "address",
      },
    ],
    "name": "configureFeatureGateway",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "getApproved",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address",
      },
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "_sourceChainId",
        "type": "uint256",
      },
    ],
    "name": "isAuthorized",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "_sourceChainId",
        "type": "uint256",
      },
    ],
    "name": "isSelf",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
      {
        "internalType": "uint256",
        "name": "_sourceChainId",
        "type": "uint256",
      },
      {
        "internalType": "address",
        "name": "_sender",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
      {
        "internalType": "bytes",
        "name": "_data",
        "type": "bytes",
      },
    ],
    "name": "messageProcess",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "nextNftId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "ownerOf",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256",
      },
    ],
    "name": "recoverToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes",
      },
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address",
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool",
      },
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_signer",
        "type": "address",
      },
    ],
    "name": "setExsig",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_maxFee",
        "type": "uint256",
      },
    ],
    "name": "setMaxfee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_maxGas",
        "type": "uint256",
      },
    ],
    "name": "setMaxgas",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4",
      },
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string",
      },
    ],
    "stateMutability": "view",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address",
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address",
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256",
      },
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newMessageOwner",
        "type": "address",
      },
    ],
    "name": "transferMessageOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function",
  },
  {
    "stateMutability": "payable",
    "type": "receive",
  },
] as const;