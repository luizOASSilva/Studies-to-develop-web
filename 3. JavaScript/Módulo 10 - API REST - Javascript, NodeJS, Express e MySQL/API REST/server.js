import app from "./app";

const port = 3300;

app.listen(port, () => {
  console.log(`listen in: http://localhost:${port}`);
});
