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
import {IconButton , Button} from '@mui/material';
import history from './history';
import NavigateNext from '@mui/icons-material/NavigateNext';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Meeting from './images/meetings.png';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


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

export const Meetings = () => {


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
              <Grid lg={12} md={12} sm={12} container>
                <Grid lg={6} md={6} sm={6}>
                  <h2 className='blue'>Meetings</h2>
                </Grid>
                <Grid lg={6} md={6} sm={6} container direction='row' alignItems='center' justifyContent='flex-end'>
                  <p style={{marginRight : '10px'}}>Sort</p>
                  <FilterAltOutlinedIcon style={{color : '#3A9AB7' , cursor : 'pointer'}}/>
                </Grid>
              </Grid>
              <Grid lg={12} md={12} sm={12} container alignItems='center' style={{padding : '10px 15px' , backgroundColor : '#F5F5F5' , borderRadius : '10px'}}>
                <Grid lg={1} md={1} sm={1} container>
                    <div><img src={Meeting} style={{width: '50%'}}/></div>
                </Grid>
                <Grid lg={5} md={5} sm={5}>
                    <h4 style={{margin : '0'}}>Progress Discussion</h4>
                    <p>With School Consellor</p>
                </Grid>
                <Grid lg={5} md={5} sm={5}>
                    <h4 style={{margin : '0'}}>Meeting Time</h4>
                    <p>27 August 2021</p>
                </Grid>
                <Grid lg={1} md={1} sm={1}  justifyContent='flex-end' display = 'flex'>
                    <IconButton
                    style={{backgroundColor : '#3A9AB7' , color : 'white' , marginLeft : '18px'}}
                    >
                      <CalendarTodayIcon />
                    </IconButton>
                    <IconButton
                    style={{backgroundColor : '#3A9AB7' , color : 'white' , marginLeft : '18px'}}
                    onClick={() => {history.push('./meeting-details')}}
                    >
                      <NavigateNext />
                    </IconButton>
                </Grid>
              </Grid>
              <Grid lg={12} md={12} sm={12} xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'} container
              style={{marginTop: '30px'}}>
                <Button variant='contained'
                    style={{color : 'white' , padding : '8px 45px' , margin: '30px 20px 0 0', backgroundColor : '#3A9AB7'}}
                    onClick={()=>{history.push('./new-meeting')}}
                    >
                        New Meeting
                    </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
    )
} 
