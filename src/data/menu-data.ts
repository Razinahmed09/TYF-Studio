import { IMenuDT } from "@/types/menu-d-t";

const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
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
    link: "/",
    dropdown_menus: [
      { title: "Main Home", link: "/" },
      { title: "Fashion Studio", link: "/home-2" },
      { title: "Creative Agency", link: "/home-3" },
      { title: "Digital Agency", link: "/home-4" },
      { title: "Design Studio", link: "/home-5" },
      { title: "Minimal Shop", link: "/home-6" },
      { title: "Showcase Carousel", link: "/home-8" },
      { title: "Interactive Links", link: "/home-9" },
      { title: "Wrapper Slider", link: "/home-10" },
      { title: "Showcase Parallax", link: "/home-11" },
      { title: "Horizontal Layout", link: "/home-12" },
    ],
  },
  {
    id: 2,
    title: "Pages",
    link: "/pages",
    dropdown_menus: [
      { title: "About Us", link: "/about-us" },
      { title: "FAQ Page", link: "/faq" },
      { title: "Pricing", link: "/pricing" },
      { title: "Team Page", link: "/team" },
      { title: "Team Details", link: "/team-details/1" },
      { title: "Register", link: "/register" },
      { title: "Our Services", link: "/service" },
      { title: "Login", link: "/login" },
      { title: "Services Details", link: "/service-details" },
      { title: "Error Page", link: "/error" },
      { title: "Shop Page", link: "/shop" },
      { title: "Shop Details 1", link: "/shop-details/1" },
      { title: "Shop Details 2", link: "/shop-details/2" },
      { title: "My Account", link: "/account" },
      { title: "Cart", link: "/cart" },
      { title: "Checkout", link: "/checkout" },
      { title: "Wishlist", link: "/wishlist" },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    link: "/portfolio-standard",
    dropdown_menus: [
      { title: "Standard", link: "/portfolio-standard" },
      { title: "Interactive", link: "/portfolio-interactive" },
      { title: "Random", link: "/portfolio-random" },
      { title: "Showcase Parallax", link: "/portfolio-parallax" },
      { title: "Masonry Random", link: "/portfolio-masonry" },
      { title: "Vertical Carousel", link: "/portfolio-vertical" },
      { title: "Wrapper", link: "/portfolio-wrapper" },
      { title: "Horizontal", link: "/portfolio-showcase" },
      { title: "Image Slider", link: "/portfolio-slider" },
      { title: "Parallax Showcase", link: "/portfolio-showcase-parallax" },
      { title: "Perspective Slider", link: "/portfolio-perspective" },
      { title: "Two Columns", link: "/portfolio-grid-col-2" },
      { title: "Three Columns", link: "/portfolio-grid-col-3" },
      { title: "Three Columns Wide", link: "/portfolio-grid-col-3-fullwidth" },
      { title: "Four Columns", link: "/portfolio-grid-col-4" },
      { title: "Four Columns Wide", link: "/portfolio-grid-col-4-fullwidth" },
      { title: "Creative", link: "/portfolio-showcase-details-2" },
      { title: "Images Small", link: "/portfolio-details-1" },
      { title: "Sliding", link: "/portfolio-details-2" },
      { title: "Image Comparison", link: "/portfolio-details-comparison" },
      { title: "Video", link: "/portfolio-details-video" },
      { title: "Custom Light", link: "/portfolio-custom-light" },
      { title: "Gallery", link: "/portfolio-showcase-details" },
      { title: "Mockups", link: "/portfolio-details-3" },
    ],
  },
  {
    id: 4,
    title: "Blog",
    link: "/blog-modern",
    dropdown_menus: [
      { title: "Modern", link: "/blog-modern" },
      { title: "Classic Sidebar", link: "/blog-classic" },
      { title: "Minimal List", link: "/blog-list" },
      { title: "Post Single", link: "/blog-details/1" },
      { title: "Post With Sidebar", link: "/blog-details/2" },
    ],
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
    dropdown_menus: [
      { title: "Contact", link: "/contact" },
      { title: "Get In Touch", link: "/contact-2" },
    ],
  },
];
