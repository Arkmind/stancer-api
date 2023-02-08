import { HttpClient } from "./HttpClient";
import { NodeEnvironment, Keys } from "@/types/client";
import { Payment } from "@/request/Payment";
import { getNodeEnvironment } from "@/utils";
import { client } from "@/error/errorList";
import { Customer } from "@/request/Customer";
import { CreditCard } from "@/request/CreditCard";
import { Dispute } from "@/request/Dispute";
import { Refund } from "@/request/Refund";
import { Sepa } from "@/request/Sepa";
import { Payout } from "@/request/Payout";

export class Client extends HttpClient {
  private keys: Keys;
  public environment: NodeEnvironment = getNodeEnvironment();

  public creditCard: CreditCard = new CreditCard(this);
  public customer: Customer = new Customer(this);
  public dispute: Dispute = new Dispute(this);
  public payment: Payment = new Payment(this);
  public payout: Payout = new Payout(this);
  public refund: Refund = new Refund(this);
  public sepa: Sepa = new Sepa(this);

  constructor(keys: Keys, environment?: NodeEnvironment) {
    super();

    this.keys = keys;
    this.environment = environment || this.environment;

    const secretKey = this.keys[`s${this.environment}`];
    if (!secretKey) throw new Error(client.keys.undefined);
    this.setDefaultHeaders({
      Authorization: this.getBasicAuthKey(secretKey),
    });

    this.payment = new Payment(this);
    this.customer = new Customer(this);
    this.creditCard = new CreditCard(this);
  }

  public getKeys(): Keys {
    return this.keys;
  }

  public setKeys(keys: Keys): Keys {
    this.keys = keys;
    return this.keys;
  }
}
