import { Currency } from "./payment";

export enum RefundStatus {
  /**
   * The refund has failed, refer to the response field for more details
   */
  failed = "failed",
  /**
   * When payment is disputed while trying to refund
   */
  not_honored = "not_honored",
  /**
   * The refund has been sent to the bank, awaiting an answer
   */
  refund_sent = "refund_sent",
  /**
   * The amount of the refund have been credited to your account
   */
  refunded = "refunded",
  /**
   * Refund will be processed within the day
   */
  to_refund = "to_refund",
}

export interface Refund {
  /**
   * Refund's id String, fixed size = 29
   */
  id: string;
  /**
   * Refunded payment id String, fixed size = 29
   */
  payment: string;
  /**
   * Amount to refund in cents, if omitted will refund the the whole payment Int, have to be =< to the original amount of the payment
   */
  amount: number;
  /**
   * Processed currency Enum EUR, USD, GPB
   */
  currency: Currency;
  /**
   * Refund status See refund status codes
   */
  status: RefundStatus;
  /**
   * Refund creation's timestamp Int
   */
  created: number;
  /**
   * Timestamp of the date when the API sent the refund request to the bank Int
   */
  date_refund: number;
  /**
   * Timestamp of the delivery date of the funds by the bank Int
   */
  date_bank: number;
  /**
   * Whatever if the refund is in live mode Boolean
   */
  live_mode: boolean;
}
