import {render, screen, waitFor} from '@testing-library/react';
import * as userStore from '@/state/userStore';
import * as userApi from '@/api/User';
import {type Mock, vi} from 'vitest';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryZustandPage} from './ReactQueryZustandPage';

vi.mock('@/state/userStore');
vi.mock('@/api/User');

const mockUsers = [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'},
];

function renderWithQueryClient(ui: React.ReactElement) {
    const queryClient = new QueryClient();
    return render(
        <QueryClientProvider client={queryClient}>
            {ui}
        </QueryClientProvider>
    );
}

describe('ReactQueryZustandPage', () => {
    beforeEach(() => {
        (userStore.useUserStore as unknown as Mock).mockReturnValue({filters: {}});
        (userApi.getUsers as Mock).mockResolvedValue(mockUsers);
    });

    it('shows title after loading', async () => {
        renderWithQueryClient(<ReactQueryZustandPage/>);

        // Wait for the title to appear after loading state is finished
        await waitFor(() => expect(screen.getByText(/React Query \+ Zustand/i)).toBeInTheDocument());
    });

    it('shows users after loading', async () => {
        renderWithQueryClient(<ReactQueryZustandPage/>);

        // Wait for the user names to appear after the loading is finished
        await waitFor(() => {
            expect(screen.getByText('Alice')).toBeInTheDocument();
            expect(screen.getByText('Bob')).toBeInTheDocument();
        });
    });

    it('shows loading state', async () => {
        renderWithQueryClient(<ReactQueryZustandPage/>);
        // Simulate loading state by mocking the getUsers function to return a promise
        const skeletons = screen.getAllByTestId('skeleton');
        expect(skeletons.length).toBeGreaterThan(0); // Es sollten mehrere Skeletons im DOM sein
        skeletons.forEach((skeleton) => {
            expect(skeleton).toBeInTheDocument();
        });
    });
});
