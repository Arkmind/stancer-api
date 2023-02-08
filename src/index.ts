import { Client } from "./ressource/Client";
import { HttpClient } from "./ressource/HttpClient";
import { CreditCard } from "./request/CreditCard";
import { Customer } from "./request/Customer";
import { Dispute } from "./request/Dispute";
import { Payment } from "./request/Payment";
import { Payout } from "./request/Payout";
import { Refund } from "./request/Refund";
import { Sepa } from "./request/Sepa";

const client = new Client({
  sprod: "sk_test_123456789",
  stest: "sk_test_123456789",
});

(async () => {
  const response = await client.payment.get("pay_123456789");
  console.log("response:", response);
})();

export { Client, HttpClient, CreditCard, Customer, Dispute, Payment, Payout, Refund, Sepa };
