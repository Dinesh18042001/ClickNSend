const navConfig = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About us",
    path: "/aboutus/aboutus",
  },
  {
    title: "Job",
    path: "#jobs",
  },
  {
    title: "Testimonials",
    path: "#tesimonials",
  },
  {
    title: "FAQ",
    path: "/faqs",
  },
  {
    title: "Blog",
    path: "/blog",
    children: [
      {
        items: [
          { title: "Blog", path: "/blog/blogs" },
          { title: "Blog Detail", path: "/blog/blogdetail" },
        ],
      },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];

export default navConfig;
