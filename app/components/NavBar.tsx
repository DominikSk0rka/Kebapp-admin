import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* ICONS AND USER */}
      <div className="flex items-center gap-3 justify-end w-full">
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Kebapp</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src="/profile.png"
          alt=""
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
