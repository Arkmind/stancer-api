import { Currency, PaymentResponse } from "./payment";

export interface Dispute {
  /**
   * Dispute's id String, fixed size = 29
   */
  id: string;
  /**
   * Related payment's id String, fixed size = 29
   */
  payment: string;
  /**
   * Disputed amount Int
   */
  amount?: number;
  /**
   * Currency of the disputed amount Enum EUR, USD, GPB
   */
  currency: Currency;
  /**
   * Response code description See Payment response codes
   */
  response: PaymentResponse;
  /**
   * The order_id you specified in your inital payment request String
   */
  order_id: string;
  /**
   * Creation's timestamp of the dispute Int
   */
  created: number;
  /**
   * Whatever if the refund is in live mode Boolean
   */
  live_mode: boolean;
}

export interface DisputeList {
  /**
   * Optional A Unix timestamp filtering disputes whom timestamp are equal to or greater Int
   */
  created?: number;
  /**
   * Optional An integer value limiting the number of objects to be returned Int, min = 1 max = 100, default = 10
   */
  limit?: number;
  /**
   * Optional An integer cursor you can use for pagination starting at index 0 Int, default = 0
   */
  start?: number;
}

export interface DisputeListResponse {
  /**
   * An array of dispute objects
   */
  disputes: Array<Dispute>;
  /**
   * Whatever if you are in live mode
   */
  live_mode: boolean;
  /**
   * Details of your request and pagination. If has_more is true, you will need to move the start cursor ahead to fetch more objects
   */
  range: {
    end: number;
    has_more: boolean;
    limit: number;
    start: number;
  };
}
