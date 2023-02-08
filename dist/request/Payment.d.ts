import { Client } from "@/ressource/Client";
import { PaymentCreate, Payment as PaymentInterface, PaymentList, Payments } from "@/types/payment";
export declare class Payment {
    private client;
    constructor(client: Client);
    /**
     * Create a payment
     * @param data PaymentCreate
     * @returns Promise<Payment>
     * @throws Error
     */
    create(data: PaymentCreate): Promise<PaymentInterface>;
    /**
     * Get a payment
     * @param id string The ID of the payment to retrieve (payment_id) (prefixed by "paym_") (e.g paym_UB99idEIFcbK517ZrKBIrt4y)
     * @returns Promise<Payment>
     * @throws Error
     */
    get(id: string): Promise<PaymentInterface>;
    /**
     * Update a payment
     * @param id string The ID of the payment to retrieve (payment_id) (prefixed by "paym_") (e.g paym_UB99idEIFcbK517ZrKBIrt4y)
     * @param data PaymentUpdate
     * @returns Promise<Payment>
     * @throws Error
     */
    update(id: string, data: PaymentCreate): Promise<PaymentInterface>;
    /**
     * List all payments
     * @param data PaymentList
     * @returns Promise<Payments>
     * @throws Error
     */
    list(data: PaymentList): Promise<Payments>;
}
