import HttpClient from "./HttpClient";
import { NodeEnvironment, Keys } from "@/types/client";
import Payment from "@/request/Payment";
import { getNodeEnvironment } from "@/utils";
import { client } from "@/error/errorList";
import { Customer } from "@/request/Customer";
import { CreditCard } from "@/request/CreditCard";

export default class Client extends HttpClient {
  private keys: Keys;
  private environment: NodeEnvironment = getNodeEnvironment();
  public payment: Payment;
  public customer: Customer;
  public creditCard: CreditCard;

  constructor(keys: Keys, environment: NodeEnvironment) {
    super();

    this.keys = keys;
    this.environment = environment;

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
