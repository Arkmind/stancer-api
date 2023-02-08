import { Currency } from "./payment";

export enum ExcludedPayoutCurrency {
  USD = "USD",
  GPB = "GPB",
}

export interface PayoutAmount {
  amount: number;
}

export enum PayoutStatusCode {
  /**
   *  The payout has been created and is awaiting for clearing
   */
  pending = "pending",
  /**
   *  The payout is ready to be transfered
   */
  to_pay = "to_pay",
  /**
   *  The payout has been sent out for processing
   */
  sent = "sent",
  /**
   *  The payout credit transfer has been processed: funds have been received by your bank
   */
  paid = "paid",
  /**
   *  The credit transfer has failed, please refer to you dashboard for more informations
   */
  failed = "failed",
}

export interface Payout {
  /**
   * Payout id String, fixed size = 29
   */
  id: string;
  /**
   * The total credit tranfer amount you will receive Int
   */
  amount: number;
  /**
   * Processed currency Enum EUR
   */
  currency: Exclude<Currency, ExcludedPayoutCurrency>;
  /**
   * The date the payment transactions were made  Timestamp, Int
   */
  date_paym?: number;
  /**
   * The date you will receive the credit tranfer  Timestamp, Int
   */
  date_bank?: number;
  /**
   * The fees you paid for processing the payments Int
   */
  fees?: number;
  /**
   * Payments processed the date_paym date Object
   */
  payments?: PayoutAmount;
  /**
   * Refunds processed the date_paym date Object
   */
  refunds?: PayoutAmount;
  /**
   * Disputes received the date_paym date Object
   */
  disputes?: PayoutAmount;
  /**
   * The statement description which will be displayed on your bank account String
   */
  statement_description: string;
  /**
   * Payout status See payout status codes
   */
  status: string;
  /**
   * Payout creation's timestamp Int
   */
  created: number;
}

export interface Payouts {
  live_mode: boolean;
  payouts: Array<Payout>;
  range: {
    created: number;
    end: number;
    has_more: boolean;
    limit: number;
    order_id: string;
    start: number;
    unique_id: string;
  };
}

export interface PayoutDetails {}

export interface PayoutList {
  /**
   * Optional A Unix timestamp filtering payments whom timestamps are equal to or greater Int
   */
  created?: number;
  /**
   * Optional An integer value limiting the number of objects to be returned Int, min = 1, max = 100, default = 10
   */
  limit?: number;
  /**
   * Optional An integer cursor you can use for pagination starting at index 0 Int, default = 0
   */
  start?: number;
}

export type PayoutTypes = "payments" | "refunds" | "disputes";
