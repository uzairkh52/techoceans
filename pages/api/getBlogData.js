import { google } from 'googleapis';
import path from 'path';

  // Your Google Apps Script Web App URL
  const apiUrl = process.env.GOOGLE_SHEET_API_URL_GET_BLOG;
  
// Path to your service account credentials

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Initialize Google Sheets API client
      const auth = new google.auth.GoogleAuth({
        keyFile: KEY_FILE_PATH,
        scopes: SCOPES,
      });

      const sheets = google.sheets({ version: 'v4', auth });

      // Your Google Sheet ID (replace with your actual sheet ID)
      const spreadsheetId = 'YOUR_GOOGLE_SHEET_ID'; // Replace with your Google Sheet ID
      const range = 'Sheet1!A2:I100'; // The range of data (adjust column letters as needed)

      // Fetch the data from Google Sheets
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });

      const rows = response.data.values;

      if (rows.length) {
        // Map through rows and create blog post objects
        const blogData = rows.map(row => ({
          action: row[0],             // Action (Column A)
          title: row[1],              // Title (Column B)
          author: row[2],             // Author (Column C)
          content: row[3],            // Content (Column D)
          tags: row[4],               // Tags (Column E)
          category: row[5],           // Category (Column F)
          publicationDate: row[6],    // Publication Date (Column G)
          status: row[7],             // Status (Column H)
          featuredImage: row[8],      // Featured Image URL (Column I)
          slug: convertToSlug(row[1]), // Convert title to slug
        }));

        res.status(200).json({ success: true, data: blogData });
      } else {
        res.status(404).json({ success: false, message: 'No data found.' });
      }
    } catch (error) {
      console.error('Error fetching Google Sheets data:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch data.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed.' });
  }
}

// Utility function to convert title to slug
function convertToSlug(title) {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}
