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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { mainListItems } from './NavList';
import Logo from './images/logo.png';
import { MenuItem , Menu } from '@mui/material';
import 'react-calendar/dist/Calendar.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import history from './history';
import {Badge , Grid, Container , InputLabel ,TextField, Button,FormControl,OutlinedInput} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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

function handleOnChange(value) {
  this.setState({
     phone: value
  });
}
export const SecuritySettings = () => {
    
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
      
      
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const [values2, setValues2] = React.useState({
        password: '',
        showPassword: false,
      });

      const handleClickShowPassword2 = () => {
        setValues2({
          ...values2,
          showPassword: !values2.showPassword,
        });
      };

      const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
      };

      const handleChange2 = (prop) => (event) => {
        setValues2({ ...values2, [prop]: event.target.value });
      };

      const [values1, setValues1] = React.useState({
        password: '',
        showPassword: false,
      });

      const handleClickShowPassword1 = () => {
        setValues1({
          ...values1,
          showPassword: !values1.showPassword,
        });
      };

      const handleMouseDownPassword1 = (event) => {
        event.preventDefault();
      };

      const handleChange1 = (prop) => (event) => {
        setValues1({ ...values1, [prop]: event.target.value });
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
                <Grid lg={12} md={12} sm={12} xs={12} container direction={'row'} columnGap={3}>
                    <Grid lg={3} md={3} sm={12} xs={12} display={'flex'} direction={'column'}
                        style={{borderRight : '1px solid  #3A9AB7' , paddingRight : '10px'}} className='noLine'>
                          <Grid lg={12} md={12} sm={12} xs={12}><h1 style={{fontSize: '30px' , marginBottom : '50px'}} className='blue'>Settings</h1></Grid>
                          <Grid lg={12} md={12} sm={12} xs={12} style={{marginBottom : '20px' , cursor : 'pointer'}} 
                          container direction={'row'} justifyContent={'center'} alignItems={'center'}>
                            <Grid lg={10} md={10} sm={10} xs={10} style={{marginBottom : '20px'}}
                            onClick={()=>{history.push('account-settings')}}>
                              <h4 style={{margin : '0 0  5px 0' , fontSize : '26px'}} className='blue'>Account Settings</h4>
                              <p style={{fontSize: '18px'}}>Change Personal Info</p>
                            </Grid>
                            <Grid lg={2} md={2} sm={2} xs={2}>
                              <NavigateNextIcon color='primary'/>
                            </Grid>
                          </Grid>
                          <Grid lg={12} md={12} sm={12} xs={12} style={{marginBottom : '20px' , cursor : 'pointer'}} 
                          container direction={'row'} justifyContent={'center'} alignItems={'center'}
                          onClick={()=>{history.push('security-settings')}}>
                            <Grid lg={10} md={10} sm={10} xs={10} style={{marginBottom : '20px'}}>
                            <h4 style={{margin : '0 0  5px 0', fontSize : '26px'}} className='blue'>Security Settings</h4>
                            <p style={{fontSize: '18px'}}>Change Password</p>
                            </Grid>
                            <Grid lg={2} md={2} sm={2} xs={2}>
                              <NavigateNextIcon color='primary'/>
                            </Grid>
                          </Grid>
                          <Grid lg={12} md={12} sm={12} xs={12} style={{marginBottom : '20px' , cursor : 'pointer'}} 
                          container direction={'row'} justifyContent={'center'} alignItems={'center'}
                          onClick={()=>{history.push('preferences')}}>
                            <Grid lg={10} md={10} sm={10} xs={10} style={{marginBottom : '20px'}}>
                            <h4 style={{margin : '0 0  5px 0', fontSize : '26px'}} className='blue'>Preferences</h4>
                            <p style={{fontSize: '18px'}}>General Preferences</p>
                            </Grid>
                            <Grid lg={2} md={2} sm={2} xs={2}>
                              <NavigateNextIcon color='primary'/>
                            </Grid>
                          </Grid>
                          <Grid lg={12} md={12} sm={12} xs={12} style={{marginBottom : '20px' , cursor : 'pointer'}} 
                          container direction={'row'} justifyContent={'center'} alignItems={'center'}>
                            <Grid lg={10} md={10} sm={10} xs={10} style={{marginBottom : '20px'}}>
                            <h4 style={{margin : '0 0  5px 0', fontSize : '26px'}} className='blue'>About</h4>
                            <p style={{fontSize: '18px'}}>Privacy Policy</p>
                            </Grid>
                            <Grid lg={2} md={2} sm={2} xs={2}>
                              <NavigateNextIcon color='primary'/>
                            </Grid>
                          </Grid>
                    </Grid>
                    <Grid lg={8.5} md={8.5} sm={12} xs={12} display={'flex'} direction={'column'} rowGap={6}>
                        <Grid lg={12} md={12} sm={12} xs={12}><h1 style={{fontSize: '30px', margin : '0'}}>Security Settings</h1></Grid>
                        <Grid lg={12} md={12} sm={12} xs={12}>
                            <p className='blue' style={{fontSize: '21px', margin : '0'}}>Reset Password</p>
                            <p style={{fontSize: '18px', margin : '0'}}>The password must be 8 character long and must include at least one special character and at least one number. </p>
                        </Grid>
                      <Grid lg={12} md={12} sm={12} xs={12} container direction={'row'} columnGap={6}>
                        <Grid lg={5.5} md={5.5} sm={12} xs={12} >
                            <InputLabel>Current password</InputLabel>
                            <FormControl variant="outlined" size='small' fullWidth>
                              <OutlinedInput
                              id="outlined-adornment-password"
                              type={values.showPassword ? 'text' : 'password'}
                              value={values.password}
                              onChange={handleChange('password')}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                  >
                                    {values.showPassword ? <VisibilityOff style={{color : '#3A9AB7'}}/> : <Visibility style={{color : '#3A9AB7'}}/>}
                                  </IconButton>
                                </InputAdornment>
                              }
                              />
                            </FormControl>
                            <br/><br/>
                          <InputLabel>New password</InputLabel>
                            <FormControl variant="outlined" size='small' fullWidth>
                              <OutlinedInput
                              id="outlined-adornment-password"
                              type={values1.showPassword ? 'text' : 'password'}
                              value={values1.password}
                              onChange={handleChange1('password')}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword1}
                                  onMouseDown={handleMouseDownPassword1}
                                  edge="end"
                                  >
                                    {values.showPassword ? <VisibilityOff style={{color : '#3A9AB7'}}/> : <Visibility style={{color : '#3A9AB7'}}/>}
                                  </IconButton>
                                </InputAdornment>
                              }
                              />
                            </FormControl>
                            <br/><br/>
                          <InputLabel>Repeat new password</InputLabel>
                          <FormControl variant="outlined" size='small' fullWidth>
                              <OutlinedInput
                              id="outlined-adornment-password"
                              type={values2.showPassword ? 'text' : 'password'}
                              value={values2.password}
                              onChange={handleChange2('password')}
                              endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword2}
                                  onMouseDown={handleMouseDownPassword2}
                                  edge="end"
                                  >
                                    {values.showPassword ? <VisibilityOff style={{color : '#3A9AB7'}}/> : <Visibility style={{color : '#3A9AB7'}}/>}
                                  </IconButton>
                                </InputAdornment>
                              }
                              />
                            </FormControl>
                            <br/><br/>
                        </Grid>
                      </Grid>
                      <Grid lg={12} md={12} sm={12} xs={12}>
                        <Button variant='contained'
                        style={{color : 'white',   backgroundColor : '#3A9AB7' , padding : '7px 40px'}}
                        size='large'
                        >
                            Save Changes
                        </Button>
                        
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