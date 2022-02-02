const Koa = require("koa");
const app = new Koa();
console.log("====", process.env.NODE_ENV);
app.use((ctx) => {
  ctx.body = "hello1 Koa";
});
app.listen(3000, () => {
  console.log("server is runing http://localhost:3000");
});
