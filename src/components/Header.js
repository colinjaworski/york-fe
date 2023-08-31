import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import {makeStyles} from '@mui/styles'
import {styled} from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    stylishText: {
        fontFamily: 'Rubik Moonrocks',
        fontSize: '50px',
        lineHeight: '1',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    },
}));

const HeaderContainer = styled('div') ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
});


const Header = ({ loginStatus }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position ="static">
            <Toolbar>
            <HeaderContainer>
            <Typography variant="h6">
                <span className ={classes.stylishText}>Games</span>
            </Typography>
                <IconButton edge= "end" color="inherit" aria-label="menu" onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
        <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                {loginStatus === 'loggedIn' && <MenuItem onClick={handleClose} component={Link} to="/logout">Logout</MenuItem>}
            </Menu>
            </HeaderContainer>
        </Toolbar>
        </AppBar>
    );
}

export default Header;