import * as React from 'react';
import { styled, createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { mainListItems } from './NavList';
import Logo from './images/logo.png';
import { TextField , IconButton, ToggleButton , ToggleButtonGroup , MenuItem , Menu} from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Uni1 from './images/uni1.png';
import LocationOn from '@mui/icons-material/LocationOn';
import {BsBookmarkStarFill} from 'react-icons/bs';
import NavigateNext from '@mui/icons-material/NavigateNext';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import history from './history';
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from './firebase'


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      backgroundImage : 'linear-gradient(#3A9AB7 , #60DBD7)',
      color : 'white',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

const menuTheme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        list: {
          backgroundColor : '#3A9AB7',
          color : '#FFFFFF',
        },
      },
    },
  },
});

function Universities() {

  const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
      // handleMobileMenuClose();
    };  


    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    
    const [open, setOpen] = React.useState(true);
    
    const toggleDrawer = () => {
      setOpen(!open);
    };
    return (
      <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open} style={{backgroundColor : '#F5F5F5'}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              style={{backgroundColor : '#3a9ab7'}}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="primary">
                <NotificationsNoneIcon className='blue'/>
              </Badge>
            </IconButton>
              <IconButton
                style={{backgroundColor : '#3A9AB7' , marginLeft : '20px'}}
                onClick={handleProfileMenuOpen}
              >
                <PersonOutlinedIcon style={{color : 'white'}}/>
              </IconButton>
              <ThemeProvider theme={menuTheme}>
           <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={isMenuOpen}
              onClose={handleMenuClose}
            >
              <MenuItem style = {{borderBottom : '1px solid white' , padding : '10px 40px' , margin : '0 30px'}} onClick={() => {history.push('./profile')}}>Profile</MenuItem>
              <MenuItem style = {{borderBottom : '1px solid white' , padding : '10px 40px' , margin : '0 30px'}}onClick={() => {history.push('./support-contact-us')}}>Support</MenuItem>
              <MenuItem style = {{borderBottom : '1px solid white' , padding : '10px 40px' , margin : '0 30px'}} onClick={() => {history.push('./account-settings')}}>Settings</MenuItem>
              <MenuItem style = {{ padding : '10px 40px' , margin : '0 30px'}} onClick={() => signOut(getAuth())}>Logout</MenuItem>
          </Menu>
          <Grid display={'flex'} direction={'column'} style={{margin : '0 45px 0 15px'}}>
          <p style={{fontSize : '19px'}} className='blue'>Ahmad Khan</p>
          <p style={{color : '#474747' , fontSize : '15px'}}>Student</p>
          </Grid>
          </ThemeProvider>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
              <Grid spacing={0} style={{display: 'flex' , justifyContent : 'center'}}>
                <img src={Logo}  style={{width : '70%'}}/>
              </Grid>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <List  style={{paddingTop : '100px'}}>{mainListItems}</List>
          <div style={{display : 'flex' , alignItems : 'flex-end' , height : '100%' , marginLeft : '73px'}}><p>Version 1.1</p></div>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[0]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={0}>
                <Grid  lg={12} md={12} sm={12} container>
                    <Grid lg={11} md={11} sm={11}>
                        <Paper style={{display : "flex" , justifyContent: "space-between" , margin: '0 auto'}}>
                          <div style={{margin:"auto 16px",width:"100%"}}>
                          <TextField id={'searchBar'}
                          fullWidth 
                          variant="standard"
                          placeholder='Search'
                          InputProps={{ disableUnderline: true}} />
                          </div>
                        </Paper>
                    </Grid>
                    <Grid lg={1} md={1} sm={1}>
                            <IconButton sx= {{
                                borderRadius : '7px',
                                width : '50%',
                                height : '100%',
                                marginLeft : '20px',
                                backgroundColor : '#3A9AB7',
                                color : 'white',
                                '&:hover': {
                                    background: "#4db0ce",
                                }
                            }}>
                            <FilterAltOutlinedIcon/>
                            </IconButton>
                    </Grid>
                </Grid>
                <Grid  lg={12} md={12} sm={12} container direction='row' alignItems='center' marginTop={'20px'}>
                    <p className='blue'>Filter by Region: </p>
                    <ToggleButtonGroup sx = {{
                        color : '#1a1a1a',
                        
                    }}
                      value={alignment}
                      exclusive
                      onChange={handleChange}
                      style={{marginLeft : '30px' }}
                    >
                      <ToggleButton style={{marginRight : '10px' , border : 'solid 1px #3A9AB7' , borderRadius : '10px'}} value="World">World</ToggleButton>
                      <ToggleButton style={{marginRight : '10px' , border : 'solid 1px #3A9AB7' , borderRadius : '10px'}} value="Asia">Asia</ToggleButton>
                      <ToggleButton style={{marginRight : '10px' , border : 'solid 1px #3A9AB7' , borderRadius : '10px'}} value="Australia">Australia</ToggleButton>
                      <ToggleButton style={{marginRight : '10px' , border : 'solid 1px #3A9AB7' , borderRadius : '10px'}} value="Europe">Europe</ToggleButton>
                      <ToggleButton style={{marginRight : '10px' , border : 'solid 1px #3A9AB7' , borderRadius : '10px'}} value="Africa">Africa</ToggleButton>
                    </ToggleButtonGroup>
                    <IconButton style={{backgroundColor: '#3A9AB7' , color : 'white'}}><AddIcon /></IconButton>
                </Grid>
                <Grid  lg={12} md={12} sm={12} container direction='row' alignItems='center' marginTop={'20px'}>
                    <h2 className='blue'>Universities</h2>
                    <InfoOutlinedIcon className='info'/>
                    <p className='hide'>Sorted based on QS World Ranking</p>
                </Grid>
                <Grid lg={12} md={12} sm={12} container>
                      <Grid lg={12} md={12} sm={12} container alignItems='center' style={{padding : '10px 15px' , backgroundColor : '#F5F5F5' , borderRadius : '10px'}}>
                        <Grid lg={1} md={1} sm={1}>
                            <img src={Uni1}/>
                        </Grid>
                        <Grid lg={3} md={3} sm={3}>
                            <h4 style={{margin : '0'}}>Harvard University</h4>
                            <p><LocationOn />Cambridge, United States</p>
                        </Grid>
                        <Grid lg={3} md={3} sm={3}>
                            <h4 style={{margin : '0'}}>QS World Ranking</h4>
                            <p>no 1</p>
                        </Grid>
                        <Grid lg={3} md={3} sm={3}>
                            <h4 style={{margin : '0'}}>Fee per Sem</h4>
                            <p>USD 45,000</p>
                        </Grid>
                        <Grid lg={2} md={2} sm={2}  justifyContent='flex-end' display = 'flex'>
                            <IconButton style={{backgroundColor : '#3A9AB7' , color : 'white' }}><BsBookmarkStarFill /></IconButton>
                            <IconButton style={{backgroundColor : '#3A9AB7' , color : 'white' , marginLeft : '18px'}}><NavigateNext /></IconButton>
                        </Grid>
                      </Grid>
                </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
    )
} 

export default Universities;