import { Client } from "./ressource/Client";
import { HttpClient } from "./ressource/HttpClient";
import { CreditCard } from "./request/CreditCard";
import { Customer } from "./request/Customer";
import { Dispute } from "./request/Dispute";
import { Payment } from "./request/Payment";
import { Payout } from "./request/Payout";
import { Refund } from "./request/Refund";
import { Sepa } from "./request/Sepa";

import * as AuthType from "./types/auth";
import * as ClientType from "./types/client";
import * as CreditCardType from "./types/creditcard";
import * as CustomerType from "./types/customer";
import * as DeviceType from "./types/device";
import * as DisputeType from "./types/dispute";
import * as PaymentType from "./types/payment";
import * as PayoutType from "./types/payout";
import * as RefundType from "./types/refund";
import * as SepaType from "./types/sepa";

const Types = {
  Auth: AuthType,
  Client: ClientType,
  CreditCard: CreditCardType,
  Customer: CustomerType,
  Device: DeviceType,
  Dispute: DisputeType,
  Payment: PaymentType,
  Payout: PayoutType,
  Refund: RefundType,
  Sepa: SepaType,
};

export { Client, HttpClient, CreditCard, Customer, Dispute, Payment, Payout, Refund, Sepa, Types };
