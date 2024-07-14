export type ValueRouter = {
  "version": "0.1.0",
  "name": "value_router",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "valueRouter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitializeParams"
          }
        }
      ]
    },
    {
      "name": "setValueRouter",
      "accounts": [
        {
          "name": "valueRouter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetValueRouterParams"
          }
        }
      ]
    },
    {
      "name": "setAdmin",
      "accounts": [
        {
          "name": "valueRouter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetAdminParams"
          }
        }
      ]
    },
    {
      "name": "createRelayData",
      "accounts": [
        {
          "name": "eventRentPayer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "relayData",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "postBridgeMessage",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "relayData",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "PostBridgeDataParams"
          }
        }
      ]
    },
    {
      "name": "postSwapMessage",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "relayData",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "PostSwapDataParams"
          }
        }
      ]
    },
    {
      "name": "prepareRelay",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "recipientWalletAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientUsdcAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "recipientOutputTokenAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "outputMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "PrepareRelayParams"
          }
        }
      ]
    },
    {
      "name": "relay",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "caller",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tmAuthorityPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vrAuthorityPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "messageTransmitterProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "messageTransmitter",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "usedNonces",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMessengerMinterProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "valueRouterProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "messageTransmitterEventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMessengerEventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cctpReceiverEventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "relayParams",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMessenger",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "remoteTokenMessenger",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMinter",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "localToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenPair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "recipientUsdcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientOutputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientWalletAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "custodyTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programUsdcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "outputMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "jupiterProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cctpMessageReceiver",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "RelayParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "valueRouter",
      "docs": [
        "Main state of the MessageTransmitter program"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "bridgeFees",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "swapFees",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "feeReceiver",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "relayData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bridgeMessage",
            "type": {
              "defined": "ReceiveMessageParams"
            }
          },
          {
            "name": "swapMessage",
            "type": {
              "defined": "ReceiveMessageParams"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitializeParams",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "SetValueRouterParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bridgeFees",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "swapFees",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "feeReceiver",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "SetAdminParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "PostBridgeDataParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bridgeMessage",
            "type": {
              "defined": "ReceiveMessageParams"
            }
          }
        ]
      }
    },
    {
      "name": "PostSwapDataParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "swapMessage",
            "type": {
              "defined": "ReceiveMessageParams"
            }
          }
        ]
      }
    },
    {
      "name": "PrepareRelayParams",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "RelayParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "jupiterSwapData",
            "type": "bytes"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "SwapAndBridgeEvent",
      "fields": [
        {
          "name": "bridgeUsdcAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "buyToken",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "guaranteedBuyAmount",
          "type": "bytes",
          "index": false
        },
        {
          "name": "destDomain",
          "type": "u32",
          "index": false
        },
        {
          "name": "recipient",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "bridgeNonce",
          "type": "u64",
          "index": false
        },
        {
          "name": "swapNonce",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidReturnData",
      "msg": "invalid return data"
    },
    {
      "code": 6001,
      "name": "InvalidJupiterProgram",
      "msg": "invalid jupiter program"
    },
    {
      "code": 6002,
      "name": "IncorrectOwner",
      "msg": "incorrect owner"
    },
    {
      "code": 6003,
      "name": "InsufficientLengthForU64Conversion",
      "msg": "insufficient length for u64 conversion"
    },
    {
      "code": 6004,
      "name": "USDCInAccountNotClosed",
      "msg": "USDC in account not closed"
    },
    {
      "code": 6005,
      "name": "CctpReceiverMismatch",
      "msg": "CCTP receiver mismatch"
    }
  ]
};

export const IDL: ValueRouter = {
  "version": "0.1.0",
  "name": "value_router",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "valueRouter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "InitializeParams"
          }
        }
      ]
    },
    {
      "name": "setValueRouter",
      "accounts": [
        {
          "name": "valueRouter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetValueRouterParams"
          }
        }
      ]
    },
    {
      "name": "setAdmin",
      "accounts": [
        {
          "name": "valueRouter",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "SetAdminParams"
          }
        }
      ]
    },
    {
      "name": "createRelayData",
      "accounts": [
        {
          "name": "eventRentPayer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "relayData",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "postBridgeMessage",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "relayData",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "PostBridgeDataParams"
          }
        }
      ]
    },
    {
      "name": "postSwapMessage",
      "accounts": [
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "relayData",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "PostSwapDataParams"
          }
        }
      ]
    },
    {
      "name": "prepareRelay",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "recipientWalletAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientUsdcAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "recipientOutputTokenAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "outputMint",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "PrepareRelayParams"
          }
        }
      ]
    },
    {
      "name": "relay",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "caller",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tmAuthorityPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vrAuthorityPda",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "messageTransmitterProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "messageTransmitter",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "usedNonces",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMessengerMinterProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "valueRouterProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "messageTransmitterEventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMessengerEventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cctpReceiverEventAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "relayParams",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMessenger",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "remoteTokenMessenger",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMinter",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "localToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenPair",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "recipientUsdcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientOutputTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientWalletAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "custodyTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "programUsdcAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "outputMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "programAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "jupiterProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "cctpMessageReceiver",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "params",
          "type": {
            "defined": "RelayParams"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "valueRouter",
      "docs": [
        "Main state of the MessageTransmitter program"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "bridgeFees",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "swapFees",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "feeReceiver",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "relayData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bridgeMessage",
            "type": {
              "defined": "ReceiveMessageParams"
            }
          },
          {
            "name": "swapMessage",
            "type": {
              "defined": "ReceiveMessageParams"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "InitializeParams",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "SetValueRouterParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bridgeFees",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "swapFees",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "feeReceiver",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "SetAdminParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "PostBridgeDataParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bridgeMessage",
            "type": {
              "defined": "ReceiveMessageParams"
            }
          }
        ]
      }
    },
    {
      "name": "PostSwapDataParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "swapMessage",
            "type": {
              "defined": "ReceiveMessageParams"
            }
          }
        ]
      }
    },
    {
      "name": "PrepareRelayParams",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "RelayParams",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "jupiterSwapData",
            "type": "bytes"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "SwapAndBridgeEvent",
      "fields": [
        {
          "name": "bridgeUsdcAmount",
          "type": "u64",
          "index": false
        },
        {
          "name": "buyToken",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "guaranteedBuyAmount",
          "type": "bytes",
          "index": false
        },
        {
          "name": "destDomain",
          "type": "u32",
          "index": false
        },
        {
          "name": "recipient",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "bridgeNonce",
          "type": "u64",
          "index": false
        },
        {
          "name": "swapNonce",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InvalidReturnData",
      "msg": "invalid return data"
    },
    {
      "code": 6001,
      "name": "InvalidJupiterProgram",
      "msg": "invalid jupiter program"
    },
    {
      "code": 6002,
      "name": "IncorrectOwner",
      "msg": "incorrect owner"
    },
    {
      "code": 6003,
      "name": "InsufficientLengthForU64Conversion",
      "msg": "insufficient length for u64 conversion"
    },
    {
      "code": 6004,
      "name": "USDCInAccountNotClosed",
      "msg": "USDC in account not closed"
    },
    {
      "code": 6005,
      "name": "CctpReceiverMismatch",
      "msg": "CCTP receiver mismatch"
    }
  ]
};
