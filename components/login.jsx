export default function loginForm() {
  return (
    <>
      <div className="border-2 flex flex-col w-[90%] m-auto py-[20px] px-[10px] sm:w-[50%]">
        <label className="font-bold">Account</label>
        <input
          type="text"
          defaultValue="aaaaaa"
          className="bg-slate-100  my-[10px] p-1"></input>
        <label className="mt-[10px] font-bold">Password</label>
        <input
          type="password"
          defaultValue="111111"
          className="bg-slate-100 my-[10px] p-1"></input>
        <div className="text-center pt-[20px]">
          <button className="bg-sky-950 text-white w-[25%] mx-[20px] p-1 hover:bg-sky-500">
            Log in
          </button>
          <button className="bg-sky-950 text-white w-[25%] p-1 hover:bg-sky-500">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
