import {React , useState,useCallback } from 'react';
import {Grid,TextField,IconButton,OutlinedInput,
  FormControl,InputLabel,FormControlLabel,
  Checkbox,FormGroup,Button , Container} from "@mui/material";
import Logo from './images/logo.png';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import Signin from './images/signin_pic.png';
import Monogram from './images/monogram.png';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { withStyles } from '@mui/styles';
import history from './history';
// import {signInWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import { getAuth, signInWithEmailAndPassword , onAuthStateChanged} from 'firebase/auth'
import {auth} from './firebase';


function App() {

  const checkBoxStyles = theme => ({
    root: {
      '&$checked': {
        color: '#3A9AB7',
      },
    },
    checked: {},
   })
   const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

  // const toDashboard = () => {
  //   history.push('/dashboard')
  // }
  const [values, setValues] = useState({
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
  const handleRemeber = (event)=>{
    setChecked(event.target.checked)
  }
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
        localStorage.setItem('username' , loginEmail); 
        localStorage.setItem('password' , loginPassword); 
        localStorage.setItem('rememberMe' , checked);
      history.push('./dashboard');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Grid lg={12} md={12} sm={12} xs={12} container direction={'row'} spacing={0}>
           <Grid lg={6} md={6} sm={12} xs={12} id="Signin_img" display={'flex'} justifyContent={'center'} alignItems={'center'} container direction={'column'}
           style={{paddingTop : '20px ' }}>
               <img  src={Logo} />
               <h3 style={{Color : 'white', fontWeight : '400' , color : 'white'}}>Slogan</h3>
                <img src={Signin} style={{marginTop : "30px" , width: '90%'}}/>
            </Grid>
            <Grid lg={6} md={6} sm={12} xs={12} container   display={'flex'} justifyContent={'center'} >
              <Grid lg={7} md={7} sm={7} xs={7}  display={'flex'} alignItems={'start'}  direction={'column'} sx={{paddingTop : '50px'}}>
                <img src={Monogram}/> <br/><br/>
                <h1 className='blue'>Welcome Back</h1>
                <p style={{fontSize : '20px'}}>Login to Continue</p>
                <InputLabel style={{marginTop : '80px' ,color : '#474747 '}}>Email Address</InputLabel>
                <TextField  fullWidth variant="outlined" required name='loginEmail'
                size='small' sx={{ marginBottom: 3}} value={loginEmail}
                onChange={(event) => {setLoginEmail(event.target.value)}}/>
                <InputLabel style={{color : '#474747 '}}>password</InputLabel>
                <FormControl variant="outlined" size='small' fullWidth
                name='loginPassword'
                onChange={(event) => {setLoginPassword(event.target.value);}}>
                  <OutlinedInput
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
                <p></p>
                <Container>
                <Grid lg={12} md={12} sm={12} xs={12}  display={'flex'} alignItems={'center'}>
                  <Grid lg={6} md={6} sm={12} xs={12}>
                    <FormGroup >
                      <FormControlLabel 
                      control={<CustomCheckbox />} 
                      checked={checked}
                      onChange={handleRemeber}
                      label="Remember me" 
                      style={{paddingTop : '5px' ,width : '151px'}} />
                    </FormGroup>
                  </Grid>
                  <Grid lg={6} md={6} sm={12} xs={12} display={'flex'} justifyContent={'right'} alignItems={'center'}>
                    <p
                    style={{ cursor : 'pointer'}}
                    onClick={() => {history.push('./forget-password')}}
                    >
                      Forgot Password ?
                    </p>
                  </Grid>
                </Grid>
                </Container>
                <Button variant='contained'
                fullWidth
                onClick={login}
                style={{color : 'white' , padding : '12px 45px' , margin: '30px 20px 0 0', backgroundColor : '#3A9AB7'}}s
                >
                  Continue
                </Button>
                <p style={{margin : '60px 0 30px 0 ' , display : 'flex' , alignSelf : 'center'}}>Or continue with</p>
                <Button variant='contained'
                fullWidth
                style={{color : '#474747' , padding : '12px 45px' ,backgroundColor : '#E3ECED'}}
                
                >
                 {<GoogleIcon style={{paddingRight : '40px'}}/>} Continue with Google
                </Button>
                <Button variant='contained'
                fullWidth
                style={{color : '#474747' , padding : '12px 45px' , margin: '30px 20px 0 0', backgroundColor : '#E3ECED'}} 
                >
                  {<FacebookIcon style={{paddingRight : '40px'}}/>} Continue with Facebook
                </Button>
              </Grid>

            </Grid>
        </Grid>
  );
}

export default App;
