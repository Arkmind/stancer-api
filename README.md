# Stancer Node.js Library

The Stancer Node library provides convenient access to the Stancer API from applications written in server-side JavaScript.

This package isn't an official package but a community made.

---

# Documentation

## Installation

To install the latest version on npm locally and save it in your package's `package.json` file:

`npm install stancer-api --save`

To install the latest development version locally, without updating your project's `package.json` file:

`npm install git+https://github.com/Arkmind/stancer-api.git`

---

## Usage

Simple usage
```ts
import { Client } from "stancer-api";

const client = new Client({
    stest: process.env.SECRET_TEST_STANCER_API_KEY,
    sprod: process.env.SECRET_PROD_STANCER_API_KEY,
});

client.customer.get('cust_id');
```

---

## API Reference

<details>
<summary>Payments</summary>

The export `Client` as a property named `payment` that is an instance of [`Payment`](dist/request/Payment.d.ts), containing methods to manipulate payments.

**Get payment data `Client.payment.get(id: string)`**

**Create a payment `Client.payment.create(data: PaymentCreate)`** \
[PaymentCreate](dist/types/payment.d.ts)

**Update a payment `Client.payment.update(id: string, data: PaymentUpdate)`** \
[PaymentUpdate](dist/types/payment.d.ts)

**List all payment `Client.payment.list(data: PaymentList)`** \
[PaymentList](dist/types/payment.d.ts)
</details>

<details>
<summary>Credit Card</summary>

The export `Client` as a property named `creditCard` that is an instance of [`CreditCard`](dist/request/creditcard.d.ts), containing methods to manipulate credit cards.

**Get credit card data `Client.creditCard.get(id: string)`**

**Create a credit card `Client.creditCard.create(data: CreditCardCreate)`** \
[CreditCardCreate](dist/types/creditcard.d.ts)

**Update a credit card `Client.creditCard.update(id: string, data: CreditCardUpdate)`** \
[CreditCardUpdate](dist/types/creditcard.d.ts)

**Delete a credit card `Client.creditCard.delete(data: CreditCardDelete)`** \
[CreditCardDelete](dist/types/creditcard.d.ts)
</details>

<details>
<summary>SEPA</summary>

The export `Client` as a property named `sepa` that is an instance of [`Sepa`](dist/request/Sepa.d.ts), containing methods to manipulate SEPAs.

**Get SEPA data `Client.sepa.get(id: string)`**

**Create a SEPA `Client.sepa.create(data: SepaCreate)`** \
[SepaCreate](dist/types/sepa.d.ts)

**Update a SEPA `Client.sepa.update(id: string, data: SepaUpdate)`** \
[SepaUpdate](dist/types/sepa.d.ts)

**Delete a SEPA `Client.sepa.delete(data: SepaDelete)`** \
[SepaDelete](dist/types/sepa.d.ts)
</details>

<details>
<summary>Customers</summary>

The export `Client` as a property named `customer` that is an instance of [`Customer`](dist/request/Customer.d.ts), containing methods to manipulate Customers.

**Get Customer data `Client.customer.get(id: string)`**

**Create a Customer `Client.customer.create(data: CustomerCreate)`** \
[CustomerCreate](dist/types/customer.d.ts)

**Update a Customer `Client.customer.update(id: string, data: CustomerUpdate)`** \
[CustomerUpdate](dist/types/customer.d.ts)

**Delete a Customer `Client.customer.delete(data: CustomerDelete)`** \
[CustomerDelete](dist/types/customer.d.ts)
</details>

<details>
<summary>Refunds</summary>

The export `Client` as a property named `refund` that is an instance of [`Refund`](dist/request/Refund.d.ts), containing methods to manipulate Refunds.

**Get Refund data `Client.refund.get(id: string)`**

**Create a Refund `Client.refund.create(data: CustomerCreate)`** \
[RefundCreate](dist/types/refund.d.ts)
</details>

<details>
<summary>Disputes</summary>

The export `Client` as a property named `dispute` that is an instance of [`Dispute`](dist/request/Dispute.d.ts), containing methods to manipulate Disputes.

**Get Dispute data `Client.dispute.get(id: string)`**

**List all Dispute `Client.dispute.delete(data: DisputeList)`** \
[DisputeList](dist/types/dispute.d.ts)
</details>

<details>
<summary>Payouts</summary>

The export `Client` as a property named `payout` that is an instance of [`Payout`](dist/request/Payout.d.ts), containing methods to manipulate Payouts.

**Get a Payout detail `Client.payout.get(id: string, type: PayoutTypes, data?: PayoutList)`**
[PayoutTypes, PayoutList](dist/types/payout.d.ts)

**List all Payouts `Client.payout.list(data: PayoutList)`** \
[PayoutList](dist/types/payout.d.ts)
</details>

---

# Contribute

Clone the Git repository and start building good stuff.

```bash
$ git clone git@github.com:Arkmind/stancer-api.git
$ cd stancer-api
$ npm install
```

When done create a pull request respecting git convention.

---

# Credits

- **[Stancer](https://www.stancer.com/)**
- **[Github](https://github.com/Arkmind/stancer-api)**
- **[Arkmind](https://github.com/Arkmind/)**
  
---

# License

**[MIT](https://github.com/Arkmind/stancer-api/LICENSE)**