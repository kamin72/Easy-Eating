import Link from "next/link";
import GoogleLogin from "./googleLogin";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginForm() {
  const router = useRouter();
  const [account, setAccount] = useState("aaaaaa");
  const [psw, setPsw] = useState("111111");
  // const [error, setError] = useState("");

  function LoggedIn() {
    if (account == "aaaaaa" && psw == "111111") {
      localStorage.setItem("loggedInfo", JSON.stringify({ account, psw }));
      router.push("/mainPage");
    } else {
      // setError("You have an error during logging in");
      alert("Invalid account or password");
    }
  }

  return (
    <>
      <div className="border-2 flex flex-col w-[90%] m-auto py-[20px] px-[10px] sm:w-[50%]">
        <label className="font-bold">Account</label>
        <input
          type="text"
          defaultValue={account}
          className="bg-slate-100  my-[10px] p-1"></input>
        <label className="mt-[10px] font-bold">Password</label>
        <input
          type="password"
          defaultValue={psw}
          className="bg-slate-100 my-[10px] p-1"></input>
        <div className="text-center py-[20px]">
          <button
            type="button"
            className="bg-sky-950 text-white w-[25%] mx-[20px] p-1 hover:bg-sky-500"
            onClick={LoggedIn}>
            Log in
          </button>
          <button className="bg-sky-950 text-white w-[25%] p-1 hover:bg-sky-500">
            Sign up
          </button>
        </div>
        <GoogleLogin></GoogleLogin>
      </div>
    </>
  );
}
