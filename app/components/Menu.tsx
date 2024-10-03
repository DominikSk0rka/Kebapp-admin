import Image from "next/image";
import Link from "next/link";

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
  {
    title: "LOGOUT",
    items: [
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
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
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={25} height={25} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
