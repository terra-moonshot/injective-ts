import ExecArgCW20AdapterRedeemAndTransfer from './exec-args/ExecArgCW20AdapterRedeemAndTransfer'
import ExecArgCW20Send from './exec-args/ExecArgCW20Send'
import ExecArgCW20Transfer from './exec-args/ExecArgCW20Transfer'
import ExecArgDepositTokens from './exec-args/ExecArgDepositTokens'
import ExecArgIncreaseAllowance from './exec-args/ExecArgIncreaseAllowance'
import ExecArgInitiateTransfer from './exec-args/ExecArgInitiateTransfer'
import ExecArgRegisterVault from './exec-args/ExecArgRegisterVault'
import ExecArgSubmitVaa from './exec-args/ExecArgSubmitVaa'
import ExecArgUpdateDerivativeVaultConfig from './exec-args/ExecArgUpdateDerivativeVaultConfig'
import ExecArgUpdateSpotVaultConfig from './exec-args/ExecArgUpdateSpotVaultConfig'
import ExecArgRequestTimeLockedRedemption from './exec-args/ExecArgRequestTimeLockedRedemption'

import ExecPrivilegedArgRegisterVault from './exec-priv-args/ExecPrivilegedRegisterVault'
import ExecPrivilegedArgVaultRedeem from './exec-priv-args/ExecPrivilegedArgVaultRedeem'
import ExecPrivilegedArgVaultSubscribe from './exec-priv-args/ExecPrivilegedArgVaultSubscribe'

export type ExecArgs =
  | ExecArgCW20AdapterRedeemAndTransfer
  | ExecArgCW20Send
  | ExecArgCW20Transfer
  | ExecArgDepositTokens
  | ExecArgIncreaseAllowance
  | ExecArgInitiateTransfer
  | ExecArgRegisterVault
  | ExecArgSubmitVaa
  | ExecArgUpdateDerivativeVaultConfig
  | ExecArgUpdateSpotVaultConfig
  | ExecArgRequestTimeLockedRedemption

export type ExecPrivilegedArgs =
  | ExecPrivilegedArgRegisterVault
  | ExecPrivilegedArgVaultRedeem
  | ExecPrivilegedArgVaultSubscribe
