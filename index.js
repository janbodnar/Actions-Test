Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") {
      return new Response("Bun!");
    }
    if (url.pathname === "/greet") {
      return new Response("Hello, world!");
    }
    
    if (url.pathname === '/today') {
      return new Response(`Today is ${new Date().toLocaleDateString()}`);
    }

    return new Response("Not Found", { status: 404 });
  },
});

console.log("Listening on http://localhost:3000 ...");