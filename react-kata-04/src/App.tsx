import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import {Extension, Group, Home, Menu as MenuIcon} from '@mui/icons-material';
import {NavLink, Outlet} from 'react-router';
import {useState} from 'react';

function App() {
    const drawerWidth = 240;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLinkClick = () => {
        if (isMobile) {
            handleDrawerToggle();
        }
    }
    const drawer = (
        <Box sx={{textAlign: 'center'}}>
            <Toolbar/>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/" onClick={handleLinkClick}>
                        <ListItemIcon><Home/></ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/role" onClick={handleLinkClick}>
                        <ListItemIcon><Group/></ListItemIcon>
                        <ListItemText primary="Role"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/react-query" onClick={handleLinkClick}>
                        <ListItemIcon><Extension/></ListItemIcon>
                        <ListItemText primary="react-query + Zustand"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box sx={{display: 'flex'}}>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2}}
                        >
                            <MenuIcon/>
                        </IconButton>
                    )}
                    <Typography variant="h6" component={NavLink} to="/"
                                sx={{color: 'white', textDecoration: 'none', flexGrow: 1}}>
                        Kata 04
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box component="nav" sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}} aria-label="navigation">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{keepMounted: true}}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {width: drawerWidth, boxSizing: 'border-box'},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    );
}

export default App;
