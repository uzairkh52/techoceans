// /pages/api/saveData.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const newData = req.body; // Data sent from the client

    // Define the path for the JSON file
    const filePath = path.join(process.cwd(), "data", "data.json");

    try {
      // Read the existing data if the file exists
      let existingData = [];
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, "utf8");
        existingData = JSON.parse(fileContents); // Parse JSON into an array
      }

      // Append the new data to the existing array
      existingData.push(newData);

      // Write the updated array back to the file
      fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), "utf8");

      res.status(200).json({ message: "Data saved successfully!", 
         // data: existingData
       });
    } catch (error) {
      console.error("Error saving data:", error);
      res.status(500).json({ error: "Failed to save data." });
    }
  } else {
    // Handle invalid HTTP methods
    res.setHeader("Allow", ["POST"]);
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}