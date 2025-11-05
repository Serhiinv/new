import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const { slug } = req.query;

    if (!slug || typeof slug !== "string") {
      return res.status(400).json({ message: "Slug is required" });
    }

    // Revalidate the specific page
    await res.revalidate(`/${slug}`);

    return res.json({ revalidated: true, slug });
  } catch (err) {
    return res.status(500).json({ message: "Error revalidating", error: err });
  }
}

