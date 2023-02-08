import { NodeEnvironment } from "./types/client";

export const getNodeEnvironment = (): NodeEnvironment => {
  return process.env.NODE_ENV === "production" ? "prod" : "test";
};
