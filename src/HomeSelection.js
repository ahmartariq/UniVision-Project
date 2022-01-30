import React , {Component} from "react";
import { Paper } from "@mui/material";
import UniData from './TempSelect'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {BsBookmarkStarFill} from 'react-icons/bs';
import {Grid , IconButton} from '@mui/material';

const uniCard = (props) => {
    return (
        <div>
       <h1>{props.uniName}</h1>
       <p>{props.location}</p>
        </div>
    )
}

const nUniCard = (val) => {
    <uniCard 
    imgsrc = {val.imgsrc}
    uniName = {val.uniName}
    location = {val.location}
    />
} 

export default class MultipleItems extends Component {
    render() {
      const settings = {
        p: 2,
        marginTop : 2,
        display: 'flex',
        flexDirection: 'column',
        height: 80,
        width : '100%'
      };
      return (
          <Paper sx = {settings} >
            {UniData.map(nUniCard)}
          </Paper>
      )
    }
  }