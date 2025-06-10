import DynGrid from "@/components/DynGrid.tsx";

export const HomePage = () => {

    const columnList = [{ field: 'demi', headerName: 'Demo'},{field: 'id', headerName: 'ID'},]
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>
            <DynGrid columnList={columnList} />
        </div>
    );
}