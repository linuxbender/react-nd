import React, {useState} from 'react';
import {
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    Switch,
    Typography,
} from '@mui/material';

const demoActions = ['READ', 'WRITE', 'UPDATE', 'DELETE', 'CREATE', 'EXPORT', 'FILE'];

const roleData = [
    {
        appName: 'App1',
        roleName: 'Admin',
        assets: [
            { asset: 'Asset1', actions: ['READ', 'WRITE'] },
            { asset: 'Asset2', actions: ['DELETE', 'CREATE'] },
        ],
    },
    {
        appName: 'App2',
        roleName: 'Editor',
        assets: [
            { asset: 'Asset3', actions: ['UPDATE', 'EXPORT'] },
        ],
    },
    {
        appName: 'App3',
        roleName: 'Admin',
        assets: [
            { asset: 'Asset1', actions: ['READ'] },
            { asset: 'Asset4', actions: ['WRITE'] },
        ],
    },
];

const appOptions = ['All Applications', 'App1', 'App2', 'App3'];
const roleOptions = ['All Roles', 'Admin', 'Editor', 'Viewer'];

const RoleManagementUI: React.FC = () => {
    const [selectedApp, setSelectedApp] = useState('All Applications');
    const [selectedRole, setSelectedRole] = useState('All Roles');

    const filteredData = roleData.filter((item) => {
        const appMatch = selectedApp === 'All Applications' || item.appName === selectedApp;
        const roleMatch = selectedRole === 'All Roles' || item.roleName === selectedRole;
        return appMatch && roleMatch;
    });

    return (
        <Container maxWidth="md">
            <Box p={2}>
                <Typography variant="h4" gutterBottom>
                    Role Management
                </Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={2}>
                    <FormControl fullWidth>
                        <InputLabel>Application</InputLabel>
                        <Select
                            value={selectedApp}
                            label="Application"
                            onChange={(e) => setSelectedApp(e.target.value)}
                        >
                            {appOptions.map((app) => (
                                <MenuItem key={app} value={app}>
                                    {app}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel>Role</InputLabel>
                        <Select
                            value={selectedRole}
                            label="Role"
                            onChange={(e) => setSelectedRole(e.target.value)}
                        >
                            {roleOptions.map((role) => (
                                <MenuItem key={role} value={role}>
                                    {role}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Stack>

                <Stack spacing={2}>
                    {filteredData.length === 0 ? (
                        <Typography variant="body2" align="center">
                            No matching data found.
                        </Typography>
                    ) : (
                        filteredData.map((item, index) => (
                            <Paper key={index} elevation={2} sx={{ p: 2 }}>
                                <Stack direction="row" spacing={1} mb={1} alignItems="center">
                                    <Chip label={item.appName} color="primary" />
                                    <Typography variant="h6">{item.roleName}</Typography>
                                </Stack>

                                <Divider sx={{ mb: 2 }} />

                                <Grid container spacing={2}>
                                    {item.assets.map((asset, idx) => (
                                        <Grid key={idx} item xs={12} sm={6} md={4}>
                                            <Card>
                                                <CardContent>
                                                    <Typography variant="subtitle1" gutterBottom>
                                                        {asset.asset}
                                                    </Typography>
                                                    <Box display="flex" flexWrap="wrap" gap={1}>
                                                        {demoActions.map((action) => (
                                                            <FormControlLabel
                                                                key={action}
                                                                control={
                                                                    <Switch
                                                                        checked={asset.actions.includes(action)}
                                                                        color="primary"
                                                                    />
                                                                }
                                                                label={action}
                                                                labelPlacement="end"
                                                            />
                                                        ))}
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Paper>
                        ))
                    )}
                </Stack>
            </Box>
        </Container>
    );
};

export default RoleManagementUI;
