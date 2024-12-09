import { generateOpenApiDocument } from "trpc-openapi";

import { appRouter } from "./routers";

// Generate OpenAPI schema document
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "Kepakaran API",
  description: "Kepakaran API Documentation for the Kepakaran App",
  version: "1.0.0",
  baseUrl: `${process.env.APP_URL}/api/v1`,
  tags: [],
});
