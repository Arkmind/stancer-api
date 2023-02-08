import { Client } from "@/ressource/Client";
import { CreditCardCreate, CreditCardUpdate, CreditCard as CreditCardInterface } from "@/types/creditcard";
export declare class CreditCard {
    private client;
    constructor(client: Client);
    /**
     * Create a credit card
     * @param data CreditCardCreate
     * @returns Promise<CreditCard>
     */
    create(data: CreditCardCreate): Promise<CreditCardInterface>;
    /**
     * Get a credit card
     * @param id string The ID of the card to retrieve (card_id) (prefixed by "card_") (e.g card_ub99idEIFcbK517ZrKBIrt4y)
     * @returns Promise<CreditCard>
     * @throws Error
     */
    get(id: string): Promise<CreditCardInterface>;
    /**
     * Update a credit card
     * @param id string The ID of the card to retrieve (card_id) (prefixed by "card_") (e.g card_ub99idEIFcbK517ZrKBIrt4y)
     * @param data CreditCardUpdate
     * @returns Promise<CreditCard>
     * @throws Error
     */
    update(id: string, data: CreditCardUpdate): Promise<CreditCardInterface>;
    /**
     * Delete a credit card
     * @param id string The ID of the card to retrieve (card_id) (prefixed by "card_") (e.g card_ub99idEIFcbK517ZrKBIrt4y)
     * @returns Promise<CreditCard>
     * @throws Error
     */
    delete(id: string): Promise<CreditCardInterface>;
}
