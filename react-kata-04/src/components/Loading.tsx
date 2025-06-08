import {CircularProgress, keyframes, Skeleton, Stack} from "@mui/material";


const pulse = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 1;
    }
`;

export const Loading = () => {
    return (
        <>
            <CircularProgress/>
            <Stack spacing={1} sx={{animation: `${pulse} 2s infinite`}}>
                <Skeleton data-testid="skeleton" variant="text" width={210} height={60}/>
                <Skeleton data-testid="skeleton" variant="rectangular" width={210} height={10}/>
                <Skeleton data-testid="skeleton" variant="rectangular" width={210} height={10}/>
                <Skeleton data-testid="skeleton" variant="rectangular" width={210} height={10}/>
                <Skeleton data-testid="skeleton" variant="rectangular" width={210} height={10}/>
                <Skeleton data-testid="skeleton" variant="rectangular" width={210} height={10}/>
            </Stack>
        </>

    )
}

export default Loading;