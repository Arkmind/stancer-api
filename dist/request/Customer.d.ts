import { Client } from "@/ressource/Client";
import { CustomerCreate, CustomerUpdate, Customer as CustomerInterface } from "@/types/customer";
export declare class Customer {
    private client;
    constructor(client: Client);
    create(data: CustomerCreate): Promise<CustomerInterface>;
    /**
     * Get a customer
     * @param id string The ID of the payment to retrieve (customer_id) (prefixed by "cust_") (e.g cust_SKMLflt8NBATuiUzgvTYqsw5)
     * @returns Promise<Customer>
     */
    get(id: string): Promise<CustomerInterface>;
    /**
     * Update a customer
     * @param id string The ID of the payment to retrieve (customer_id) (prefixed by "cust_") (e.g cust_SKMLflt8NBATuiUzgvTYqsw5)
     * @param data CustomerUpdate
     * @returns Promise<Customer>
     */
    update(id: string, data: CustomerUpdate): Promise<CustomerInterface>;
    /**
     * Delete a customer
     * @param id string The ID of the payment to retrieve (customer_id) (prefixed by "cust_") (e.g cust_SKMLflt8NBATuiUzgvTYqsw5)
     * @returns Promise<Customer>
     */
    delete(id: string): Promise<CustomerInterface>;
}
