import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import RecommenderIcon from '@mui/icons-material/PlaylistAddCheck';
import {BsBookmarkStarFill} from 'react-icons/bs';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { NavLink } from 'react-router-dom';
import history from './history';

export const mainListItems = (
    <div>
        <ListItem button onClick={() => {history.push('./dashboard')}}>
          <ListItemIcon>
            <HomeIcon style={{color : '#ffffff'}}/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => {history.push('./universities')}}>
          <ListItemIcon>
            <SchoolIcon style={{color : '#ffffff'}}/>
          </ListItemIcon>
          <ListItemText primary="Universities" />
        </ListItem>
        <ListItem button onClick={() =>{history.push('./recommender')}}>
          <ListItemIcon>
            <RecommenderIcon style={{color : '#ffffff'}}/>
          </ListItemIcon>
          <ListItemText primary="Recommender" />
        </ListItem>
        <ListItem button onClick={() =>{history.push('./watchlist')}}>
          <ListItemIcon>
            <BsBookmarkStarFill style={{color : '#ffffff'}}/>
          </ListItemIcon>
          <ListItemText primary="Watchlist" />
        </ListItem>
        <ListItem button onClick={() =>{history.push('./more')}}>
          <ListItemIcon>
            <MoreHorizIcon style={{color : '#ffffff'}}/>
          </ListItemIcon>
          <ListItemText primary="More"/>
        </ListItem>
        
    </div>
  );