/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Container from "@mui/material/Container";
import { FiChevronDown } from "react-icons/fi";

// Other top-level pages (excluding Services)
const pagesBeforeServices = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
];

const pagesAfterServices = [
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
];

export default function AnyworkNavbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const router = useRouter();
  const pathname = usePathname();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path: string) => {
    router.push(path);
    handleCloseNavMenu();
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          borderBottom: "1px solid #f3f3f3",
          zIndex: 1300,
        }}
      >
        <Container style={{ maxWidth: "1400px" }}>
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                width={140}
                height={40}
              />
            </Box>

            {/* Mobile Hamburger */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                sx={{ color: "#1A4377" }}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {[...pagesBeforeServices, ...pagesAfterServices].map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => handleNavigate(page.path)}
                  >
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: pathname === page.path ? "#00B8D9" : "inherit",
                        fontWeight: pathname === page.path ? "bold" : 400,
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
                {/* Services Mobile */}
                <MenuItem onClick={() => handleNavigate("/services/users")}>
                  <Typography>Services - For Users</Typography>
                </MenuItem>
                <MenuItem onClick={() => handleNavigate("/services/artisans")}>
                  <Typography>Services - For Artisans</Typography>
                </MenuItem>

                {/* Mobile Buttons */}
                <MenuItem>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      color: "#00a3d7",
                      borderColor: "#00a3d7",
                      textTransform: "none",
                    }}
                  >
                    Join us an Artisan
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#2A6599",
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#214E75" },
                    }}
                  >
                    Find an Artisan
                  </Button>
                </MenuItem>
              </Menu>
            </Box>

            {/* Desktop Menu */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {/* Before Services */}
              {pagesBeforeServices.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleNavigate(page.path)}
                  sx={navButtonStyle(pathname === page.path)}
                >
                  {page.name}
                </Button>
              ))}

              {/* Services (3rd item) */}
              <ServicesDropdown pathname={pathname} router={router} />

              {/* After Services */}
              {pagesAfterServices.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleNavigate(page.path)}
                  sx={navButtonStyle(pathname === page.path)}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Desktop Buttons */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#00B8D9",
                  borderColor: "#00B8D9",
                }}
              >
                Join us an Artisan
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  backgroundColor: "#026994",
                  "&:hover": { backgroundColor: "#026994" },
                }}
              >
                Find an Artisan
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Spacer below fixed navbar */}
      <Toolbar />
    </>
  );
}

// Style helper for nav buttons
const navButtonStyle = (isActive: boolean) => ({
  mx: 1.5,
  textTransform: "none",
  fontWeight: 500,
  color: isActive ? "#00B8D9" : "#000",
  //   borderBottom: isActive ? "2px solid #00B8D9" : "none",
  borderRadius: 0,
  "&:hover": {
    color: "#00B8D9",
    backgroundColor: "transparent",
  },
});

// Services Dropdown (Desktop Only)
function ServicesDropdown({
  pathname,
  router,
}: {
  pathname: string;
  router: any;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (path: string) => {
    router.push(path);
    handleClose();
  };

  const isActive = pathname.startsWith("/services");

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          ...navButtonStyle(isActive),
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        Services <FiChevronDown size={16} className="text-[#BAC5CD]" />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        sx={{ mt: 1 }}
        PaperProps={{
          sx: {
            borderRadius: 2,
            px: 1,
            py: 0.5,
          },
        }}
      >
        <MenuItem onClick={() => handleSelect("/services/users")}>
          For Users
        </MenuItem>
        <MenuItem onClick={() => handleSelect("/services/artisans")}>
          For Artisans
        </MenuItem>
      </Menu>
    </>
  );
}
