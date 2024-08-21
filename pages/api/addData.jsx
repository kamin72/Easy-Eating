import { sql } from "@vercel/postgres";

export default async function handler(request, response) {
  const data = [{ petName: "kamin", ownerName: "eric" }];

  try {
    for (const { petName, ownerName } of data) {
      if (!petName || !ownerName) {
        throw new Error(
          `Invalid data: Pet name and owner name are required for all entries`
        );
      }
      await sql`INSERT INTO Pets (Name, Owner) VALUES (${petName}, ${ownerName});`;
    }

    const pets = await sql`SELECT * FROM Pets;`;
    return response
      .status(200)
      .json({ message: "Pets added successfully", pets });
  } catch (error) {
    console.error("Error in pet handler:", error);
    return response
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
}
