import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-blue-700 h-[50px] text-white">
      <Link href="#" className="float-right pt-2 pr-4 font-bold">
        Log in
      </Link>
    </nav>
  );
}
