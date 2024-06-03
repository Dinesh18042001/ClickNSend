"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Menu,
  MenuItem,
} from "@mui/material";
import Header from "@/layout/primaryWeb/header";
import Footer from "@/layout/primaryWeb/footer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import axiosInstance from "@/utils/axios";
import { useAuthContext } from "@/auth/useAuthContext";

const StripePage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [stripeConnectData, setStripeConnectData] = useState(null);
  const [data, setData] = useState(null);
  const [createAccountData, setCreateAccountData] = useState(null);
  const [linkAccountData, setLinkAccountData] = useState(null);
  const { user } = useAuthContext();

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    const fetchConnectStripePayment = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/auth/payment/connect/${user.id}`
        );
        if (response.status === 200) {
          setStripeConnectData(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchConnectStripePayment();
  }, [user]);

  const handleClickConnectStripe = async () => {
    if (
      stripeConnectData?.details &&
      Object.keys(stripeConnectData.details).length > 0
    ) {
      handleClickStripeAccountConnectLink();
    } else {
      await axiosInstance
        .get(
          `api/auth/payment/create-account/${user.id}
    `
        )
        .then((response) => {
          if (response.status === 200) {
            setCreateAccountData(response);
            window.location.reload();
          }
        })
        .catch((error) => console.log(error));
    }
  };

  const handleClickStripeAccountConnectLink = async () => {
    if (
      stripeConnectData?.details &&
      stripeConnectData?.details?.charges_enabled === false
    ) {
      if (stripeConnectData?.details?.connect_link === null) {
        await axiosInstance
          .get(
            `api/auth/payment/link-account/${user.id}
`
          )
          .then((response) => {
            if (response.status === 200) {
              // setCreateAccountData(response);
              console.log("handleClickStripeAccountConnectLink", response);
              window.location.reload();
            }
          })
          .catch((error) => console.log(error));
      } else {
        window.location.href = stripeConnectData.details.connect_link;
      }
    }
  };

  const handleClickStripeAccountLoginLink = async () => {
    alert('handleClickStripeAccountLoginLink')
    if (
      stripeConnectData?.details &&
      stripeConnectData?.details?.charges_enabled == true
    ) {
      if (stripeConnectData?.details?.login_link == null) {
    alert('stripeConnectData?.details?.connect_link === null')

        await axiosInstance
          .get(
            `api/auth/payment/login-link/${user.id}
`
          )
          .then((response) => {
            if (response.status === 200) {
              // setCreateAccountData(response);
              console.log("handleClickStripeAccountLoginLink", response);
              window.location.reload();
            }
          })
          .catch((error) => console.log(error));
      } else {
    alert('window.location.href = stripeConnectData.details.login_link;')
        window.location.href = stripeConnectData.details.login_link;
      }
    }
  };

  return (
    <>
      <Header />
      <div style={{ paddingBottom: "100px" }}>
        <Box sx={{ backgroundColor: "#ff7533", py: 6, marginBottom: "100px" }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", color: "#fff", marginTop: "80px" }}
          >
            Woohoo!!! Your Payment Gateway is Now Active.
          </Typography>
        </Box>
        <Container
          sx={{
            paddingTop: "100px",
            minHeight: "50vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            fontFamily: "'Poppins', Helvetica, Arial, sans-serif",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginTop: "-170px" }}
          >
            Additional Information:
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center", mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis
            nisl, commodo eu vestibulum non, commodo a ligula. In hac habitasse
            platea dictumst. Maecenas non condimentum massa. Aenean lobortis
            euismod justo, ac dictum lorem vestibulum eget. Proin aliquam eget
            ipsum eu feugiat.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            {stripeConnectData?.details &&
            Object.keys(stripeConnectData.details).length > 0 ? (
              <>
                {stripeConnectData.details.charges_enabled === false && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickStripeAccountConnectLink}
                  >
                    {stripeConnectData.details.connect_link === null
                      ? "Connect with Stripe "
                      : "Onboard with Stripe"}
                  </Button>
                )}
                {stripeConnectData.details.charges_enabled === true && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickStripeAccountLoginLink}
                  >
                    {stripeConnectData.details.login_link === null
                      ? "Get the Stripe Login "
                      : "Login on Stripe"}
                  </Button>
                )}
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  handleClickConnectStripe();
                }}
              >
                Create account on Stripe
              </Button>
            )}
          </Box>

          {/* Table */}

          <TableContainer sx={{ mt: 5 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Example row */}
                <TableRow>
                  <TableCell>John Doe</TableCell>
                  <TableCell>john@example.com</TableCell>
                  <TableCell>Primary</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="actions"
                      aria-controls="actions-menu"
                      aria-haspopup="true"
                      // onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="actions-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose}>Remove</MenuItem>
                      <MenuItem onClick={handleClose}>Make Primary</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
                {/* Add more rows as needed */}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default StripePage;
