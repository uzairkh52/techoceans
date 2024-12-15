// File: /pages/api/submit.js
export default function handler(req, res) {
   if (req.method === "POST") {
     const { name, email } = req.body;
 
     // Validate request body
     if (!name || !email) {
       return res.status(400).json({ error: "Name and email are required" });
     }
 
     // Example response
     return res.status(200).json({ message: "Data received successfully", data: { name, email } });
   } else {
     res.setHeader("Allow", ["POST"]);
     return res.status(405).json({ error: `Method ${req.method} not allowed` });
   }
 }