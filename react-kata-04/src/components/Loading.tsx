import {CircularProgress, keyframes, Skeleton, Stack} from "@mui/material";
import {memo} from "react";

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

export type LoadingProps = {
    isLoading?: boolean;
    skeletonCount?: number;
}

export const Loading = memo(({isLoading = true, skeletonCount = 6}: LoadingProps) => {
    if (!isLoading) return null;

    return (
        <>
            <CircularProgress/>
            <Stack spacing={1} sx={{animation: `${pulse} 2s infinite`}} data-testid="stack-wrapper">
                {Array.from({length: skeletonCount}).map((_, index) => (
                    <Skeleton
                        key={index}
                        data-testid={`skeleton-${index}`}
                        variant={index === 0 ? "text" : "rectangular"}
                        width={210}
                        height={index === 0 ? 60 : 10}
                    />
                ))}
            </Stack>
        </>
    );
});
export default Loading;