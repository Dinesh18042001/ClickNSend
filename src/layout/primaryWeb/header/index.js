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
import { filter } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import navConfig from "../nav/config-navigation";
import NavDesktop from "../nav/desktop/NavDesktop";
import MobileDrawer from "./drawer";
import { navItems,navItemsLogout } from "./navConfig";

const drawerWidth = 240;

const Header = (props) => {
  const router = useRouter();
  const token = isAccessToken();
  const { user, isAuthenticated, logout } = useAuthContext();
  const isMobile = useResponsive("down", "md");
  const value = useOffSetTop(10, {
    offset: ["start end", "end end"],
  });
  const isOffset = useOffSetTop(HEADER.H_MAIN_DESKTOP);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
                    sx={{ textAlign: "left",backgroundColor: "#ff7533",color: "white" }}
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
        <Container
         className='headerLinks_stack_responsive' 
         maxWidth>
          <Toolbar
          className='headerLinks_stack_responsive' 
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
                alignItems: "baseline",
              }}
              spacing={0}
            >
            {/* <div className="headerNav_div_responsive"> */}
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
                  My Profile
                </Typography>
              )}
              {/* </div> */}

              <div>
                <Button
                  variant="outlined"
                  sx={{ color: "#000", ml: 0.8, mr: 1.5 }}
                  onClick={() => router.push("/contact_us")}
                >
                  Contact us
                </Button>
                <Button variant="contained" onClick={handleAuth}>


                  {isAuthenticated ? "Log Out" : "Log in"}
                </Button>
              </div>
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
