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

    it('show title', () => {
        renderWithQueryClient(<ReactQueryZustandPage/>);
        expect(screen.getByText(/React Query \+ Zustand/i)).toBeInTheDocument();
    });

    it('show user', async () => {
        renderWithQueryClient(<ReactQueryZustandPage/>);
        await waitFor(() => {
            expect(screen.getByText('Alice')).toBeInTheDocument();
            expect(screen.getByText('Bob')).toBeInTheDocument();
        });
    });
});