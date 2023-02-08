import { Auth } from "./auth";
import { CreditCard } from "./creditcard";
import { Customer } from "./customer";
import { Device } from "./device";
import { Refund } from "./refund";
import { SEPA } from "./sepa";

export interface Currency {
  EUR: "EUR";
  USD: "USD";
  GPB: "GPB";
}

export enum PaymentStatus {
  /**
   * The bank authorized the payment but the transaction will only be processed when the capture will be set to true
   */
  authorized = "authorized",
  /**
   * The amount of the payment have been credited to your account
   */
  captured = "captured",
  /**
   * The capture operation is being processed, the payment can not be cancelled anymore, refunds must wait the end of the capture process
   */
  capture_sent = "capture_sent",
  /**
   * The customer declined the payment after it have been captured on your account
   */
  disputed = "disputed",
  /**
   * The authorisation was not captured and expired after 7 days
   */
  expired = "expired",
  /**
   * The payment has failed, refer to the response field for more details
   */
  failed = "failed",
  /**
   * The payment has been refused
   */
  refused = "refused",
  /**
   * The bank authorized the payment, money will be processed within the day
   */
  to_capture = "to_capture",
  /**
   * Ask the authorization
   */
  authorize = "authorize",
  /**
   * Ask to authorize and capture the payment
   */
  capture = "capture",
}

export type PaymentCardResponseCode =
  /**
   * Successful approval/completion or that VIP PIN verification is valid
   */
  | "00"
  /**
   * Refer to card issuer
   */
  | "01"
  /**
   * Refer to card issuer, special condition
   */
  | "02"
  /**
   * Invalid merchant or service provider
   */
  | "03"
  /**
   * Pickup
   */
  | "04"
  /**
   * Do not honor
   */
  | "05"
  /**
   * General error
   */
  | "06"
  /**
   * Pickup card, special condition (other than lost/stolen card)
   */
  | "07"
  /**
   * Honor with identification
   */
  | "08"
  /**
   * Request in progress
   */
  | "09"
  /**
   * Partial approval
   */
  | "10"
  /**
   * VIP approval
   */
  | "11"
  /**
   * Invalid transaction
   */
  | "12"
  /**
   * Invalid amount (currency conversion field overflow) or amount exceeds maximum for card program
   */
  | "13"
  /**
   * Invalid account number (no such number)
   */
  | "14"
  /**
   * No such issuer
   */
  | "15"
  /**
   * Insufficient funds
   */
  | "16"
  /**
   * Customer cancellation
   */
  | "17"
  /**
   * Re-enter transaction
   */
  | "19"
  /**
   * Invalid response
   */
  | "20"
  /**
   * No action taken (unable to back out prior transaction)
   */
  | "21"
  /**
   * Suspected Malfunction
   */
  | "22"
  /**
   * Unable to locate record in file, or account number is missing from the inquiry
   */
  | "25"
  /**
   * File is temporarily unavailable
   */
  | "28"
  /**
   * Format error
   */
  | "30"
  /**
   * Merchant should retain card (card reported lost)
   */
  | "41"
  /**
   * Merchant should retain card (card reported stolen)
   */
  | "43"
  /**
   * Insufficient funds
   */
  | "51"
  /**
   * No checking account
   */
  | "52"
  /**
   * No savings account
   */
  | "53"
  /**
   * Expired card
   */
  | "54"
  /**
   * Incorrect PIN
   */
  | "55"
  /**
   * Transaction not permitted to cardholder
   */
  | "57"
  /**
   * Transaction not allowed at terminal
   */
  | "58"
  /**
   * Suspected fraud
   */
  | "59"
  /**
   * Activity amount limit exceeded
   */
  | "61"
  /**
   * Restricted card (for example, in country exclusion table)
   */
  | "62"
  /**
   * Security violation
   */
  | "63"
  /**
   * Activity count limit exceeded
   */
  | "65"
  /**
   * Response received too late
   */
  | "68"
  /**
   * Allowable number of PIN-entry tries exceeded
   */
  | "75"
  /**
   * Unable to locate previous message (no match on retrieval reference number)
   */
  | "76"
  /**
   * Previous message located for a repeat or reversal, but repeat or reversal data are inconsistent with original message
   */
  | "77"
  /**
   * ’Blocked, first used’—The transaction is from a new cardholder, and the card has not been properly unblocked.
   */
  | "78"
  /**
   * Visa transactions: credit issuer unavailable. Private label and check acceptance: Invalid date
   */
  | "80"
  /**
   * PIN cryptographic error found (error found by VIC security module during PIN decryption)
   */
  | "81"
  /**
   * Negative CAM, dCVV, iCVV, or CVV results
   */
  | "82"
  /**
   * Unable to verify PIN
   */
  | "83"
  /**
   * No reason to decline a request for account number verification, address verification, CVV2 verification; or a credit voucher or merchandise return
   */
  | "85"
  /**
   * Issuer unavailable or switch inoperative (STIP not applicable or available for this transaction)
   */
  | "91"
  /**
   * Destination cannot be found for routing
   */
  | "92"
  /**
   * Transaction cannot be completed, violation of law
   */
  | "93"
  /**
   * Duplicate transmission
   */
  | "94"
  /**
   * Reconcile error
   */
  | "95"
  /**
   * System malfunction, System malfunction or certain field error conditions
   */
  | "96"
  /**
   * Authentication Required, you must do a card inserted payment with PIN code
   */
  | "A0"
  /**
   * Authentication Required, you must do a 3-D Secure authentication
   */
  | "A1"
  /**
   * Surcharge amount not permitted on Visa cards (U.S. acquirers only)
   */
  | "B1"
  /**
   * Force STIP
   */
  | "N0"
  /**
   * Cash service not available
   */
  | "N3"
  /**
   * Cashback request exceeds issuer limit
   */
  | "N4"
  /**
   * Decline for CVV2 failure
   */
  | "N7"
  /**
   * Invalid biller information
   */
  | "P2"
  /**
   * PIN change/unblock request declined
   */
  | "P5"
  /**
   * Unsafe PIN
   */
  | "P6"
  /**
   * Card authentication failed
   */
  | "Q1"
  /**
   * Stop payment order
   */
  | "R0"
  /**
   * Revocation of authorization order
   */
  | "R1"
  /**
   * Revocation of all authorizations order
   */
  | "R3"
  /**
   * Forward to issuer
   */
  | "XA"
  /**
   * Forward to issuer
   */
  | "XD"
  /**
   * Offline-declined
   */
  | "Z1"
  /**
   * Unable to go online
   */
  | "Z3"
  /**
   * Refusal count exceeded for this card / sepa
   */
  | "7810"
  /**
   * Exceeded payment volume for this card / sepa
   */
  | "7811"
  /**
   * Stolen or lost card
   */
  | "7840"
  /**
   * Bank server unavailable
   */
  | "7898";

export type PaymentCardResponseDisputeCode =
  /**
   * National Transaction not authorized
   */
  | "14"
  /**
   * National Duplicate processing
   */
  | "42"
  /**
   * National Transaction disputed
   */
  | "45"
  /**
   * Visa Fraud; card Absent Environment
   */
  | "1040"
  /**
   * Visa Duplicate processing
   */
  | "1261"
  /**
   * Mastercard Requested/required authorization not obtained. Transaction not authorized
   */
  | "4808"
  /**
   * Mastercard Duplicate processing
   */
  | "4834"
  /**
   * Mastercard Fraudulent transaction; no cardholder authorization
   */
  | "4837"
  /**
   * Mastercard Cardholder Dispute Defective/Not as Described
   */
  | "4853"
  /**
   * Mastercard Cardholder does not recognize. Potential fraud
   */
  | "4863";

export enum AllowedMethods {
  card = "card",
  sepa = "sepa",
}

export interface Payment {
  /**
   * Payment's id String, fixed size = 29²
   */
  id: string;
  /**
   * Transaction amount (in cents) Int, min = 50
   */
  amount: number;
  /**
   * Processed Payment's currency Enum EUR, USD, GPB
   */
  currency: Currency;
  /**
   * The payment description String, min = 3, max = 64
   */
  description: string;
  /**
   * Your reference id String, min = 1, max = 36
   */
  order_id: string;
  /**
   * Your unicity key String, min = 1, max = 36
   */
  unique_id: string;
  /**
   * The list of payment methods allowed for this payment If null defaults to all methods available
   */
  methods_allowed?: Array<AllowedMethods> | null;
  /**
   * The payment method used to pay Enum card, sepa
   */
  method: AllowedMethods;
  /**
   * The card object or id If present, will perform a credit card payment
   */
  card?: CreditCard;
  /**
   * The sepa object or id If present, will perform a SEPA payment
   */
  sepa?: SEPA;
  /**
   * The customer object or id If present, will link payment to customer
   */
  customer: Customer;
  /**
   * Array of refund object Present if the payment was refunded
   */
  refunds: Array<Refund>;
  /**
   * The status of the payment See Payment status codes
   */
  status: PaymentStatus;
  /**
   * The response of the bank processing See Payment response codes
   */
  response: PaymentCardResponseCode | PaymentCardResponseDisputeCode;
  /**
   * An auth object See auth description
   */
  auth?: Auth;
  /**
   * The device object Required if auth is defined, see device description
   */
  device?: Device;
  /**
   * Capture immediately the payment Boolean, default True
   */
  capture: boolean;
  /**
   * The Unix timestamp representing creation date of the object in local time Int
   */
  created: number;
  /**
   * Timestamp of the delivery date of the funds traded by the bank Int
   */
  date_bank: number;
  /**
   * An HTTPS URL to redirect back your customer after processing the payment String, max = 2048
   */
  return_url: string;
  /**
   * Test or Live mode Boolean, default False
   */
  live_mode: boolean;
}

export interface PaymentCreate {
  amount: number;
  currency: Currency;
  description?: string;
  order_id?: string;
  unique_id?: string;
  methods_allowed?: Array<AllowedMethods>;
  card?: CreditCard;
  sepa?: SEPA;
  customer?: Customer;
}

export interface PaymentUpdate {
  amount?: number;
  currency?: Currency;
  order_id?: string;
  description?: string;
  return_url?: string;
  customer?: Customer;
  card?: CreditCard;
  sepa?: SEPA;
  device?: Device;
  status?: PaymentStatus;
  auth?: Auth;
}
