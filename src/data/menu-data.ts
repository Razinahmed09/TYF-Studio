import { IMenuDT } from "@/types/menu-d-t";

const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '#',
  },
  {
    id: 2,
    title: 'Workshop',
    link: '#',
  },
  {
    id: 3,
    title: 'Portfolio',
    link: '#',
  },
  {
    id: 4,
    title: 'About Us',
    link: '#',
  },
  {
    id: 5,
    title: 'Contact',
    link: '#',
  }
];

export default menu_data;

// Mobile menu data
export const mobile_menu_data: {
  id: number;
  title: string;
  link: string;
  dropdown_menus: { title: string; link: string }[];
}[] = [
  {
    id: 1,
    title: "Home",
    link: "#",
    dropdown_menus: [
      { title: "Main Home", link: "#" },
      { title: "Fashion Studio", link: "#" },
      { title: "Creative Agency", link: "#" },
      { title: "Digital Agency", link: "#" },
      { title: "Design Studio", link: "#" },
      { title: "Minimal Shop", link: "#" },
      { title: "Showcase Carousel", link: "#" },
      { title: "Interactive Links", link: "#" },
      { title: "Wrapper Slider", link: "#" },
      { title: "Showcase Parallax", link: "#" },
      { title: "Horizontal Layout", link: "#" },
    ],
  },
  {
    id: 2,
    title: "Pages",
    link: "#",
    dropdown_menus: [
      { title: "About Us", link: "#" },
      { title: "FAQ Page", link: "#" },
      { title: "Pricing", link: "#" },
      { title: "Team Page", link: "#" },
      { title: "Team Details", link: "#" },
      { title: "Register", link: "#" },
      { title: "Our Services", link: "#" },
      { title: "Login", link: "#" },
      { title: "Services Details", link: "#" },
      { title: "Error Page", link: "#" },
      { title: "Shop Page", link: "#" },
      { title: "Shop Details 1", link: "#" },
      { title: "Shop Details 2", link: "#" },
      { title: "My Account", link: "#" },
      { title: "Cart", link: "#" },
      { title: "Checkout", link: "#" },
      { title: "Wishlist", link: "#" },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    link: "#",
    dropdown_menus: [
      { title: "Standard", link: "#" },
      { title: "Interactive", link: "#" },
      { title: "Random", link: "#" },
      { title: "Showcase Parallax", link: "#" },
      { title: "Masonry Random", link: "#" },
      { title: "Vertical Carousel", link: "#" },
      { title: "Wrapper", link: "#" },
      { title: "Horizontal", link: "#" },
      { title: "Image Slider", link: "#" },
      { title: "Parallax Showcase", link: "#" },
      { title: "Perspective Slider", link: "#" },
      { title: "Two Columns", link: "#" },
      { title: "Three Columns", link: "#" },
      { title: "Three Columns Wide", link: "#" },
      { title: "Four Columns", link: "#" },
      { title: "Four Columns Wide", link: "#" },
      { title: "Creative", link: "#" },
      { title: "Images Small", link: "#" },
      { title: "Sliding", link: "#" },
      { title: "Image Comparison", link: "#" },
      { title: "Video", link: "#" },
      { title: "Custom Light", link: "#" },
      { title: "Gallery", link: "#" },
      { title: "Mockups", link: "#" },
    ],
  },
  {
    id: 4,
    title: "Blog",
    link: "#",
    dropdown_menus: [
      { title: "Modern", link: "#" },
      { title: "Classic Sidebar", link: "#" },
      { title: "Minimal List", link: "#" },
      { title: "Post Single", link: "#" },
      { title: "Post With Sidebar", link: "3" },
    ],
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
    dropdown_menus: [
      { title: "Contact", link: "#" },
      { title: "Get In Touch", link: "#" },
    ],
  },
];
