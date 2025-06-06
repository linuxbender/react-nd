import {AppBar, Box, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography} from '@mui/material';
import './App.css'
import {NavLink, Outlet} from 'react-router';

function App() {

    const drawerWidth = 240;

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component={NavLink} to="/"
                                sx={{color: 'white', textDecoration: 'none', flexGrow: 1}}>
                        Kata 04
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
                }}
            >
                <Toolbar/>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/" end>
                            <ListItemText primary="Home"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/role">
                            <ListItemText primary="Role"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to="/react-query">
                            <ListItemText primary="react-query + Zustand"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default App
