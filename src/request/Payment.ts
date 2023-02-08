import { Client } from "@/ressource/Client";
import { PaymentCreate, Payment as PaymentInterface, PaymentList, Payments } from "@/types/payment";

export class Payment {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Create a payment
   * @param data PaymentCreate
   * @returns Promise<Payment>
   * @throws Error
   */
  public async create(data: PaymentCreate): Promise<PaymentInterface> {
    try {
      const response = await this.client.post<PaymentInterface>("/v1/checkout", data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a payment
   * @param id string The ID of the payment to retrieve (payment_id) (prefixed by "paym_") (e.g paym_UB99idEIFcbK517ZrKBIrt4y)
   * @returns Promise<Payment>
   * @throws Error
   */
  public async get(id: string): Promise<PaymentInterface> {
    try {
      const response = await this.client.get<PaymentInterface>(`/v1/checkout/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update a payment
   * @param id string The ID of the payment to retrieve (payment_id) (prefixed by "paym_") (e.g paym_UB99idEIFcbK517ZrKBIrt4y)
   * @param data PaymentUpdate
   * @returns Promise<Payment>
   * @throws Error
   */
  public async update(id: string, data: PaymentCreate): Promise<PaymentInterface> {
    try {
      const response = await this.client.patch<PaymentInterface>(`/v1/checkout/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * List all payments
   * @param data PaymentList
   * @returns Promise<Payments>
   * @throws Error
   */
  public async list(data: PaymentList): Promise<Payments> {
    try {
      const response = await this.client.get<Payments>("/v1/checkout", data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
