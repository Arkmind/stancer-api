export interface Keys {
  pprod?: string | null;
  ptest?: string | null;
  sprod?: string | null;
  stest?: string | null;
}

export type NodeEnvironment = "prod" | "test";

export interface ClientOptions {
  fetch?: Function;
  environment?: NodeEnvironment;
}
