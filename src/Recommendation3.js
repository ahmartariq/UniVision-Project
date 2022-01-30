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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { mainListItems } from './NavList';
import Logo from './images/logo.png';
import {IconButton , Paper , Button} from '@mui/material';
import history from './history';
import "react-step-progress-bar/styles.css";
import { ProgressBar , Step } from "react-step-progress-bar";
import LocationOn from '@mui/icons-material/LocationOn';
import {BsBookmarkStarFill} from 'react-icons/bs';
import NavigateNext from '@mui/icons-material/NavigateNext';
import Uni1 from './images/uni1.png';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import {Menu , MenuItem} from '@mui/material';




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
export const Recommendation3 = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
      // handleMobileMenuClose();
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
              <MenuItem style = {{borderBottom : '1px solid white' , padding : '10px 40px' , margin : '0 30px'}} onClick={handleMenuClose}>Support</MenuItem>
              <MenuItem style = {{borderBottom : '1px solid white' , padding : '10px 40px' , margin : '0 30px'}} onClick={handleMenuClose}>Settings</MenuItem>
              <MenuItem style = {{ padding : '10px 40px' , margin : '0 30px'}}onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
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
                <Grid lg={12} md={12} sm={12}>
                    <h2 className='blue'>Recommender</h2>
                    <Grid  lg={7} md={10} sm={12} style={{marginLeft : '10px'}}>
                        <br/>
                        <br/>
                            <ProgressBar 
                            filledBackground="#3A9AB7"
                            percent={100}>
                                <Step>
                                  {({ accomplished, index }) => (
                                    <div
                                      className={`indexedStep ${accomplished ? "accomplished" : null}`}
                                    >
                                        <p style={{paddingBottom : '50px' , color : 'black' , fontSize : '15px'}}>Basic Details</p>
                                    </div>
                                  )}
                                </Step>
                                <Step>
                                  {({ accomplished, index }) => (
                                    <div
                                      className={`indexedStep ${accomplished ? "accomplished" : null}`}
                                    >
                                       <p style={{paddingBottom : '50px' , color : 'black' , fontSize : '15px'}}>Qualifications</p>
                                    </div>
                                  )}
                                </Step>
                                <Step>
                                  {({ accomplished, index }) => (
                                    <div
                                      className={`indexedStep ${accomplished ? "accomplished" : null}`}
                                    >
                                        <p style={{paddingBottom : '50px' , color : 'black' , fontSize : '15px'}}>Results</p>
                                    </div>
                                  )}
                                </Step>
                            </ProgressBar>
                    </Grid>
                    <Grid lg={10} md={12} sm={12} direction='row'>
                        <br/>
                        <h3 className='blue'>Result</h3>
                        <p>Based on your entered details &  your interests, the Recommender has found following universities for you.</p>
                        <Grid lg={12} md={12} sm={12} container>
                            <h4 className='blue' style={{display : 'flex' , alignContent : 'center'}}>Aspirational options  <InfoOutlinedIcon/></h4>
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
                            <h4 className='blue' style={{display : 'flex' , alignContent : 'center'}}>Solid options  <InfoOutlinedIcon/></h4>
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
                            <h4 className='blue' style={{display : 'flex' , alignContent : 'center'}}>Safe options  <InfoOutlinedIcon/></h4>
                              <Grid lg={12} md={12} sm={12} container  alignItems='center' style={{padding : '10px 15px' , backgroundColor : '#F5F5F5' , borderRadius : '10px'}}>
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
                            <Grid container display='flex' justifyContent='center'>
                                <Button variant='contained'
                                    style={{color : 'white' , padding : '8px 50px' ,  marginTop :'20px' ,backgroundColor : '#3A9AB7',}}
                                    onClick={() => {history.push('./compare-universities')}}
                                    >
                                    Compare your options
                                </Button>
                            </Grid>
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
