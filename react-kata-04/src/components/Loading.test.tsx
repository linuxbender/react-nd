import {render, screen, waitFor} from '@testing-library/react';
import Loading from './Loading';

describe('Loading Component', () => {
    it('renders CircularProgress', () => {
        render(<Loading/>);
        const progress = screen.getByRole('progressbar');
        expect(progress).toBeInTheDocument(); // Check if CircularProgress is rendered
    });

    it('renders multiple Skeleton components', () => {
        render(<Loading/>);
        const skeletons = screen.getAllByTestId('skeleton');
        expect(skeletons.length).toBeGreaterThanOrEqual(6);  // Ensure there are at least 6 Skeleton elements
    });

    it('should have animation class applied to skeletons', async () => {
        render(<Loading/>);
        const skeletons = screen.getAllByTestId('skeleton');

        // Wait for the class to be applied
        await waitFor(() => {
            // Check if the first skeleton has the class `MuiSkeleton-pulse`, indicating animation is applied
            expect(skeletons[0]).toHaveClass('MuiSkeleton-pulse');
        });
    });
});
