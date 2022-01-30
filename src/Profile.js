import * as React from 'react';
import { styled} from '@mui/material/styles';
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
import { mainListItems } from './NavList';
import Logo from './images/logo.png';
import Dp from './images/dp.png';
import {IconButton , Avatar, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AddIcon from '@mui/icons-material/Add';
import history from './history';


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


export const Profile = () => {


    const [open, setOpen] = React.useState(true);
    
    const toggleDrawer = () => {
      setOpen(!open);
    };
    return (
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
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon style={{color : '#3A9AB7'}}/>
              </Badge>
            </IconButton>
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
              <Grid lg = {12} md={12} sm={12} xs={12}>
                  <h1 className='blue'>User Profile</h1>
                  <Grid lg = {12} md = {12} sm={12} xs={12} container display='flex'
                    style={{padding : '25px' , borderRadius : '10px', marginBottom : '100px'}}>
                      <Grid lg={4} md={4} sm={12} xs={12} display='flex' alignItems='center' justifyContent='center'
                      style={{borderRight : '1px solid  #3A9AB7' , paddingRight : '10px'}} className='noLine'>
                        <Avatar alt="Remy Sharp" src={Dp}
                        sx={{ width: 250, height: 250 }}
                        />
                    </Grid>
                    <Grid lg={7} md={7} sm={12} xs={12} style={{paddingLeft: '30px'}} container display='flex' direction='row'>
                        <Grid lg={12} md={12} sm={12} xs={12} style={{padding: '20px 0'}}container direction='row'>
                            <Grid lg={6} md={6} sm={6} xs={6}>
                                <p className='blue'>name</p>
                            </Grid>
                            <Grid lg={6} md={6} sm={6} xs={6}>
                                <p>Ahmad Khan</p>
                            </Grid>
                        </Grid>
                        <Grid lg={12} md={12} sm={12} xs={12}  style={{padding: '20px 0'}} container direction='row'>
                            <Grid lg={6} md={6} sm={6} xs={6}>
                                <p className='blue'>Email</p>
                            </Grid>
                            <Grid lg={6} md={6} sm={6} xs={6}>
                                <p>Ahmad123@gmail.com</p>
                            </Grid>
                        </Grid>
                        <Grid lg={12} md={12} sm={12} xs={12}  style={{padding: '20px 0'}} container direction='row'>
                            <Grid lg={6} md={6} sm={6} xs={6}>
                                <p className='blue'>Phone Number</p>
                            </Grid>
                            <Grid lg={6} md={6} sm={6} xs={6}>
                                <p>+971-2346643</p>
                            </Grid>
                        </Grid>
                        <Grid lg={12} md={12} sm={12} xs={12}  style={{padding: '20px 0'}} container direction='row'>
                            <Grid lg={6} md={6} sm={6} xs={6}>
                                <p className='blue'>Account Type</p>
                            </Grid>
                            <Grid lg={6} md={6} sm={6} xs={6}>
                                <p>Account Type</p>
                            </Grid>
                        </Grid>
                    </Grid>
                  </Grid>
                  <Grid lg={12} md={12} sm={12} xs={12}>
                    <h1 style={{fontWeight : '200'}} className='blue'>Interests</h1>
                    <Button variant="contained"  style={{backgroundColor : '#F5F5F5' , color : '#474747' , marginRight : '20px'}}
                    endIcon={<IconButton style={{backgroundColor : '#F6465E' , padding : '5px'}} ><CloseIcon  style={{color : '#ffffff' , fontSize : '10px'}}/></IconButton>}>
                      Programming
                    </Button>
                    <IconButton size='small' style={{backgroundColor : '#3A9AB7'}}
                    onClick={() => {history.push('./user-interests')}}>
                        <AddIcon style={{color : '#ffffff' }}/>
                    </IconButton>
                  </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    )
} 
