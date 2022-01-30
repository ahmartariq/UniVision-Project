import  {React , useState} from 'react';
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
import {IconButton , Select, Button , FormControl , MenuItem , OutlinedInput } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
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

const names = [
    'Science',
    'Programming',
    'Games',
    'Maths',
    'English',
  ];

export const UserInterests = () => {

    const [Interest, setInterest] = useState([]);
    const [open, setOpen] = useState(true);
    
    const selectChange = (event) => {
        const {
          target: { value },
        } = event;
        setInterest(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };

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
                    <h1 className='blue'>User Interests</h1>
                    <h2 className='blue' style={{fontWeight : '200'}}>User Interests</h2>
                    <p>Your  interests will be used  by the recommender system to recommend you suitable university options.</p>
                    <Grid lg={12} md={12} sm={12} xs={12} style={{marginTop : '50px'}}>
                        <Button variant="contained"  style={{backgroundColor : '#F5F5F5' , color : '#474747' , marginRight : '20px'}}
                        endIcon={<IconButton style={{backgroundColor : '#F6465E' , padding : '5px'}} ><CloseIcon  style={{color : '#ffffff' , fontSize : '10px'}}/></IconButton>}>
                          Programming
                        </Button>
                    </Grid>
                    <Grid lg={12} md={12} sm={12} xs={12} style={{marginTop : '50px'}} direction='column'>
                        <h2 className='blue' style={{fontWeight : '200'}}>User Interests</h2>
                        <p>Your  interests will be used  by the recommender system to recommend you suitable university options.</p>
                        <br/>
                        {/* <FormControl sx={{ m: 1, minWidth: 250 }}
                         size='small'
                         value={personName}
                         input={<OutlinedInput />}
                         displayEmpty
                         renderValue={(selected) => {
                            if (selected.length === 0) {
                              return <em>helladso</em>;
                            }
                          }}
                         >
                          <Select
                            // onChange={handleChange}
                          >
                            <MenuItem disabled value="">Placeholder</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl> */}
                        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                            <Select
                              displayEmpty
                              value={Interest}
                              onChange={selectChange}
                              renderValue={(selected) => {
                                if (selected.length === 0) {
                                  return <em>Select Interest</em>;
                                }
                                return selected.join(', ');
                              }}
                              inputProps={{ 'aria-label': 'Without label' }}
                            >
                              {names.map((name) => (
                                <MenuItem
                                  key={name}
                                  value={name}
                                  
                                >
                                  {name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        <br/>
                        <Button variant="contained"  style={{backgroundColor : '#3A9AB7' , color : '#ffffff' , margin : '20px 0 0 8px'}}>
                          Add interest
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    )
} 
