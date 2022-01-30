import * as React from 'react';
import { styled, createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { mainListItems } from './NavList';
import Logo from './images/logo.png';
import { MenuItem , Menu , Paper , ToggleButtonGroup , ToggleButton} from '@mui/material';
import 'react-calendar/dist/Calendar.css'
import history from './history';
import Banner from './images/banner.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import uni from './images/mainUni.png';
import Choose from './images/choose.png';
const drawerWidth = 240;


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
const theme = createTheme({
  palette: {
    primary: {
      main: '#3A9AB7',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },

    secondary: {
      light: '#0066ff',
      main: '#ffffff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
});

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
      bosmizing: 'border-box',
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

export const UniversitiesCompare = () => {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
      setOpen(!open);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
      // handleMobileMenuClose();
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
          <ThemeProvider theme={theme}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={0}>
                <Grid lg={12} md={12} sm={12} xs={12} container>
                    <Grid lg={12} md={12} sm={12} xs={12}>
                    <Grid  lg={12} md={12} sm={12} xs={12}>
                          <img src={Banner} width={'100%'}/>
                      </Grid>
                      <Grid  lg={2} md={2} sm={3} xs={5} container justifyContent={'center'} alignItems={'center'} display={'flex'}>
                        <Paper style={{borderRadius : '100%' , padding : '5px' ,position : 'relative' , top : '-80px' }} className='universityLogo'>
                            <img src={uni} className='Logopic'/>
                        </Paper>
                      </Grid>
                    </Grid>
                    <Grid lg={12} md={12} sm={12} xs={12}>
                      <h1 className='blue' style={{marginTop : '0'}}>Harvard University</h1>
                      <p><LocationOnIcon />Cambridge, United States</p>
                    </Grid>
                    <Grid lg={12} md={12} sm={12} xs={12} marginTop= {5} marginBottom={5}  container>
                      <Grid lg={7} md={7} sm={12} xs={12} marginBottom={5}>
                        <p>Established in 1636, Harvard is the oldest higher education institution in the United States,
                           and is widely regarded in terms of its influence, reputation, and academic pedigree as a leading 
                           university in not just the US but also the world. </p>
                      </Grid>
                      <Grid lg={5} md={5} sm={12} xs={12} container display={'flex'} justifyContent={'center'}>
                        <Grid lg={4} md={12} sm={12} xs={12}
                        display={'flex'}
                        alignItems={'center'}
                        direction={'column'}
                        marginBottom={2}
                        style={{backgroundColor: '#F5F5F5' , padding : '20px 2px 20px 2px' , borderRadius : '10px' , marginRight : '10px' }}
                        >
                          <h1 className='blue' style={{fontSize : '45px'}}>#5</h1>
                          <p style={{fontSize : '10px'}}>QS World Ranking 2022</p>
                        </Grid>
                        <Grid lg={6} md={12} sm={12} xs={12}
                        display={'flex'}
                        justifyContent={'center'}
                        direction={'column'}
                        style={{backgroundColor: '#F5F5F5' , padding : '20px 2px 20px 15px' , borderRadius : '10px'  }}
                        >
                          <p style={{fontSize : '15px'}}><LanguageIcon className='blue' style={{marginRight : '15px'}}/> www.harvad.edu</p>
                          <p style={{fontSize : '15px'}}><PhoneIcon className='blue' style={{marginRight : '15px'}}/> +1 550 613 0322</p>
                          <p style={{fontSize : '15px'}}><MailOutlineIcon className='blue' style={{marginRight : '15px'}}/> contact@harvard.edu</p>
                          <p style={{fontSize : '15px'}}><LinkedInIcon className='blue' style={{marginRight : '15px'}}/>www.linkedin.edu/harvard</p>
                        </Grid>
                      </Grid>    
                    </Grid>
                    <Grid lg={12} md={12} sm={12} xs={12}>
                      <ToggleButtonGroup 
                      sx = {{color : '#1a1a1a', }}
                      value={alignment}
                      exclusive
                      color='primary'
                      onChange={handleChange}
                      style={{marginLeft : '30px' }}
                      >
                        <ToggleButton onClick={()=> {history.push('./University-general')}} style={{textTransform : 'capitalize' , backgroundColor: '#f5f5f5' , marginRight : '10px'  , borderRadius : '6px 6px 0 0' , padding : '5px 20px' , fontSize : '16px'}} value="General">General</ToggleButton>
                        <ToggleButton onClick={()=> {history.push('./University-student-life')}} style={{textTransform : 'capitalize' , backgroundColor: '#f5f5f5' , marginRight : '10px'  , borderRadius : '6px 6px 0 0' , padding : '5px 20px' , fontSize : '16px'}} value="Student-Life">Student Life</ToggleButton>
                        <ToggleButton onClick={()=> {history.push('./University-visa-information')}} style={{textTransform : 'capitalize' , backgroundColor: '#f5f5f5' , marginRight : '10px'  , borderRadius : '6px 6px 0 0' , padding : '5px 20px' , fontSize : '16px'}} value="Visa-Information">Visa Information</ToggleButton>
                        <ToggleButton onClick={()=> {history.push('./University-programs')}} style={{textTransform : 'capitalize' , backgroundColor: '#f5f5f5' , marginRight : '10px'  , borderRadius : '6px 6px 0 0' , padding : '5px 20px' , fontSize : '16px'}} value="Programs">Programs</ToggleButton>
                        <ToggleButton onClick={()=> {history.push('./University-finance')}} style={{textTransform : 'capitalize' , backgroundColor: '#f5f5f5' , marginRight : '10px'  , borderRadius : '6px 6px 0 0' , padding : '5px 20px' , fontSize : '16px'}} value="Finances">Finances</ToggleButton>
                        <ToggleButton onClick={()=> {history.push('./University-post-graduation')}} style={{textTransform : 'capitalize' , backgroundColor: '#f5f5f5' , marginRight : '10px'  , borderRadius : '6px 6px 0 0' , padding : '5px 20px' , fontSize : '16px'}} value="Post-Graduation">Post Graduation</ToggleButton>
                        <ToggleButton onClick={()=> {history.push('./University-compare')}} style={{textTransform : 'capitalize' , backgroundColor: '#f5f5f5' , marginRight : '10px'  , borderRadius : '6px 6px 0 0' , padding : '5px 20px' , fontSize : '16px'}} value="Compare">Compare</ToggleButton>
                        <ToggleButton onClick={()=> {history.push('./University-summary')}} style={{textTransform : 'capitalize' , backgroundColor: '#f5f5f5' , marginRight : '10px'  , borderRadius : '6px 6px 0 0' , padding : '5px 20px' , fontSize : '16px'}} value="Summary">Summary</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                    <Grid lg={12} md={12} sm={12} xs={12} container columnGap={6} rowGap={2}>
                      <Grid lg={12} md={12} sm={12} xs={12}><h4 className='blue' style={{fontSize : '24px' , marginBottom : '0'}}>Compare Universities</h4></Grid>
                      <Grid lg={12} md={12} sm={12} xs={12}>
                        <p style={{fontSize : '24px', marginBottom : '15px'}}>Select the universities to compare</p>
                      </Grid>
                    </Grid>
                    <Grid lg={12} md={12} sm={12} xs={12} container columnGap={6} rowGap={3}>
                        <Grid lg={6} md={6} sm={12} xs={12} container alignItems={'center'} justifyContent={'center'} direction={'column'}
                         style={{padding : '30px 8px',backgroundColor : '#F5F5F5' , borderRadius : '10px'}}>
                          <img src={uni} alt='uni logo'/>
                          <h4 style={{fontSize : '30px', marginBottom : '5px'}} className='blue'>Harvard University</h4>
                          <p style={{fontSize : '19px'}}><LocationOnIcon />Cambridge, United States</p>
                        </Grid>
                        <Grid lg={5.5} md={6} sm={12} xs={12} container alignItems={'center'} justifyContent={'center'} direction={'column'}
                         style={{cursor : 'pointer' ,padding : '30px 8px',border : 'dashed 2px #3A9AB7'  , borderRadius : '10px'}}
                         onClick={()=> {history.push('./University-general')}}
                         >
                          <img src={Choose} alt='choose logo'/>
                          <p style={{fontSize : '20px' , marginTop : '30px'}} className='blue'>Select the university you want to compare</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
          </Container>
          </ThemeProvider>
        </Box>
      </Box>
    </ThemeProvider>
    )
} 