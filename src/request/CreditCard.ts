import Client from "@/ressource/Client";
import { CreditCardCreate, CreditCardUpdate, CreditCard as CreditCardInterface } from "@/types/creditcard";

export class CreditCard {
  private client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  /**
   * Create a credit card
   * @param data CreditCardCreate
   * @returns Promise<CreditCard>
   */
  public async create(data: CreditCardCreate): Promise<CreditCardInterface> {
    try {
      const response = await this.client.post<CreditCardInterface>("/v1/cards", data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get a credit card
   * @param id string The ID of the card to retrieve (card_id) (prefixed by "card_") (e.g card_ub99idEIFcbK517ZrKBIrt4y)
   * @returns Promise<CreditCard>
   * @throws Error
   */
  public async get(id: string): Promise<CreditCardInterface> {
    try {
      const response = await this.client.get<CreditCardInterface>(`/v1/cards/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update a credit card
   * @param id string The ID of the card to retrieve (card_id) (prefixed by "card_") (e.g card_ub99idEIFcbK517ZrKBIrt4y)
   * @param data CreditCardUpdate
   * @returns Promise<CreditCard>
   * @throws Error
   */
  public async update(id: string, data: CreditCardUpdate): Promise<CreditCardInterface> {
    try {
      const response = await this.client.put<CreditCardInterface>(`/v1/cards/${id}`, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Delete a credit card
   * @param id string The ID of the card to retrieve (card_id) (prefixed by "card_") (e.g card_ub99idEIFcbK517ZrKBIrt4y)
   * @returns Promise<CreditCard>
   * @throws Error
   */
  public async delete(id: string): Promise<CreditCardInterface> {
    try {
      const response = await this.client.delete<CreditCardInterface>(`/v1/cards/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
