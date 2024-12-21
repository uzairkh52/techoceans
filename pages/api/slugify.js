// utils/slugify.js

export function createSlug(title) {
   if (typeof title !== 'string') {
      return ''; // Return an empty string if the input is not a string
    }
   return title
     .toLowerCase()                          // Convert to lowercase
     .trim()                                  // Remove leading/trailing spaces
     .replace(/[^\w\s-]/g, '')                // Remove special characters
     .replace(/\s+/g, '-')                    // Replace spaces with hyphens
     .replace(/--+/g, '-');                   // Replace multiple hyphens with a single one
 }
 