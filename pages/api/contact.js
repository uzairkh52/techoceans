export default async function handler(req, res) {
   if (req.method === "POST") {
     const { name, email, message } = req.body;
 
     const googleScriptURL = "https://script.google.com/macros/s/AKfycbzhKGhWV7UVsjGHMLQrEA90-3g4YnmWz546EN4X2flv333H2C2aa61D1L8nQepJusNW0A/exec";
 
     try {
       const response = await fetch(googleScriptURL, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({ name, email, message }),
       });
 
       if (response.ok) {
         res.status(200).json({ success: true, message: "Data saved successfully!" });
       } else {
         const errorText = await response.text();
         res.status(500).json({ success: false, message: `Failed to save data: ${errorText}` });
       }
     } catch (error) {
       res.status(500).json({ success: false, message: `Server error: ${error.message}` });
     }
   } else {
     res.status(405).json({ success: false, message: "Method not allowed." });
   }
 }