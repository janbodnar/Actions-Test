Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return new Response("Bun!");
    }
    if (url.pathname === "/greet") {
      return new Response("Hello, world!");
    }
    return new Response("Not Found", { status: 404 });
  },
});

console.log("Listening on http://localhost:3000 ...");