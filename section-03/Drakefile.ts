import { desc, run, task, sh } from "https://deno.land/x/drake@v1.2.6/mod.ts";

desc("Minimal Drake task");
task("hello", [], async function() {
  console.log("Hello from Drake!");
  await sh("deno run --allow-env main.ts");
  await sh("echo Hello World");
});

run()