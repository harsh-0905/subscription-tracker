import { Client as workflowClient } from "@upstash/workflow"
import { QSTASH_TOKEN,QSTASH_URL } from "../config/env.js";
export const workflowClient = new workflowClient({
    baseUrl: QSTASH_URL,
    token: QSTASH_TOKEN,
});
