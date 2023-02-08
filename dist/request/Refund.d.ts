import { Client } from "@/ressource/Client";
import { RefundCreate, Refund as RefundInterface } from "@/types/refund";
export declare class Refund {
    private client;
    constructor(client: Client);
    /**
     * Create a refund
     * @param data RefundCreate
     * @returns Promise<Refund>
     * @throws Error
     */
    create(data: RefundCreate): Promise<RefundInterface>;
    /**
     * Get a refund
     * @param id string The ID of the payment to retrieve (refund_id) (prefixed by "refd_") (e.g refd_UB99idEIFcbK517ZrKBIrt4y)
     * @returns Promise<Refund>
     * @throws Error
     */
    get(id: string): Promise<RefundInterface>;
}
