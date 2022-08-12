import React from "react"
import {  Toolbar, Box, IconButton, Typography } from "@mui/material";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AppBar from '@mui/material/AppBar';
import {AccountCircle} from "@mui/icons-material";

const AppBarComponent = (props) => {
    return (
        <Box sx={{ flexGrow: 1 }} minHeight= "70px">
            <AppBar position="static">
                <Toolbar>
                    <Box display= "flex" justifyContent= "space-between" alignItems= "center" width= {1}>
                        <Box display= "flex" alignItems= "center">
                            <Box display= "flex" alignItems= "center">
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="open drawer"
                                >
                                    <ThunderstormIcon />
                                </IconButton>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    sx={{
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'white',
                                        textDecoration: 'none',
                                        mr: 2
                                    }}
                                >
                                    INVIGRID
                                </Typography>
                            </Box>
                        </Box>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AppBarComponent

