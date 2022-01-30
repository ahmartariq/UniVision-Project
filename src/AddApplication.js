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
import {IconButton , Button , TextField , InputLabel, MenuItem, FormControl , Select} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Logo from './images/logo.png';
import Replace from './images/replace.png';



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
const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#FFFFFF',
        contrastText: '#FFFFFF',
      },
      neutralinverse: {
        main: '#081C15',
        contrastText: '#FFFFFF',
      },
    },
  });

const Input = styled('input')({
    display: 'none',
  });
export const AddApplication = () => {

    const [university, setuniversity] = React.useState('');
    const handleuniversityChange = (event) => {
      setuniversity(event.target.value);
    };
  const color = '#3A9AB7';
    const [value, setValue] = React.useState(null);
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
          <ThemeProvider theme={theme}>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={0}>
             <Grid lg={12} md={12} sm={12} xs={12}>
                <h1 style={{fontSize: '30px', marginBottom : '15px'}} className='blue'>New Meeting</h1>
                <p>If you have applied to any university, kindly provide the application details below.</p>
                <Grid lg={12} md={12} sm={12} xs={12} marginTop='30px' direction={'column'} display={'flex'}>
                <InputLabel>University name</InputLabel>
                <FormControl required sx={{ minWidth: 120 }} size='small'>       
                          <Select
                            value={university}          
                            onChange={handleuniversityChange}
                            sx = {{width : '457px'}}
                          >
                            <MenuItem value="">
                              <em>Select University</em>
                            </MenuItem>
                            <MenuItem value={10}>Harvard University</MenuItem>
                            <MenuItem value={20}>Stanford University</MenuItem>
                            <MenuItem value={30}>University of Oxford</MenuItem>
                          </Select>
                        </FormControl>
                        <br/>
                <InputLabel>Date of application</InputLabel>
                {/* <TextField variant="outlined" required size='small' sx={{ marginBottom: 3, width: '50ch'}}/> */}
                <LocalizationProvider dateAdapter={AdapterDateFns} >
                  <DatePicker 
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField sx={{width: '50ch' , svg : {color}}} size='small' {...params} />}
                  />
                </LocalizationProvider>
                <InputLabel style={{marginTop: '40px'}}>Time Slot</InputLabel>
                <TextField variant="outlined" required size='small' sx={{ marginBottom: 3, width: '50ch'}}/>
                <InputLabel>Proof of application</InputLabel>
                <br/>
                <label htmlFor="contained-button-file" style={{width : '457px' , height : '200px'}}>
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="contained" component="span" 
                    style={{width : '457px' , height : '200px',border:'2px dashed #3A9AB7'}}
                    color='neutral'
                    >
                        <Grid container alignItems={'center'} direction={'column'}>
                        <img src={Replace} alt='replace'/><br/>
                        <p style={{color : '#081C15'}}>Upload Document</p>
                        </Grid>
                    </Button>
                </label>
                <br/>
                  <Button variant='contained'
                  style={{textTransform : 'capitalize' ,width: '25ch',color : 'white' , padding : '10px 30px' , backgroundColor : '#3A9AB7'}}
                  
                  >
                    Submit
                  </Button>
                </Grid>
             </Grid>
            </Grid>
          </Container>
          </ThemeProvider>
        </Box>
      </Box>
    )
}