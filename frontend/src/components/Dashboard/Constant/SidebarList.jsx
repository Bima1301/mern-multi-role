import {
  BookOpenIcon,
  Cog8ToothIcon,
  FilmIcon,
  HomeIcon,
  NewspaperIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

// ICON REF https://heroicons.com/
export const sidebarItems = [
  {
    title: "MENU",
    items: [
      {
        name: "Home",
        pageName: "dashboard",
        icon: HomeIcon,
        link: "/dashboard",
      },
      {
        name: "About",
        pageName: "about",
        icon: NewspaperIcon,
        link: "/dashboard/about",
      },
      {
        name: "PPID",
        pageName: "PPID (Pejabat Pengelola Informasi dan Dokumentasi)",
        icon: BookOpenIcon,
        link: "/dashboard/ppid",
      },
      {
        name: "Galery",
        pageName: "Galery",
        icon: FilmIcon,
        link: "/dashboard/galery",
      },
    ],
  },
  //   {
  //     title: "OTHERS",
  //     items: [
  //       {
  //         name: "Config",
  //         pageName: "Config",
  //         icon: Cog8ToothIcon,
  //         link: "/dashboard/config",
  //       },
  //       {
  //         name: "Users",
  //         pageName: "Users",
  //         icon: UserIcon,
  //         link: "/dashboard/user",
  //       },
  //     ],
  //   },
];
