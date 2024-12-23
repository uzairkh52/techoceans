export default async function handler(req, res) {
  const { slug } = req.query;



  const googleScriptUrl =
    "https://script.google.com/macros/s/AKfycbz17n6Sop5r_wyCyvmC_pk8Gf7TK43SliPOROB9mxfaGvjFL1WmmHe2g4IIPwfgR0ei_A/exec";

  try {
    const url = slug ? `${googleScriptUrl}?slug=${slug}` : googleScriptUrl;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.success) {
      return res.status(404).json({ success: false, message: data.message });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error("Error in handler:", error.message); // Log errors
    res.status(500).json({ success: false, message: "Error fetching blogs.", error: error.message });
  }
}
