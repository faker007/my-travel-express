import express, { Request, Response, NextFunction } from "express";

const app = express();

const PORT = 8080;

app.get("/welcome", (req: Request, res: Response, next: NextFunction) => {
  res.send("welcome!");
});

app.listen(PORT, () => {
  console.log("Server listening on port: 1234");
});
