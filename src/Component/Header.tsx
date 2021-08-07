import React from 'react';
import { styled } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, MenuItem, InputBase, Badge, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import theme from '../theme';
import { Avatar } from '@material-ui/core';


const NewToolbar = styled(Toolbar)({
   display: 'flex',
   justifyContent: 'space-between'
});

const MenuButton = styled(IconButton)({
   marginRight: theme.spacing(2),
});

const SearchBar = styled('div')({
   position: 'relative',
   borderRadius: '20px',
   backgroundColor: theme.palette.common.white,
   '&:hover': {
      backgroundColor: theme.palette.common.white,
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: '100%',
   height: '44px',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
   },
   display: 'flex',
});

const SearchIconDiv = styled('div')({
   padding: theme.spacing(0, 2),
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
})

const SearchInput = styled(InputBase)({
   padding: theme.spacing(1, 1, 1, 0),
   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
   transition: theme.transitions.create('width'),
   width: '100%',
   [theme.breakpoints.up('md')]: {
      width: '40ch',
   },
})

const DesktopSection = styled('div')({
   display: 'none',
   paddingRight: '10px',
   [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
   },
});

const MobileSection = styled('div')({
   display: 'flex',
   alignItems: 'center',
   [theme.breakpoints.up('md')]: {
      display: 'none',
   },
});

export default function MenuAppBar() {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

   const isMenuOpen = Boolean(anchorEl);
   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

   const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
   };

   const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
   };

   const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
      setMobileMoreAnchorEl(event.currentTarget);
   };

   const menuId = 'primary-search-account-menu';
   const renderMenu = (
      <Menu
         anchorEl={anchorEl}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         id={menuId}
         keepMounted
         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
         open={isMenuOpen}
         onClose={handleMenuClose}
      >
         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
   );

   const mobileMenuId = 'primary-search-account-menu-mobile';
   const renderMobileMenu = (
      <Menu
         anchorEl={mobileMoreAnchorEl}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         id={mobileMenuId}
         keepMounted
         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
         open={isMobileMenuOpen}
         onClose={handleMobileMenuClose}
      >
         <MenuItem>
            <IconButton aria-label="show 4 new mails" color="inherit">
               <Badge badgeContent={4} color="secondary">
                  <MailIcon />
               </Badge>
            </IconButton>
            <p>Messages</p>
         </MenuItem>
         <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
               <Badge badgeContent={11} color="secondary">
                  <NotificationsIcon />
               </Badge>
            </IconButton>
            <p>Notifications</p>
         </MenuItem>
         <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
               aria-label="account of current user"
               aria-controls="primary-search-account-menu"
               aria-haspopup="true"
               color="inherit"
            >
               <AccountCircle />
            </IconButton>
            <p>Profile</p>
         </MenuItem>
      </Menu>
   );

   return (
      <AppBar
         sx={{ boxShadow: 'none', padding: '10px 0px' }}
         position="static"
      >
         <NewToolbar>
            <div style={{ display: 'flex', alignItems: 'center' }}>
               <MenuButton color="inherit" aria-label="menu">
                  <MenuIcon color="secondary" />
               </MenuButton>
               <SearchBar>
                  <SearchIconDiv>
                     <SearchIcon />
                  </SearchIconDiv>
                  <SearchInput
                     placeholder="Search…"
                     className="inputInput"
                     inputProps={{ 'aria-label': 'search' }}
                     sx={{
                        root: {
                           color: 'inherit'
                        },
                     }}
                  />
               </SearchBar>
            </div>
            <div>
               <DesktopSection>
                  <IconButton aria-label="show 4 new mails" color="inherit">
                     <Badge badgeContent={4} color="secondary">
                        <MailIcon sx={{ color: 'gray' }} />
                     </Badge>
                  </IconButton>
                  <IconButton aria-label="show 17 new notifications" color="inherit">
                     <Badge
                        badgeContent={17}
                        color="secondary"
                     >
                        <NotificationsIcon sx={{ color: 'gray' }} />
                     </Badge>
                  </IconButton>
                  <IconButton
                     edge="end"
                     aria-label="account of current user"
                     aria-controls={menuId}
                     aria-haspopup="true"
                     onClick={handleProfileMenuOpen}
                     color="inherit"
                     sx={{ margin: '0px 10px 0px 15px' }}
                  >
                     <Avatar
                        src='https://res.cloudinary.com/dj7k9b8ps/image/upload/v1618679634/wd9m6jqgcwyyci1hjrj7.jpg'
                        sx={{
                           width: theme.spacing(7),
                           height: theme.spacing(7),
                           borderRadius: '20px'
                        }}
                     />
                  </IconButton>
               </DesktopSection>
               <MobileSection>
                  <IconButton
                     aria-label="show more"
                     aria-controls={mobileMenuId}
                     aria-haspopup="true"
                     onClick={handleMobileMenuOpen}
                     color="inherit"
                  >
                     <MoreIcon />
                  </IconButton>
               </MobileSection>
               {renderMobileMenu}
               {renderMenu}
            </div>
         </NewToolbar>
      </AppBar>
   );
}