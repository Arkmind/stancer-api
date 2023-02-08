import Client from "@/ressource/Client";
import { PaymentCreate, Payment as PaymentInterface } from "@/types/payment";

export default class Payment {
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
      const response = await this.client.post<PaymentInterface>("/v1/payment", data);
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
      const response = await this.client.get<PaymentInterface>(`/v1/payment/${id}`);
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
      const response = await this.client.put<PaymentInterface>(`/v1/payment/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete a payment
   * @param id string The ID of the payment to retrieve (payment_id) (prefixed by "paym_") (e.g paym_UB99idEIFcbK517ZrKBIrt4y)
   * @returns Promise<Payment>
   * @throws Error
   */
  public async delete(id: string): Promise<PaymentInterface> {
    try {
      const response = await this.client.delete<PaymentInterface>(`/v1/payment/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
