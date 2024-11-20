"use client";
import Image from "next/image";
import Link from "next/link";
import Cookies from "js-cookie"; // Import js-cookie
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/kebabmap.png",
        label: "Mapa kebabów",
        href: "/admin/map",
      },
      {
        icon: "/kebab.png",
        label: "Dodaj kebaba",
        href: "/admin/add",
      },
      {
        icon: "/manage.png",
        label: "Zarządzaj kebabami",
        href: "/admin/manage",
      },
      {
        icon: "/logs.png",
        label: "Logi",
        href: "/admin/logs",
      },
    ],
  },
];

const Menu = () => {
  const router = useRouter();
  const handleLogout = async () => {
    const token = Cookies.get("token");

    try {
      const response = await fetch("https://kebapp.bity24h.pl/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      Cookies.remove("token");
      localStorage.removeItem("token");
      console.log("Wylogowano pomyślnie");
      toast.success("Wylogowano");
      router.refresh();
    } catch (error) {
      console.error("Błąd w wylogowaniu", error);
    }
  };

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md "
                >
                  <Image src={item.icon} alt="" width={25} height={25} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
      <div>
        <h1 className="hidden text-md lg:block text-gray-400 font-light my-4">
          LOGOUT
        </h1>
        <div
          className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md cursor-pointer"
          onClick={handleLogout}
        >
          <Image src="/logout.png" alt="" width={25} height={25} />
          <p className="hidden lg:block">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
