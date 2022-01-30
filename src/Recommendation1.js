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
import {IconButton , Select , FormControl , InputLabel , MenuItem , ToggleButton , ToggleButtonGroup, Button, Menu} from '@mui/material';
import history from './history';
import "react-step-progress-bar/styles.css";
import { ProgressBar , Step } from "react-step-progress-bar";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';


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
export const Recommendation1 = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
      setAnchorEl(null);
      // handleMobileMenuClose();
    };  
    const [country, setcountry] = React.useState('');
    const handleChange = (event) => {
        setcountry(event.target.value);
      };

    const [city, setcity] = React.useState('');
    const handleCityChange = (event) => {
        setcity(event.target.value);
      };
      
    const [fee, setfee] = React.useState('');
    const handleFeeChange = (event) => {
        setfee(event.target.value);
      };
  
    const [open, setOpen] = React.useState(true);

    const [alignment, setAlignment] = React.useState('web');

    const AlignmentChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };
    
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
                            filledBackground="linear-gradient(to right, #3A9AB7 , #E2E2E2)"
                            percent={25}>
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
                        <h3 className='blue'>Basic Details</h3>
                        <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel >Country</InputLabel>
                        <Select
                          value={country}
                          label="country *"
                          onChange={handleChange}
                          sx = {{width : '300px'}}
                        >
                          <MenuItem value="">
                            <em>Select Country</em>
                          </MenuItem>
                          <MenuItem value={10}>Pakistan</MenuItem>
                          <MenuItem value={20}>United States</MenuItem>
                          <MenuItem value={30}>United Kingdom</MenuItem>
                        </Select>
                        </FormControl>
                        <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel >City</InputLabel>
                        <Select
                          value={city}
                          label="city *"
                          onChange={handleCityChange}
                          sx = {{width : '300px'}}
                        >
                          <MenuItem value="">
                            <em>Select City</em>
                          </MenuItem>
                          <MenuItem value={10}>Islamabad</MenuItem>
                          <MenuItem value={20}>Karachi</MenuItem>
                          <MenuItem value={30}>Lahore</MenuItem>
                        </Select>
                        </FormControl>
                        <br/>
                        <FormControl required sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel >Fee Range</InputLabel>
                        <Select
                          value={fee}
                          label="Fee Range *"
                          onChange={handleFeeChange}
                          sx = {{width : '300px'}}
                        >
                          <MenuItem value="">
                            <em>Select City</em>
                          </MenuItem>
                          <MenuItem value={10}>1000-20000</MenuItem>
                          <MenuItem value={20}>20000-30000</MenuItem>
                          <MenuItem value={30}>30000-500000</MenuItem>
                        </Select>
                        </FormControl>
                    </Grid>
                    <Grid lg={12} md={12} sm={12} container marginTop='50px' direction='row'>
                        <p style={{display : 'flex' , alignItems : 'center'}}>Are you looking for scholarship?</p>
                        <ToggleButtonGroup sx = {{
                            color : '#1a1a1a',
                            
                        }}
                          value={alignment}
                          exclusive
                          required
                          onChange={AlignmentChange}
                          style={{marginLeft : '30px' }}
                        >
                          <ToggleButton style={{marginRight : '10px' , border : 'solid 1px #3A9AB7' , borderRadius : '10px' , width : '80px'}} value="World">Yes</ToggleButton>
                          <ToggleButton style={{marginRight : '10px' , border : 'solid 1px #3A9AB7' , borderRadius : '10px' , width : '80px'}} value="Asia">No</ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid lg={12} md={12} sm={12} container marginTop='50px' direction='row'>
                    <Button variant='contained'
                    style={{color : 'white' , padding : '8px 50px' , backgroundColor : '#3A9AB7'}}
                    onClick={() => {history.push('./recommender-2')}}
                    >
                        Continue
                    </Button>
                    <Button variant='outlined'
                    style={{color : '#3A9AB7' , padding : '8px 50px' , marginLeft : '20px' }}
                    onClick={() => {history.push('./recommender')}}
                    >
                    Back
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
    )
} 
