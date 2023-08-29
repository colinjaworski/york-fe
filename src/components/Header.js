import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import {Link} from 'react-router-dom';


const Header = () => {
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


        {/* <div className = "header">
            <nav>
                <ul className = "links">
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/login">Log In</Link>
                    </li>
                    <li>
                        <Link to ="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </div> */}
        <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/login">Login</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to="/register">Register</MenuItem>
            </Menu>
        </Toolbar>
        </AppBar>
    );
}

export default Header;