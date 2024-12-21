import { BLOG_POST_API } from "../../api/api";

export default async function handler(req, res) {
  const { method, body } = req;

  // Your Google Apps Script Web App URL
  const apiUrl = BLOG_POST_API

  

  if (!apiUrl) {
    return res.status(500).json({
      success: false,
      message: "Google Sheets API URL is not configured.",
    });
  }

  try {
    switch (method) {
      case "POST": {
        // Forward the POST request to the Google Web App
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await response.json();
        return res.status(response.status).json(data);
      }
      default:
        return res.status(405).json({ success: false, message: "Method Not Allowed" });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while processing your request.",
      error: error.message,
    });
  }
}
