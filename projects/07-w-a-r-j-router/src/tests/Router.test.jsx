// js
// react
// third
import {describe, it, expect, beforeEach, vi} from 'vitest';
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
// own
import {Router} from '../components/Router';
import {Route} from '../components/Route';
import {Link} from '../components/Link';
import { getCorrentPath } from '../utils/utils';

vi.mock('../utils/utils.js', () => {
    return {getCorrentPath: vi.fn()};
});

describe('Router', () => {
    // clean screen, execute before test.
    beforeEach(() => {
        cleanup();
        vi.clearAllMocks();
    });

    it('should render without problems', () => {
        render(<Router routes={[]} />);
        expect(true).toBeTruthy();
    });

    it('should render 404 if no routes match', () => {
        render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />);
        expect(screen.getByText('404')).toBeTruthy();
    });

    it('should render the component of the first route that matches', () => {
        getCorrentPath.mockReturnValue('/');
        // getCorrentPath.mockReturnValue('/about');
        const routes = [
            {
                path: '/',
                Component: () => <h1>Home</h1>
            },
            {
                path: '/about',
                Component: () => <h1>About</h1>
            }
        ];

        render(<Router routes={routes} />);
        // expect(screen.debug());
        expect(screen.getByText('Home')).toBeTruthy();
        // expect(screen.getByText('About')).toBeTruthy();
    });

    it('should navigate using Links', () => {
        let currentPath = '/';
        getCorrentPath.mockImplementation(() => currentPath);

        render(
            <Router>
                <Route
                    path='/' Component={() => {
                        return (
                            <>
                                <h1>Home</h1>
                                <Link to='/about'>Go to About</Link>
                            </>
                        )
                    }}
                />
                <Route
                    path='/about' Component={() => {
                        return (
                            <>
                                <h1>About</h1>
                                <Link to='/'>Go to Home</Link>
                            </>
                        )
                    }}
                />
            </Router>
        );

        // Click on the link.
        const link = screen.getByText('Go to About');
        fireEvent.click(link);
        currentPath = '/about';

        cleanup();
        render(
            <Router>
                <Route
                    path='/' Component={() => {
                        return (
                            <>
                                <h1>Home</h1>
                                <Link to='/about'>Go to About</Link>
                            </>
                        )
                    }}
                />
                <Route
                    path='/about' Component={() => {
                        return (
                            <>
                                <h1>About</h1>
                                <Link to='/'>Go to Home</Link>
                            </>
                        )
                    }}
                />
            </Router>
        );
        
        // Ckeck on the new route is rendered.
        expect(screen.debug());
        expect(screen.getByText('Go to Home')).toBeTruthy();
    });
});