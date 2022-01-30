import * as React from 'react';
import { styled, createTheme, ThemeProvider} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Logo from './images/logo.png';
import Monogram from './images/monogram.png';
import {IconButton , Button , TextField , InputLabel , Box , Grid} from '@mui/material';
import history from './history';
import Signin from './images/signin_pic.png';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



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

export const ForgetPassword = () => {

    const [open, setOpen] = React.useState(true);
    
    const toggleDrawer = () => {
      setOpen(!open);
    };
    return (
        <Grid lg={12} md={12} sm={12} xs={12} container direction={'row'} spacing={0}>
           <Grid lg={6} md={6} sm={12} xs={12} id="Signin_img" display={'flex'} justifyContent={'center'} alignItems={'center'} container direction={'column'}
           style={{padding : '20px 0 0 15px ' }}>
              <IconButton 
              style={{alignSelf : 'start' , backgroundColor : 'white' , height : '35px'}}
              size='small'
              onClick={()=>{history.push('./')}}
              >
                <ArrowBackIosIcon style={{color : '#3A9AB7' , paddingLeft : '5px'}}/>
              </IconButton>
               <img  src={Logo} />
               <h3 style={{Color : 'white', fontWeight : '400' , color : 'white'}}>Slogan</h3>
                <img src={Signin} style={{marginTop : "30px"}}/>
            </Grid>
            <Grid lg={6} md={6} sm={12} xs={12} container   display={'flex'} justifyContent={'center'} >
              <Grid lg={7} md={7} sm={10} xs={10}  display={'flex'} alignItems={'start'}  direction={'column'} sx={{paddingTop : '50px'}}>
                <img src={Monogram}/> <br/><br/>
                <h1 className='blue'>Forget Password</h1>
                <p style={{fontSize : '20px'}}>Enter email to send reset link</p>
                <InputLabel style={{marginTop : '80px' ,color : '#474747 '}}>Email Address</InputLabel>
                <TextField  fullWidth variant="outlined" required size='small' sx={{ marginBottom: 3}}/>
                <Button variant='contained'
                fullWidth
                style={{color : 'white' , padding : '10px 45px' , margin: '30px 20px 0 0', backgroundColor : '#3A9AB7'}}
                
                >
                  Continue
                </Button>
                <p style={{display : 'flex' , alignSelf : 'center' , marginTop : '10px'}}>Haven't received link? 
                  <span className='blue' 
                  style={{paddingLeft : '5px' , cursor : 'pointer'}}> 
                    Resend
                  </span>
                </p>
              </Grid>

            </Grid>
        </Grid>
    )
}