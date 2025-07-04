import { test, expect } from "bun:test";

const url = "http://localhost:3000";

test("GET /", async () => {
  const res = await fetch(url);
  expect(res.status).toBe(200);
  const text = await res.text();
  expect(text).toBe("Bun!");
});

test("GET /greet", async () => {
  const res = await fetch(`${url}/greet`);
  expect(res.status).toBe(200);
  const text = await res.text();
  expect(text).toBe("Hello, world!");
});
