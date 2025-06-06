import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {DataGrid} from "@mui/x-data-grid";
import type {Role} from "@/types/Role.ts";
import {Roles} from "@/data/dataRole.ts";
import {useState} from "react";

export const RolePage = () => {

    const [currentTab, setCurrentTab] = useState<string>('META')
    const roles: Role[] = Roles

    const dataTab: string[] = Array.from(new Set(roles.map(role => role.application)))

    const flattenRoles = Roles.flatMap(role =>
        role.assets.flatMap(asset =>
            asset.action.map(action => ({
                id: `${role.id}-${asset.name.replace(" ", "-")}-${action}`,
                roleId: role.id,
                application: role.application,
                assetName: asset.name,
                action: action,
            }))
        )
    );


    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setCurrentTab(newValue)
    }

    return (
        <>
            <Box>
                <h1>Roles</h1>
                <TabContext value={currentTab}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <TabList onChange={handleChange}>
                            {dataTab.map((tab: string) => (
                                <Tab key={tab} label={tab} value={tab}/>
                            ))}
                        </TabList>
                    </Box>
                    {dataTab.map((tab: string) => (
                        <TabPanel value={tab} key={tab}>
                            <Box sx={{height: 400, width: '100%'}}>
                                {<DataGrid
                                    rows={flattenRoles.filter(role => role.application === tab)}
                                    columns={[
                                        {field: 'assetName', headerName: 'Asset Name', width: 200},
                                        {field: 'action', headerName: 'Action', width: 150},
                                    ]}>
                                </DataGrid>}
                            </Box>
                        </TabPanel>
                    ))}
                </TabContext>
            </Box>
            <pre>
                {JSON.stringify(flattenRoles, null, 4)}
            </pre>
        </>
    );
}