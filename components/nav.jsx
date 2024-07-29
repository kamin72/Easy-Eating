import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [memberData, setMemberData] = useState(null);

  useEffect(() => {
    const storage = localStorage.getItem("loggedInfo");
    if (storage) {
      setMemberData(true);
    } else {
      return setMemberData(false);
    }
  }, []);

  return (
    <nav className="bg-blue-700 h-[50px] text-white">
      <Link href="#" className="float-right pt-2 pr-4 font-bold">
        Log in
      </Link>
    </nav>
  );
}
