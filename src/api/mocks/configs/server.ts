import { setupServer } from "msw/node";
import { handlers } from "../configs/handlers";

export const server = setupServer(...handlers);
