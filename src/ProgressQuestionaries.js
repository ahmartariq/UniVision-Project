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
import {IconButton , TextField , ToggleButtonGroup ,ToggleButton , Button} from '@mui/material';
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

const mdTheme = createTheme();

export const ProgressQuestionaries = () => {

    const [alignment, setAlignment] = React.useState('web');

    const AlignmentChange = (event, newAlignment) => {
      setAlignment(newAlignment);
    };

    const [alignment1, setAlignment1] = React.useState('web');

    const AlignmentChange1 = (event, newAlignment) => {
      setAlignment1(newAlignment);
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
                  <Grid lg={12} md={12} sm={12}>
                  <h2 className='blue'>Progress Questionnaire</h2>
                  <p style={{marginTop: '30px'}}>Please answer the given questions about your admission progress. Your responses will be recorded.</p>
                  </Grid>
                  <Grid lg={6} md={6} sm={10} marginTop={'60px'}>
                      <p style={{marginBottom: '10px'}}>Name *</p>
                      <TextField variant="outlined" fullWidth required size='small'/>
                  </Grid>
                  <Grid lg={12} md={12} sm={12} container direction='row' marginTop = {'30px'}>
                        <p style={{display : 'flex' , alignItems : 'center'}}>Have your applied in any university?</p>
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
                  <Grid lg={12} md={12} sm={12} container direction='row' marginTop = {'10px'}>
                        <p style={{display : 'flex' , alignItems : 'center'}}>Are you facing any difficulty in Admission process?</p>
                        <ToggleButtonGroup sx = {{
                            color : '#1a1a1a',    
                        }}
                          value={alignment1}
                          exclusive
                          required
                          onChange={AlignmentChange1}
                          style={{marginLeft : '30px' }}
                        >
                          <ToggleButton style={{marginRight : '10px' , border : 'solid 1px #3A9AB7' , borderRadius : '10px' , width : '80px'}} value="World">Yes</ToggleButton>
                          <ToggleButton style={{marginRight : '10px' , border : 'solid 1px #3A9AB7' , borderRadius : '10px' , width : '80px'}} value="Asia">No</ToggleButton>
                        </ToggleButtonGroup>
                  </Grid>
                  <Grid  lg={6} md={6} sm={12}  style={{margin: '30px 0'}}>
                    <p style={{marginBottom: '10px'}}>What dificulty are you facing?</p>
                    <TextField variant="outlined" fullWidth required size='small'/>
                    <Button variant='contained'
                    style={{color : 'white' , padding : '8px 50px' , marginTop : '30px', backgroundColor : '#3A9AB7'}}
                    >
                        Continue
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
