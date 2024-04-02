import { useAuthContext } from "@/auth/useAuthContext";
import useOffSetTop from "@/hooks/useOffSetTop";
import useResponsive from "@/hooks/useResponsive";
import { HEADER } from "@/utils/config-global";
import { isAccessToken } from "@/utils/localStorageAvailable";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
// import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { filter } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import navConfig from "../nav/config-navigation";
import NavDesktop from "../nav/desktop/NavDesktop";
import MobileDrawer from "./drawer";
import { navItems, navItemsLogout } from "./navConfig";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Alert from "@mui/material/Alert";

// import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

const Header = (props) => {
  const router = useRouter();
  const token = isAccessToken();
  const { user, isAuthenticated, logout } = useAuthContext();
  console.log('aaaaaaaaaaaaaaaaaaaaa',user);
  const isMobile = useResponsive("down", "md");
  const value = useOffSetTop(10, {
    offset: ["start end", "end end"],
  });
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  // State to keep track of the active menu item
  const [activeItem, setActiveItem] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Function to handle menu item click, sets the active item and closes the menu
  const handleMenuItemClick = (itemName) => {
    setActiveItem(itemName);
    handleClose();
  };

  // Function to apply conditional styling

  const handleAuth = () => {
    if (isAuthenticated) {
      logout();
    } else {
      router.push("/auth/login");
    }
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "left" }}>
      <Box sx={{ my: 2 }} component={Link} href="/">
        <Box
          component="img"
          width={175}
          height={50}
          src="/logo.png"
          alt="Logo"
          loading="lazy"
          sx={{
            objectFit: "contain",
            background: "transparent",
            backgroundSize: "cover",
          }}
        />
      </Box>
      <Divider />
      <List>
        {navItems &&
          navItems.length &&
          navItems.map((item, index) => {
            return (
              <React.Fragment key={`parent-${index}`}>
                <ListItem disablePadding onClick={handleDrawerToggle}>
                  <ListItemButton
                    LinkComponent={Link}
                    href={item?.link}
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText primary={item?.name} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
      </List>
      <List>
        {navItemsLogout &&
          navItemsLogout.length &&
          navItemsLogout.map((item, index) => {
            return (
              <React.Fragment key={`parent-${index}`}>
                <ListItem disablePadding onClick={handleDrawerToggle}>
                  <ListItemButton
                    LinkComponent={Link}
                    href={item?.link}
                    sx={{
                      textAlign: "left",
                      backgroundColor: "#ff7533",
                      color: "white",
                    }}
                  >
                    <ListItemText primary={item?.name} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const theme = useTheme();

  return (
    <>
      <AppBar
        component="nav"
        position={"fixed"}
        color="inherit"
        sx={{
          "&.MuiAppBar-root": {
            boxShadow: value
              ? "0px 2px 4px -1px rgba(145, 158, 171, 0.2), 0px 4px 5px 0px rgba(145, 158, 171, 0.14), 0px 1px 10px 0px rgba(145, 158, 171, 0.12)"
              : "none",
          },
          background: (theme) =>
            value ? theme.palette.common.white : theme.palette.common.white,
          transition: (theme) =>
            theme.transitions.create("background", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.short,
            }),
        }}
      >
        <Container className="headerLinks_stack_responsive" maxWidth>
          <Toolbar
            className="headerLinks_stack_responsive"
            sx={{
              justifyContent: {
                lg: "space-between",
                md: "space-between",
                sm: "space-between",
                xs: "space-between",
              },
            }}
          >
            <Box component={Link} href="/">
              <Box
                component="img"
                width={200}
                height={50}
                src="/logo.png"
                alt="Logo"
                loading="lazy"
                sx={{
                  objectFit: "contain",
                  background: "transparent",
                  backgroundSize: "cover",
                }}
              />
            </Box>
            <Stack
              // className="headerNav_stack_responsive"
              direction="row"
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
              }}
              spacing={0}
            >
              {/* <div className="headerNav_div_responsive"> */}
              {!isAuthenticated && (
                <NavDesktop
                  value={value}
                  isOffset={isOffset}
                  data={
                    navConfig &&
                    filter(navConfig, (item) => {
                      return item.token(isAuthenticated);
                    })
                  }
                />
              )}
              {isAuthenticated &&
                (user?.user_type !== "driver" ? (
                  <Typography
                    sx={{
                      mx: 1,
                      borderBottom: (theme) =>
                        router.asPath.startsWith("/dashboard")
                          ? "2px solid"
                          : "none",

                      color: (theme) =>
                        router.asPath.startsWith("/dashboard")
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      borderColor: (theme) =>
                        router.asPath.startsWith("/dashboard")
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      borderBottom: router.asPath.startsWith("/dashboard")
                        ? "2px solid"
                        : "",
                      ...theme.typography.subtitle2,
                      textDecoration: "none",
                    }}
                    component={Link}
                    href={
                      user?.user_type === "driver"
                        ? `/dashboard/${user?.user_type}/active_jobs`
                        : `/dashboard/${user?.user_type}/job_posted`
                    }
                  >
                    Dashboard
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      mx: 1,
                      borderBottom: (theme) =>
                        router.asPath.startsWith("/dashboard")
                          ? "2px solid"
                          : "none",

                      color: (theme) =>
                        router.asPath.startsWith("/dashboard")
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      borderColor: (theme) =>
                        router.asPath.startsWith("/dashboard")
                          ? theme.palette.primary.main
                          : theme.palette.text.primary,
                      borderBottom: router.asPath.startsWith("/dashboard")
                        ? "2px solid"
                        : "",
                      ...theme.typography.subtitle2,
                      textDecoration: "none",
                    }}
                    component={Link}
                    href={
                      user?.user_type === "driver"
                        ? `/dashboard/${user?.user_type}/active_jobs`
                        : `/dashboard/${user?.user_type}`
                    }
                  >
                    Dashboard
                  </Typography>
                ))}

              {isAuthenticated && (
                <Typography
                  sx={{
                    mx: 1.5,
                    pr: 1,
                    borderBottom: (theme) =>
                      router.asPath === `/${user?.user_type}/profile`
                        ? "2px solid"
                        : "none",

                    color: (theme) =>
                      router.asPath === `/${user?.user_type}/profile`
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    borderColor: (theme) =>
                      router.asPath === `/${user?.user_type}/profile`
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    borderBottom:
                      router.asPath === `/${user?.user_type}/profile`
                        ? "2px solid"
                        : "",
                    ...theme.typography.subtitle2,
                    textDecoration: "none",
                   }}
                  component={Link}
                  href={`/${user?.user_type}/profile`}
                >
                  Invoices
                </Typography>
              )}
              {isAuthenticated && (
                <Typography
                  sx={{
                    // mx: 1.5,
                    pr: 1,
                    borderBottom: (theme) =>
                      router.asPath === `/dashboard/${user?.user_type}/subscription`
                        ? "2px solid"
                        : "none",

                    color: (theme) =>
                      router.asPath === `/dashboard/${user?.user_type}/subscription`
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    borderColor: (theme) =>
                      router.asPath === `/dashboard/${user?.user_type}/subscription`
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                    borderBottom:
                      router.asPath === `/dashboard/${user?.user_type}/subscription`
                        ? "2px solid"
                        : "",
                    ...theme.typography.subtitle2,
                    textDecoration: "none",
                   }}
                  component={Link}
                  href={`/dashboard/${user?.user_type}/subscription`}
                >
                  Subscription
                </Typography>
              )}

              {isAuthenticated && (
                <Box
                  // sx={{ position: 'relative' }} // Ensure the Box containing the IconButton and Alert is relatively positioned
                  onMouseEnter={() => setShowAlert(true)} // Show the Alert on mouse enter
                  onMouseLeave={() => setShowAlert(false)} // Hide the Alert on mouse leave
                >
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                  {showAlert && (
                    <Box sx={{ backgroundColor: "#ffffff" }}>
                      <Alert
                        icon={false}
                        severity="success"
                        sx={{
                          width: "320px",
                          backgroundColor: "#637381",
                          position: "absolute", // Position the Alert absolutely within the parent Box
                          // top: '100%', // Position the Alert below the IconButton
                          // left: '50%',
                          // backgroundColor: 'red',
                          transform: "translateX(-50%)", // Center the Alert horizontally
                          mt: 1, // Add some margin top to separate it from the IconButton
                          zIndex: 1, // Ensure the Alert is above other content
                        }}
                      >
                        This success Alert has no icon.
                      </Alert>
                    </Box>
                  )}
                </Box>
              )}
              {/* </div> */}
              {!isAuthenticated && (
              <div>
                <Button
                  variant="outlined"
                  sx={{ color: "#000", ml: 0.8, mr: 1.5 }}
                  onClick={() => router.push("/contact_us")}
                >
                  Contact us
                </Button>
                </div>
                )}
              {isAuthenticated && (
                <>
                  <Box direction="row" spacing={0.5} alignItems="center" sx={{cursor:'pointer'}} onClick={handleClick}  >
                    {/* <SettingsSuggestIcon /> */}
                    
                    <SettingsIcon style={{marginTop: "8px", marginLeft:"10px",fontSize: "26px"}} />

                  </Box>
                  <Menu
                   sx={{marginTop: '10px'}} 
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link href="/profile" passHref style={{ textDecoration:'none'}}>
                      <MenuItem
                       sx={{color:"#212b36",fontWeight:'500',lineHeight:'1.5'}}
                        onClick={() => handleMenuItemClick("profile")}
                      >
                        Jobs
                      </MenuItem>
                    </Link>
                    <Link href="/payment" passHref  style={{ textDecoration:'none'}}>
                      <MenuItem
                      sx={{color:"#212b36",fontWeight:'500',lineHeight:'1.5'}}
                        onClick={() => handleMenuItemClick("payment")}
                      >
                        Pending payment
                      </MenuItem>
                    </Link>
                    <Link href="/account" passHref style={{ textDecoration:'none'}}>
                      <MenuItem
                       sx={{color:"#212b36",fontWeight:'500',lineHeight:'1.5'}}
                        onClick={() => handleMenuItemClick("account")}
                      >
                        settings(my profile)
                      </MenuItem>
                    </Link>
                    <Link href="/contact_us" passHref style={{ textDecoration:'none'}}>
                      <MenuItem
                       sx={{color:"#212b36",fontWeight:'500',lineHeight:'1.5'}}
                        onClick={() => handleMenuItemClick("account")}
                      >
                        Contact us
                      </MenuItem>
                    </Link>
                    <Divider />
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',paddingTop: '10px'}}>
                <Button sx={{width:'140px'}} variant="contained" onClick={handleAuth}>
                  {isAuthenticated ? "Log Out" : "Log in"}
                </Button>
              </div>
                  </Menu>{" "}
                </>
              )}
            </Stack>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <MobileDrawer
        drawer={drawer}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
        container={container}
      />
    </>
  );
};

export default Header;
