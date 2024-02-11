import { html } from "@elysiajs/html";
import { Elysia } from "elysia";

// this will be a database
let counter: number = 0;

type CounterButtonProps = {
  url: string;
  target: string;
  icon: string;
};

const CounterButton = ({ url, target, icon }: CounterButtonProps) => (
  <button
    class={"p-5 rounded bg-gray-300"}
    hx-post={url}
    hx-swap="outerHTML"
    hx-target={target}
  >
    {icon}
  </button>
);

const app = new Elysia()
  .use(html())
  .get("/", () => (
    <html lang="en">
      <head>
        <title>Hello World</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          src="https://unpkg.com/htmx.org@1.9.10"
          integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
          crossorigin="anonymous"
        ></script>
      </head>
      <body>
        <div class={"container mx-auto"}>
          <h1 class={"text-3xl font-bold underline"}>Tater Tot Academy</h1>
          <div class={"mt-10 flex gap-5 items-center"}>
            <CounterButton url="/dec" target="#counter" icon="-" />
            <div id={"counter"}>{counter}</div>
            <CounterButton url="/inc" target="#counter" icon="+" />
          </div>
        </div>
      </body>
    </html>
  ))
  .post("/inc", () => {
    counter++;

    return <div id={"counter"}>{counter}</div>;
  })
  .post("/dec", () => {
    counter--;

    return <div id={"counter"}>{counter}</div>;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
