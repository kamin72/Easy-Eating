import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    const pets = await sql`SELECT * FROM Pets;`;
    return res.status(200).json(pets.rows);
  } catch (error) {
    console.error("Error fetching pets:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching pets" });
  }
}
