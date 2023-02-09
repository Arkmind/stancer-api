export class ErrorManager {
  constructor() {}

  public async handleError(response: Response) {
    const json = await response.json();
    const status = response.status;

    throw {
      response,
      json,
      status,
    };
  }
}
