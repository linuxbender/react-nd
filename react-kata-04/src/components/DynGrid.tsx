import {DataGrid, type GridRenderCellParams} from "@mui/x-data-grid";
import {Button} from "@mui/material";

type Column = {
    field: string;
    headerName: string;
}

type DynGridProps = {
    columnList: Column[];
}

type User = {
    id: number;
    name: string;
    age: number;
}


export const DynGrid = ({columnList}: DynGridProps) => {

    const rows = [
        {id: 1, name: 'Alice', age: 25},
        {id: 2, name: 'Bob', age: 30},
        {id: 3, name: 'Charlie', age: 35},
    ];

    console.log(columnList)

    const columns = [
        {field: 'id', headerName: 'ID', width: 70},
        {field: 'name', headerName: 'Name', width: 130},
        {field: 'age', headerName: 'Age', width: 90},
        {
            field: 'actions',
            headerName: 'Aktion',
            width: 150,
            renderCell: (params: GridRenderCellParams<User>) => (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => alert(`Details von ${params.row.name}`)}
                >
                    Details
                </Button>
            ),
        },
    ];


    return (
        <div>
            <h1>Dynamic Grid Example</h1>
            <DataGrid rows={rows} columns={columns} hideFooter={true}/>
        </div>
    );
}

export default DynGrid;