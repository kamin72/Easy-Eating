import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  const { petName, ownerName } = request.body;
  if (!petName || !ownerName) {
    throw new Error(
      `Invalid data: Pet name and owner name are required for all entries`
    );
  }

  try {
    await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;

    return response.status(200).json({ message: "Pets added successfully" });
  } catch (error) {
    console.error("Error in pet handler:", error);
    return response
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
}
