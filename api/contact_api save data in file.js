import fs from 'fs';
import path from 'path';

export default function contact_api(req, res) {
  if (req.method === 'POST') {
    // Path to the data file
    const filePath = path.join(process.cwd(), 'data', 'data.js');

    // Read existing data from the file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    let existingData = eval(fileContent.replace('export default', '').trim());

    // Add new data from the form
    const newPost = req.body;

    if (!newPost || !newPost.title || !newPost.content) {
      return res.status(400).json({ message: 'Title and content are required.' });
    }

    existingData.push(newPost);

    // Save the updated data back to the file
    const updatedContent = `const posts = ${JSON.stringify(existingData, null, 2)};\n\nexport default posts;`;
    fs.writeFileSync(filePath, updatedContent);

    res.status(200).json({ message: 'Data saved successfully!', data: newPost });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}