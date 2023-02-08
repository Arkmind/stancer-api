export enum AuthStatus {
  /**
   * Customer was redirected to his bank for authentication
   */
  attempted = "attempted",
  /**
   * Customer strong authentication is possible
   */
  available = "available",
  /**
   * Authentication declined
   */
  declined = "declined",
  /**
   * Authentication sessions expired after 6 hours
   */
  expired = "expired",
  /**
   * Authentication failed
   */
  failed = "failed",
  /**
   * A strong authentication is awaiting for more information
   */
  requested = "requested",
  /**
   * Authentication succeeded, processing can continue
   */
  success = "success",
  /**
   * The strong authentication is not available for this payment method
   */
  unavailable = "unavailable",
}

export enum AuthAdditionalStatus {
  /**
   * The merchant asked for a strong authentication
   */
  request = "request",
}

export interface Auth {
  /**
   * An HTTPS URL where you will redirect your customer to his bank for authentication String, max = 2048 Given by the API
   */
  redirect_url: string;
  /**
   * An HTTPS URL to redirect back your customer after the bank authentication String, max = 2048
   */
  return_url: string;
  /**
   * The status of the payment authentication See authenticated payment status codes
   */
  status: AuthStatus | AuthAdditionalStatus;
}
