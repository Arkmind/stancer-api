import { Client } from "@/ressource/Client";
import { CustomerCreate, CustomerUpdate, Customer as CustomerInterface } from "@/types/customer";

export class Customer {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  public async create(data: CustomerCreate): Promise<CustomerInterface> {
    try {
      const response = await this.client.post<CustomerInterface>("/v1/customers", data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a customer
   * @param id string The ID of the payment to retrieve (customer_id) (prefixed by "cust_") (e.g cust_SKMLflt8NBATuiUzgvTYqsw5)
   * @returns Promise<Customer>
   */
  public async get(id: string): Promise<CustomerInterface> {
    try {
      const response = await this.client.get<CustomerInterface>(`/v1/customers/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update a customer
   * @param id string The ID of the payment to retrieve (customer_id) (prefixed by "cust_") (e.g cust_SKMLflt8NBATuiUzgvTYqsw5)
   * @param data CustomerUpdate
   * @returns Promise<Customer>
   */
  public async update(id: string, data: CustomerUpdate): Promise<CustomerInterface> {
    try {
      const response = await this.client.patch<CustomerInterface>(`/v1/customers/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete a customer
   * @param id string The ID of the payment to retrieve (customer_id) (prefixed by "cust_") (e.g cust_SKMLflt8NBATuiUzgvTYqsw5)
   * @returns Promise<Customer>
   */
  public async delete(id: string): Promise<CustomerInterface> {
    try {
      const response = await this.client.delete<CustomerInterface>(`/v1/customers/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
