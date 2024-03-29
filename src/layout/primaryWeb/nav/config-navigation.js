// ----------------------------------------------------------------------

// const navConfig = [
//   // DIGITALMENU MASTER
//   // ----------------------------------------------------------------------
//   {
//     subheader: "Digital Menu",
//     items: [
//       {
//         title: "dashboard",
//         path: (user) => PATH_DASHBOARD.general.app,
//         icon: ICONS.dashboard,
//         isShow: () => isShowMenu(1),
//         children: false,
//       },
//     ],
//   },
// ]
// const token = localStorage && localStorage?.getItem("token");

const navConfig = [
  {
    title: "Home",
    path: "/",
    token: (token) => true,
  },
  {
    title: "About us",
    path: "/aboutus",
    token: (token) => true,
  },

  // {
  //   title: "Dashboard",
  //   path: "/dashboard/customer/job_post",
  //   token: (token) => token,
  // },
  {
    title: "Testimonials",
    path: "/testimonial/testimonials",
    token: (token) => true,
  },
  {
    title: "FAQ",
    path: "/faqs",
    token: (token) => true,
  },
  {
    title: "Blogs",
    path: "/blogs",
    token: (token) => true,
  },
  // {
  //   title: "Contact Us",
  //   path: "/contact_us",
  //   token: (token) => true,
  // },
  // {
  //   title: "
  //   path: "/dashboard/customer/profile",
  //   token: (token) => token,
  // },
];

export default navConfig;
