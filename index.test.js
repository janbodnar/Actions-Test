import { test, expect } from "bun:test";
import server from "./index.js";

test("GET /", async () => {
  const res = await server.fetch(new Request("http://localhost:3000/"));
  expect(res.status).toBe(200);
  const text = await res.text();
  expect(text).toBe("Bun!");
});

test("GET /greet", async () => {
  const res = await server.fetch(new Request("http://localhost:3000/greet"));
  expect(res.status).toBe(200);
  const text = await res.text();
  expect(text).toBe("Hello, world!");
});

test("GET /today", async () => {
  const res = await server.fetch(new Request("http://localhost:3000/today"));
  expect(res.status).toBe(200);
  const text = await res.text();
  expect(text).toContain("Today is");
});