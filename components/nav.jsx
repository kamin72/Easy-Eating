import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Nav() {
  const [memberData, setMemberData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storage = localStorage.getItem("loggedInfo");
    if (storage) {
      setMemberData(JSON.parse(storage));
    } else {
      return setMemberData(false);
    }
  }, []);

  function LoggedOut() {
    localStorage.removeItem("loggedInfo");
    router.push("/");
  }

  return (
    <nav className="bg-blue-700 h-[50px] text-white">
      {!memberData ? (
        <button className="float-right pt-2 pr-4 font-bold">Log in</button>
      ) : (
        <button className="float-right pt-2 pr-4 font-bold" onClick={LoggedOut}>
          {memberData.account}您好，登出
        </button>
      )}
    </nav>
  );
}
