import home1 from "@/assets/img/menu/home-1.jpg";
import home2 from "@/assets/img/menu/home-2.jpg";
import home3 from "@/assets/img/menu/home-3.jpg";
import home4 from "@/assets/img/menu/home-4.jpg";
import home5 from "@/assets/img/menu/home-5.jpg";

export interface MenuItem {
  title: string;
  link?: string;
  type?: string;
  isActive?: boolean;
  img?: string;
  btn?: string;
  homes?: MenuItem[];
  children?: MenuItem[];
}

export const headerMenus: MenuItem[] = [
  //   {
  //     title: "Home",
  //     link: "#",
  //     type: "mega",
  //     homes: [
  //       { title: "Home 01", link: "/", img: home1, btn: "View Page" },
  //       { title: "Home 02", link: "/home-2", img: home2, btn: "View Page" },
  //       { title: "Home 03", link: "home-3", img: home3, btn: "View Demo" },
  //       { title: "Coming Soon", link: "#", img: home4, btn: "Coming Soon" },
  //       { title: "Coming Soon", link: "#", img: home5, btn: "Coming Soon" },
  //     ],
  //   },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Services",
    link: "#",
    children: [
      { title: "Service", link: "/service" },
      { title: "Services Details", link: "/service/details" },
    ],
  },
  {
    title: "Pages",
    link: "#",
    children: [
      { title: "Team", link: "/team" },
      { title: "Team Details", link: "/team/details" },
      { title: "Price", link: "/price" },
      { title: "Projects", link: "/project" },
      { title: "Project Details", link: "/project/details" },
      { title: "Faq", link: "/faq" },
    ],
  },
  {
    title: "Blog",
    link: "#",
    children: [
      { title: "Blog Grid", link: "/blog/blog-grid" },
      { title: "Blog List", link: "/blog/blog-list" },
      { title: "Blog Details", link: "/blog/details" },
    ],
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
