import express, { Request, Response } from "express";
const app = express();
app.use(express.json());
const port = 3010;

app.get("/health", (req: Request, res: Response) => {
    res.json({ message: "Healthy" });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
