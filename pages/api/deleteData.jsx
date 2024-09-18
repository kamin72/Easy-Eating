import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  const { ownerName } = request.body;
  //   if (!petName || !ownerName) {
  //     throw new Error(
  //       `Invalid data: Pet name and owner name are required for all entries`
  //     );
  //   }

  try {
    const existData = await sql`SELECT * FROM pets WHERE owner = ${ownerName};`;
    if (existData.rowCount === 0) {
      return response.status(404).json({
        error: "No record found with the given owner name.",
      });
    }

    await sql`DELETE FROM pets WHERE owner = ${ownerName};`;

    return response
      .status(200)
      .json({ message: "Data has been deleted successfully" });
  } catch (error) {
    console.error("Error in pet handler:", error);
    return response
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
}
