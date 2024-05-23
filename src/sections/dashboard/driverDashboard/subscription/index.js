// import { BannerSection } from "@/components/banner";
// import Iconify from "@/components/iconify";
// import SkeletonLoader from "@/components/skeleton";
// import axiosInstance from "@/utils/axios";
// import {
//   Box,
//   Breadcrumbs,
//   Button,
//   Card,
//   CardContent,
//   Container,
//   Grid,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
//   Stack,
//   Typography,
// } from "@mui/material";
// import Link from "next/link";
// import React, { useState } from "react";

// const SubscriptionsPage = () => {
//   const [hover, setHover] = useState(0);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);


//   const [paymentDetails, setPaymentDetails] = useState(null);
//   const [showPayment, setShowPayment] = useState(false);

//   // API FETCH LIST
//   const fetchdata = async (type = "driver") => {
//     setLoading(true);
//     const statusShowPlan = 1 ;
//     await axiosInstance
//       .get(`/api/auth/master/plan/list/${type}/${statusShowPlan}`)
//       .then((response) => {
//         if (response.status === 200) {
//           // setLoadingCard(false);
//           setData(response?.data.view_data);
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         // setLoadingCard(false);
//         console.log("error", error);
//       });
//   };

//   React.useEffect(() => {
//     fetchdata();
//   }, []);


//   const handleCheckout = async (elem) => {
//     setPaymentDetails(elem);
//     console.log("Selected Plan: ", elem);
//     setShowPayment(true);
//   }

//   console.log("datadata", data);

//   return (
//     <React.Fragment>
//      {!showPayment ? (
//         <Box sx={{ backgroundColor: "#f5f5f5", pb: 6 }}>
//           {loading ? (
//             <>
//               <Container>
//                 <SkeletonLoader />
//               </Container>
//             </>
//           ) : (
//       <>
//       <Box
//         sx={{
//           position: "relative",
//           overflow: "hidden",
//           width: "100%",
//           height: { lg: "550px", md: "550px", sm: "100%", xs: "100%" },
//           backgroundImage: `url("/banner/banner.png")`,
//           backgroundSize: "cover",
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "right center",
//           zIndex: 5,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           // "&::before": {
//           //   content: '""',
//           //   backgroundImage:
//           //     "linear-gradient(to left, rgba(77,39,63,0) 0%, #463b46 160%)",
//           //   position: "absolute",
//           //   top: 0,
//           //   left: 0,
//           //   bottom: 0,
//           //   right: 0,
//           //   zIndex: 7,
//           // },
//         }}
//       >
//         <Stack
//         className="Subscritption_box_stack_responsive"
//           sx={{ zIndex: 8, position: "absolute", left: "8em", top: "6em" }}
//         >
//           <Breadcrumbs aria-label="breadcrumb" sx={{ color: "common.white" }}>
//             <Box
//               component={Link}
//               sx={{ textDecoration: "none" }}
//               color="common.white"
//               href="/"
//             >
//               Home
//             </Box>
//             <Box
//               component={Link}
//               sx={{ textDecoration: "none" }}
//               color="common.white"
//               href="/dashboard/driver/active_jobs"
//             >
//               Dashboard
//             </Box>
//             <Typography
//               sx={{ textDecoration: "none", fontWeight: 600 }}
//               color="common.white"
//             >
//               Subscription
//             </Typography>
//           </Breadcrumbs>
//         </Stack>
//         <CardContent
//          className="dashboard_subscription_box_stack_responsive"
//           sx={{
//             paddingTop: {
//               lg: "6rem!important",
//               md: "6rem!important",
//               sm: "3rem!important",
//               xs: "3rem!important",
//             },
//             paddingBottom: {
//               lg: "4rem!important",
//               md: "4rem!important",
//               sm: "2rem!important",
//               xs: "2rem!important",
//             },
//             position: "relative",
//             zIndex: 9,
//           }}
//         >
//           {/* <CardContentOverlay> */}
//           <Stack spacing={4}>
//             <Typography
//               gutterBottom
//               fontSize={44}
//               component="h2"
//               fontWeight={600}
//               color="white"
//               variant="h2"
//             >
//               Our Subscription Plans
//             </Typography>
//             <Typography variant="body1" component="p" color="common.white">
//               Choose the right plan made for you
//             </Typography>
//           </Stack>
//         </CardContent>
//       </Box>
//       <Box sx={{ backgroundColor: "#f5f5f5", pb: 6 }}>
//         {loading ? (
//           <>
//             <Container>
//               <SkeletonLoader />
//             </Container>
//           </>
//         ) : (
//           <Box
//                     className='subscription_plan_box_stack_responsive'
//             sx={{
              
//               position: "relative",
//               top: -140,
//               zIndex: 6,
//             }}
//           >
//             <Container>
//               <Box pb={0}>
//                 <Grid  className="DashboardSubscritption_Grid_stack_responsive"  container spacing={6}>
//                   {data &&
//                     data?.length > 0 &&
//                     data.map((elem, index) => {
//                       return (
//                         <Grid item md={4} key={index}>
//                           <Card
//                             sx={{ borderRadius: "20px" }}
//                             onMouseOver={() => setHover(index)}
//                             onMouseOut={() => setHover(false)}
//                           >
//                             <CardContent>
//                               <Box
//                                 sx={{
//                                   textAlign: "center",
//                                   py: 5,
//                                   backgroundImage:
//                                     "url(/assets/images/home/subscription/subscription_banner.png)",
//                                   backgroundRepeat: "no-repeat",
//                                   objectFit: "contain",
//                                 }}
//                               >
//                                 <Box>
//                                   <Typography
//                                     variant="h4"
//                                     color="common.white"
//                                     fontWeight={600}
//                                   >
//                                     {elem?.name}
//                                   </Typography>
//                                 </Box>
//                               </Box>
//                               <Box>
//                                 <Stack
//                                   direction="column"
//                                   spacing={0.6}
//                                   alignItems="center"
//                                   justifyContent="center"
//                                 >
//                                   <Typography variant="h3">
//                                     ${elem?.price}
//                                   </Typography>
//                                   <Typography variant="body1" fontWeight={400}>
//                                     /month
//                                   </Typography>
//                                 </Stack>
//                               </Box>
//                               <Stack spacing={1}>
//                                 <Box>
//                                   <Box textAlign="center">
//                                     <List>
//                                       <ListItem sx={{ position: "relative" }}>
//                                         <ListItemIcon
//                                           sx={{ position: "absolute" }}
//                                         >
//                                           <Iconify
//                                             icon="charm:square-tick"
//                                             color={(theme) =>
//                                               theme.palette.success.main
//                                             }
//                                           />
//                                         </ListItemIcon>
//                                         <ListItemText
//                                           sx={{ textAlign: "center" }}
//                                           primary="Online System"
//                                         />
//                                       </ListItem>
//                                       <ListItem sx={{ position: "relative" }}>
//                                         <ListItemIcon
//                                           sx={{ position: "absolute" }}
//                                         >
//                                           <Iconify
//                                             icon="charm:square-tick"
//                                             color={(theme) =>
//                                               theme.palette.success.main
//                                             }
//                                           />
//                                         </ListItemIcon>
//                                         <ListItemText
//                                           sx={{ textAlign: "center" }}
//                                           primary=" Free apps"
//                                         />
//                                       </ListItem>
//                                       <ListItem sx={{ position: "relative" }}>
//                                         <ListItemIcon
//                                           sx={{ position: "absolute" }}
//                                         >
//                                           <Iconify
//                                             icon="system-uicons:cross"
//                                             color="red"
//                                           />
//                                         </ListItemIcon>
//                                         <ListItemText
//                                           sx={{ textAlign: "center" }}
//                                           primary=" Free apps"
//                                         />
//                                       </ListItem>
//                                       <ListItem sx={{ position: "relative" }}>
//                                         <ListItemIcon
//                                           sx={{ position: "absolute" }}
//                                         >
//                                           <Iconify
//                                             icon="charm:square-tick"
//                                             color={(theme) =>
//                                               theme.palette.success.main
//                                             }
//                                           />
//                                         </ListItemIcon>
//                                         <ListItemText
//                                           sx={{ textAlign: "center" }}
//                                           primary="live preview"
//                                         />
//                                       </ListItem>
//                                       <ListItem sx={{ position: "relative" }}>
//                                         <ListItemIcon
//                                           sx={{ position: "absolute" }}
//                                         >
//                                           <Iconify
//                                             icon="system-uicons:cross"
//                                             color="red"
//                                           />
//                                         </ListItemIcon>
//                                         <ListItemText
//                                           sx={{ textAlign: "center" }}
//                                           primary="Support unlimited"
//                                         />
//                                       </ListItem>
//                                     </List>
//                                   </Box>
//                                 </Box>

//                                 <Stack alignItems="center">
//                                   <Button
//                                     fullWidth
//                                     variant="contained"
//                                     width="min-content"
//                                     sx={{ px: 5 }}
//                                     onClick={() => handleCheckout(elem)}
//                                   >
//                                     GET STARTED
//                                   </Button>
//                                 </Stack>
//                               </Stack>
//                             </CardContent>
//                           </Card>
//                         </Grid>
//                       );
//                     })}
//                 </Grid>
//               </Box>
//             </Container>
//             </>
//           </Box>
//         )}
//       </Box>
//     ) : (
//         <CardPaymentForm
//           paymentDetails={paymentDetails}
//           setShowPayment={setShowPayment}
//         /> // Render the PaymentPage component when showPayment is true
//       )}
//     </React.Fragment>
//   );
// };

// export default SubscriptionsPage;



//code 2


import { BannerSection } from "@/components/banner";
import Iconify from "@/components/iconify";
import SkeletonLoader from "@/components/skeleton";
import axiosInstance from "@/utils/axios";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import CardPaymentForm from "../../companyDashboard/paymentPage/CardPaymentForm"; 

const SubscriptionsPage = () => {
  const [hover, setHover] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [showPayment, setShowPayment] = useState(false);

  // Fetch subscription plans data
  const fetchData = async (type = "driver") => {
    setLoading(true);
    try {
      const statusShowPlan = 1;
      const response = await axiosInstance.get(`/api/auth/master/plan/list/${type}/${statusShowPlan}`);
      if (response.status === 200) {
        setData(response.data.view_data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckout = (plan) => {
    setPaymentDetails(plan);
    setShowPayment(true);
  };

  if (showPayment) {
    return <CardPaymentForm paymentDetails={paymentDetails} setShowPayment={setShowPayment} />;
  }

  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: "#f5f5f5", pb: 6 }}>
        {loading ? (
          <Container>
            <SkeletonLoader />
          </Container>
        ) : (
          <>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: { lg: "550px", md: "550px", sm: "100%", xs: "100%" },
                backgroundImage: `url("/banner/banner.png")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Stack
                className="Subscritption_box_stack_responsive"
                sx={{ zIndex: 8, position: "absolute", left: "8em", top: "6em" }}
              >
                <Breadcrumbs aria-label="breadcrumb" sx={{ color: "common.white" }}>
                  <Box component={Link} sx={{ textDecoration: "none" }} color="common.white" href="/">
                    Home
                  </Box>
                  <Box component={Link} sx={{ textDecoration: "none" }} color="common.white" href="/dashboard/driver/active_jobs">
                    Dashboard
                  </Box>
                  <Typography sx={{ textDecoration: "none", fontWeight: 600 }} color="common.white">
                    Subscription
                  </Typography>
                </Breadcrumbs>
              </Stack>
              <CardContent
                className="dashboard_subscription_box_stack_responsive"
                sx={{
                  paddingTop: { lg: "6rem!important", md: "6rem!important", sm: "3rem!important", xs: "3rem!important" },
                  paddingBottom: { lg: "4rem!important", md: "4rem!important", sm: "2rem!important", xs: "2rem!important" },
                  position: "relative",
                }}
              >
                <Stack spacing={4}>
                  <Typography gutterBottom fontSize={44} component="h2" fontWeight={600} color="white" variant="h2">
                    Our Subscription Plans
                  </Typography>
                  <Typography variant="body1" component="p" color="common.white">
                    Choose the right plan made for you
                  </Typography>
                </Stack>
              </CardContent>
            </Box>
            <Box sx={{ backgroundColor: "#f5f5f5", pb: 6, position: "relative", top: -140 }}>
              <Container>
                <Grid container spacing={6}>
                  {data.map((plan, index) => (
                    <Grid item md={4} key={index}>
                      <Card
                        sx={{ borderRadius: "20px" }}
                        onMouseOver={() => setHover(index)}
                        onMouseOut={() => setHover(0)}
                      >
                        <CardContent>
                          <Box
                            sx={{
                              textAlign: "center",
                              py: 5,
                              backgroundImage: "url(/assets/images/home/subscription/subscription_banner.png)",
                              backgroundRepeat: "no-repeat",
                              objectFit: "contain",
                            }}
                          >
                            <Typography variant="h4" color="common.white" fontWeight={600}>
                              {plan.name}
                            </Typography>
                          </Box>
                          <Stack direction="column" spacing={0.6} alignItems="center" justifyContent="center">
                            <Typography variant="h3">${plan.price}</Typography>
                            <Typography variant="body1" fontWeight={400}>
                              /month
                            </Typography>
                          </Stack>
                          <List>
                            <ListItem>
                              <ListItemIcon>
                                <Iconify icon="charm:square-tick" color="success" />
                              </ListItemIcon>
                              <ListItemText primary="Online System" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Iconify icon="charm:square-tick" color="success" />
                              </ListItemIcon>
                              <ListItemText primary="Free apps" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Iconify icon="system-uicons:cross" color="red" />
                              </ListItemIcon>
                              <ListItemText primary="Free apps" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Iconify icon="charm:square-tick" color="success" />
                              </ListItemIcon>
                              <ListItemText primary="Live preview" />
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Iconify icon="system-uicons:cross" color="red" />
                              </ListItemIcon>
                              <ListItemText primary="Support unlimited" />
                            </ListItem>
                          </List>
                          <Stack alignItems="center">
                            <Button
                              fullWidth
                              variant="contained"
                              sx={{ px: 5 }}
                              onClick={() => handleCheckout(plan)}
                            >
                              GET STARTED
                            </Button>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>
          </>
        )}
      </Box>
    </React.Fragment>
  );
};

export default SubscriptionsPage;

