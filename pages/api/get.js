// /pages/api/getData.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Read the JSON file
      const filePath = path.join(process.cwd(), "data.json");
      console.log("filePath", filePath);
      
      const fileContents = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(fileContents);

      // Respond with the JSON data
      res.status(200).json(data);
    } catch (error) {
      console.error("Error reading JSON file:", error);
      res.status(500).json({ error: "Failed to read data." });
    }
  } else {
    // Handle invalid HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}