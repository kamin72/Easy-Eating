// import { useState, useEffect } from "react";

// export default function DataList() {
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     async function fetchPets() {
//       const res = await fetch("/api/getAllData");
//       if (res.ok) {
//         const data = await res.json();
//         setPets(data);
//       }
//     }
//     fetchPets();
//   }, []);

//   return (
//     <div>
//       <ul>
//         {pets.map((data, index) => (
//           <li key={index}>
//             Name: {data.name} - OWner: {data.owner}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";

export default function DataList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      const res = await fetch("/api/getAllData");
      if (res.ok) {
        const data = await res.json();
        setPets(data);
      }
    }
    fetchPets();
  }, []);
  console.log(pets);

  return (
    <div>
      <ul>
        {pets.map((data, index) => (
          <li key={index}>
            Name: {data.name} - Owner: {data.owner}
          </li>
        ))}
      </ul>
    </div>
  );
}
