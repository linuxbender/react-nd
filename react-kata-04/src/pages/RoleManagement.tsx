import {useState} from "react";
import {
    Box,
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    TextField,
    Typography,
} from "@mui/material";

const demoActions = ["READ", "WRITE", "UPDATE", "DELETE", "CREATE", "EXPORT", "FILE"];

const applications = ["All Applications", "App1", "App2", "App3"];
const roles = ["All Roles", "Admin", "Editor", "Viewer"];

const demoData = [
    {
        id: 1,
        application: "App1",
        role: "Admin",
        assets: [
            { asset: "Asset1", actions: ["READ", "WRITE"] },
            { asset: "Asset2", actions: ["DELETE", "CREATE"] },
        ],
    },
    {
        id: 2,
        application: "App2",
        role: "Editor",
        assets: [
            { asset: "Asset3", actions: ["UPDATE", "EXPORT"] },
        ],
    },
    {
        id: 3,
        application: "App3",
        role: "Admin",
        assets: [
            { asset: "Asset1", actions: ["READ"] },
            { asset: "Asset4", actions: ["WRITE"] },
        ],
    },
];

const RoleManagementUI = () => {
    const [selectedApp, setSelectedApp] = useState("All Applications");
    const [selectedRole, setSelectedRole] = useState("All Roles");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = demoData.filter((item) => {
        const appMatch = selectedApp === "All Applications" || item.application === selectedApp;
        const roleMatch = selectedRole === "All Roles" || item.role === selectedRole;
        const searchMatch = item.assets.some((asset) =>
            asset.asset.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return appMatch && roleMatch && searchMatch;
    });

    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom>
                Role Management
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel id="app-select-label">Application</InputLabel>
                        <Select
                            labelId="app-select-label"
                            value={selectedApp}
                            label="Application"
                            onChange={(e) => setSelectedApp(e.target.value)}
                            sx={{ minWidth: 200 }}
                        >
                            {applications.map((app) => (
                                <MenuItem key={app} value={app}>
                                    {app}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel id="role-select-label">Role</InputLabel>
                        <Select
                            labelId="role-select-label"
                            value={selectedRole}
                            label="Role"
                            onChange={(e) => setSelectedRole(e.target.value)}
                            sx={{ minWidth: 200 }}
                        >
                            {roles.map((role) => (
                                <MenuItem key={role} value={role}>
                                    {role}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <TextField
                        label="Search Assets"
                        variant="outlined"
                        fullWidth
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </Grid>
            </Grid>

            <Box mt={2}>
                {filteredData.length === 0 ? (
                    <Typography>No matching data found.</Typography>
                ) : (
                    filteredData.map((item) => (
                        <Card key={item.id} sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {item.role} - {item.application}
                                </Typography>

                                <Grid container spacing={2}>
                                    {item.assets.map((assetObj, index) => (
                                        <Grid key={index} item xs={12} sm={6} md={4}>
                                            <Box border={1} borderRadius={2} p={2}>
                                                <Typography variant="subtitle1" gutterBottom>
                                                    {assetObj.asset}
                                                </Typography>
                                                <Box display="flex" flexWrap="wrap" gap={1}>
                                                    {demoActions.map((action) => (
                                                        <FormControlLabel
                                                            key={action}
                                                            control={
                                                                <Switch
                                                                    checked={assetObj.actions.includes(action)}
                                                                    color="primary"
                                                                    inputProps={{ "aria-label": `${action} toggle` }}
                                                                />
                                                            }
                                                            label={action}
                                                            labelPlacement="end"
                                                        />
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </CardContent>
                        </Card>
                    ))
                )}
            </Box>
        </Box>
    );
};

export default RoleManagementUI;
