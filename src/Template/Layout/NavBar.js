import React, { useState } from 'react';
import { 
    makeStyles,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@material-ui/core';
import { 
    Face as FaceIcon
} from '@material-ui/icons';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [title,setTitle] = useState();
  const history = useHistory();
  const menus = [
      {
          text : 'Test-One',
          path : '/test-one',
      },
      {
          text : 'Test-Two',
          path : '/test-two',
      },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <FaceIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          {
              menus.map((v,i) => <Button key={i} color="inherit" onClick={() => { setTitle(v.text); history.push(v.path)}}>{v.text}</Button>)
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}