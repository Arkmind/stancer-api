import { ErrorManager } from "@/error/ErrorManager";

export class HttpClient {
  private defaultHeaders: any;
  private baseUrl: string = "https://api.stancer.com/";
  private errorManager: ErrorManager = new ErrorManager();

  constructor() {}

  public async setDefaultHeaders(headers: any): Promise<any> {
    this.defaultHeaders = headers;
  }

  public async get<Response>(url: string, data?: any, headers?: any): Promise<Response> {
    const requestURL = `${new URL(url, this.baseUrl)}${data ? "?" : ""}${
      data ? new URLSearchParams(data).toString() : ""
    }`;

    const response = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
    });

    if (!response.ok) {
      await this.errorManager.handleError(response);
    }

    return response.json();
  }

  public async post<Response>(url: string, data: any, headers?: any): Promise<Response> {
    const response = await fetch(new URL(url, this.baseUrl).href, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
    });

    if (!response.ok) {
      await this.errorManager.handleError(response);
    }

    return response.json();
  }

  public async put<Response>(url: string, data: any, headers?: any): Promise<Response> {
    const response = await fetch(new URL(url, this.baseUrl).href, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
    });

    if (!response.ok) {
      await this.errorManager.handleError(response);
    }

    return response.json();
  }

  public async delete<Response>(url: string, headers?: any): Promise<Response> {
    const response = await fetch(new URL(url, this.baseUrl).href, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
    });

    if (!response.ok) {
      await this.errorManager.handleError(response);
    }

    return response.json();
  }

  public async patch<Response>(url: string, data: any, headers?: any): Promise<Response> {
    const response = await fetch(new URL(url, this.baseUrl).href, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        ...this.defaultHeaders,
        ...headers,
      },
    });

    if (!response.ok) {
      await this.errorManager.handleError(response);
    }

    return response.json();
  }

  public async getBasicAuthKey(username: string, password: string = "") {
    return `Basic ${Buffer.from(`${username}:${password}`).toString("base64")}`;
  }
}
