import React from 'react';
import { AppBar, Typography, Toolbar, MenuItem, Container } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';
import NavbarList from './NavbarList';
import "./Navbar.scss";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <AppBar position="static" color="transparent" className='appBar' >
            <Container maxWidth="xl">
                <Toolbar >
                    <Grid container spacing={2}>
                        <Grid item xs={4} md={4} sm={4} className="nav-link">
                            {NavbarList.map(({ name, path }) => {
                                return (
                                    <MenuItem key={name} onClick={() => navigate(path)}>
                                        <Typography className="navLink">
                                            {name}
                                        </Typography>
                                    </MenuItem>)
                            })}
                        </Grid>
                        <Grid item xs={6} md={6} sm={6} className="search-bar">
                            <SearchBar />
                        </Grid>
                        <Grid item xs={2} md={2} sm={2} className="profile"></Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    )
}