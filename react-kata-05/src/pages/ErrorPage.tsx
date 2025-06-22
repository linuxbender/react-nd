import {useRouteError} from "react-router";

export const ErrorPage = () => {
    const error = useRouteError() as Error;
    return (
        <div>
            <h1>Error 404</h1>
            <p>{error.name}</p>
            <p>{error.message}</p>
            <p>{error.stack}</p>
        </div>
    );
}
export default ErrorPage;