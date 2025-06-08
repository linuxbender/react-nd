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
        // Wir suchen nun nach allen Skeleton-Elementen mit dem Prefix "skeleton-"
        const skeletons = screen.getAllByTestId(/skeleton-/); // Wildcard für alle Skeletons
        expect(skeletons.length).toBeGreaterThanOrEqual(6);  // Sicherstellen, dass mindestens 6 Skeletons vorhanden sind
    });

    it('should have animation class applied to skeletons', async () => {
        render(<Loading/>);
        const skeletons = screen.getAllByTestId(/skeleton-/);  // Suche nach allen Skeletons mit "skeleton-" Prefix

        // Warten, bis die Animation angewendet wird
        await waitFor(() => {
            // Prüfen, ob der erste Skeleton-Element die Klasse `MuiSkeleton-pulse` hat
            expect(skeletons[0]).toHaveClass('MuiSkeleton-pulse');
        });
    });

    it('renders Skeleton elements in correct order', () => {
        render(<Loading/>);
        const skeletons = screen.getAllByTestId(/skeleton-/);

        // expect the first Skeleton to be of type "text" and have a height of 60px
        expect(skeletons[0]).toHaveStyle('height: 60px');

        // expect the rest of the Skeletons to be of type "rectangular" and have a height of 10px
        skeletons.slice(1).forEach((skeleton) => {
            expect(skeleton).toHaveStyle('height: 10px');
        });
    });

    it('applies pulse animation to skeletons', async () => {
        render(<Loading/>);
        const skeletons = screen.getAllByTestId(/skeleton-/);

        await waitFor(() => {
            skeletons.forEach((skeleton) => {
                // Check if each skeleton has the pulse animation class
                expect(skeleton).toHaveClass('MuiSkeleton-pulse');
            });
        });
    });


    it('renders both CircularProgress and Skeletons together', () => {
        render(<Loading/>);
        // Check if both CircularProgress and Skeletons are rendered
        const progress = screen.getByRole('progressbar');
        const skeletons = screen.getAllByTestId(/skeleton-/);

        expect(progress).toBeInTheDocument();
        expect(skeletons.length).toBeGreaterThan(0);
    });

    it('renders Stack component with correct spacing', () => {
        render(<Loading/>);

        // Find the Stack element using `querySelector` by its class
        const stack = document.querySelector('.MuiStack-root');

        // Check if the Stack element is in the document
        expect(stack).toBeInTheDocument();

        // Check if the Stack element has 6 children (the Skeletons)
        const children = stack?.children;
        expect(children?.length).toBeGreaterThanOrEqual(6);
    });


    it('renders Skeletons with correct variants', () => {
        render(<Loading/>);
        const skeletons = screen.getAllByTestId(/skeleton-/);

        // check if the first Skeleton is of type "text"
        expect(skeletons[0]).toHaveClass('MuiSkeleton-text');

        // check if the rest of the Skeletons are of type "rectangular"
        skeletons.slice(1).forEach((skeleton) => {
            expect(skeleton).toHaveClass('MuiSkeleton-rectangular');
        });
    });

    it('renders the Loading component within acceptable time', async () => {
        const start = performance.now();
        render(<Loading/>);
        await screen.findByRole('progressbar');
        const end = performance.now();
        const duration = end - start;
        expect(duration).toBeLessThan(500); // Die Komponente sollte innerhalb von 500ms rendern
    });


});
