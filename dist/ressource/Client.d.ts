import { HttpClient } from "./HttpClient";
import { NodeEnvironment, Keys } from "@/types/client";
import { Payment } from "@/request/Payment";
import { Customer } from "@/request/Customer";
import { CreditCard } from "@/request/CreditCard";
import { Dispute } from "@/request/Dispute";
import { Refund } from "@/request/Refund";
import { Sepa } from "@/request/Sepa";
import { Payout } from "@/request/Payout";
export declare class Client extends HttpClient {
    private keys;
    environment: NodeEnvironment;
    creditCard: CreditCard;
    customer: Customer;
    dispute: Dispute;
    payment: Payment;
    payout: Payout;
    refund: Refund;
    sepa: Sepa;
    constructor(keys: Keys, environment?: NodeEnvironment);
    getKeys(): Keys;
    setKeys(keys: Keys): Keys;
}
