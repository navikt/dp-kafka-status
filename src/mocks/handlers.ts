import { rest } from "msw";

export const handlers = [
  rest.get("http://dp-kafka-rest/v3/clusters/", (req, res, ctx) =>
    res(ctx.json({})),
  ),
];
