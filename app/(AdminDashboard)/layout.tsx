import Image from "next/image";
import Link from "next/link";

import Menu from "../components/Menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/admin"
          className=" items-center justify-center lg:justify-start gap-2 "
        >
          <Image
            src="/logo.png"
            className="rounded-xl transition hover:scale-105"
            alt="logo"
            width={256}
            height={256}
          />
        </Link>
        {/* ---------------------------------------------------- */}
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        {children}
      </div>
    </div>
  );
}
