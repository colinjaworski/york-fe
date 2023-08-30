import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import {Link} from 'react-router-dom';


const Header = ({ loginStatus }) => {
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
            <Typography variant="h6" style={{ flexGrow: 1}}>
            </Typography>
                <IconButton color="inherit" aria-label="menu" onClick={handleClick}>
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
        </Toolbar>
        </AppBar>
    );
}

export default Header;