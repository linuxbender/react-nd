import {useState} from 'react';
import {
    Box,
    Card,
    CardContent,
    Chip,
    Divider,
    FormControlLabel,
    Paper,
    Stack,
    Switch,
    Typography,
    useTheme
} from '@mui/material';

const demoActions = ["READ", "WRITE", "UPDATE", "DELETE", "CREATE", "EXPORT", "FILE"];

const demoRoleData = [
    {
        id: 1,
        name: "Admin",
        application: "App1",
        assets: [
            {asset: "Asset3", action: ["READ", "WRITE"]},
            {asset: "Asset1", action: ["UPDATE"]},
            {asset: "Asset4", action: ["DELETE"]},
        ],
    },
    {
        id: 2,
        name: "Editor",
        application: "App2",
        assets: [
            {asset: "Asset3", action: ["CREATE", "EXPORT"]},
            {asset: "Asset5", action: ["READ"]},
        ],
    },
    {
        id: 3,
        name: "Viewer",
        application: "App3",
        assets: [
            {asset: "Asset3", action: ["READ"]},
            {asset: "Asset2", action: ["UPDATE", "DELETE"]},
        ],
    },
    {
        id: 4,
        name: "Manager",
        application: "App1",
        assets: [
            {asset: "Asset3", action: ["WRITE", "DELETE"]},
            {asset: "Asset4", action: ["FILE"]},
        ],
    },
    {
        id: 5,
        name: "Auditor",
        application: "App2",
        assets: [
            {asset: "Asset3", action: ["READ", "EXPORT"]},
            {asset: "Asset5", action: ["WRITE"]},
        ],
    },
];

const ActionSwitches = ({actions, selectedActions, onToggle}) => {
    const theme = useTheme();

    return (
        <Paper elevation={2} sx={{p: 1, backgroundColor: theme.palette.background.paper}}>
            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                {actions.map((action) => (
                    <FormControlLabel
                        key={action}
                        control={
                            <Switch
                                checked={selectedActions.includes(action)}
                                onChange={(e) => onToggle(action, e.target.checked)}
                                color="primary"
                            />
                        }
                        label={<Typography variant="caption" fontWeight="bold">{action}</Typography>}
                        sx={{m: 0}}
                    />
                ))}
            </Stack>
        </Paper>
    );
};

const RoleManagement = () => {
    const [roles, setRoles] = useState(demoRoleData);

    const handleToggleAction = (roleId, assetName, action, enabled) => {
        setRoles((prevRoles) =>
            prevRoles.map((role) => {
                if (role.id !== roleId) return role;

                return {
                    ...role,
                    assets: role.assets.map((asset) => {
                        if (asset.asset !== assetName) return asset;

                        return {
                            ...asset,
                            action: enabled
                                ? [...new Set([...asset.action, action])]
                                : asset.action.filter((a) => a !== action),
                        };
                    }),
                };
            })
        );
    };

    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom textAlign="center">
                Role Management
            </Typography>
            {roles.map((role) => (
                <Card key={role.id} sx={{mb: 3, boxShadow: 3}}>
                    <CardContent>
                        <Stack direction={{xs: "column", sm: "row"}} spacing={2}
                               alignItems={{xs: "flex-start", sm: "center"}} justifyContent="space-between" mb={1}>
                            <Typography variant="h6">
                                {role.name}
                                <Chip label={role.application} color="secondary" size="small" sx={{ml: 1}}/>
                            </Typography>
                        </Stack>
                        <Divider sx={{my: 1}}/>
                        {role.assets.map((asset) => (
                            <Box key={asset.asset} mb={2}>
                                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                                    Asset: {asset.asset}
                                </Typography>
                                <ActionSwitches
                                    actions={demoActions}
                                    selectedActions={asset.action}
                                    onToggle={(action, enabled) =>
                                        handleToggleAction(role.id, asset.asset, action, enabled)
                                    }
                                />
                            </Box>
                        ))}
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default RoleManagement;
