import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';

const Search = styled( 'div' )( ( { theme } ) => ( {
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha( theme.palette.common.white, 0.15 ),
  '&:hover': {
    backgroundColor: alpha( theme.palette.common.white, 0.25 ),
  },
  marginRight: theme.spacing( 2 ),
  marginLeft: 0,
  width: '100%',
  [ theme.breakpoints.up( 'sm' ) ]: {
    marginLeft: theme.spacing( 3 ),
    width: 'auto',
  },
} ) );

const SearchIconWrapper = styled( 'div' )( ( { theme } ) => ( {
  padding: theme.spacing( 0, 2 ),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} ) );

const StyledInputBase = styled( InputBase )( ( { theme } ) => ( {
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing( 1, 1, 1, 0 ),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${ theme.spacing( 4 ) })`,
    transition: theme.transitions.create( 'width' ),
    width: '100%',
    [ theme.breakpoints.up( 'md' ) ]: {
      width: '20ch',
    },
  },
} ) );

function stringToColor ( string ) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for ( i = 0; i < string.length; i += 1 ) {
    hash = string.charCodeAt( i ) + ( ( hash << 5 ) - hash );
  }

  let color = '#';

  for ( i = 0; i < 3; i += 1 ) {
    const value = ( hash >> ( i * 8 ) ) & 0xff;
    color += `00${ value.toString( 16 ) }`.substr( -2 );
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar ( name ) {
  return {
    sx: {
      bgcolor: stringToColor( name ),
    },
    children: `${ name.split( ' ' )[ 0 ][ 0 ] }${ name.split( ' ' )[ 1 ][ 0 ] }`,
  };
}

export default function PrimarySearchAppBar () {
  const [ anchorEl, setAnchorEl ] = React.useState( null );
  const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = React.useState( null );

  const isMenuOpen = Boolean( anchorEl );
  const isMobileMenuOpen = Boolean( mobileMoreAnchorEl );

  const handleProfileMenuOpen = ( event ) => {
    setAnchorEl( event.currentTarget );
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl( null );
  };

  const handleMenuClose = () => {
    setAnchorEl( null );
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = ( event ) => {
    setMobileMoreAnchorEl( event.currentTarget );
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose} sx={{ marginTop: 6 }}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Tableau de bord</MenuItem>
      <MenuItem onClick={handleMenuClose}>Parametre</MenuItem>
      <MenuItem onClick={handleMenuClose}>Déconnexion</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            PLG
          </Typography>
          <Box sx={{ marginLeft: '10%' }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              <Avatar {...stringAvatar( 'Gaspard PETEMOYA' )} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
