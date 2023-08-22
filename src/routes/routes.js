import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Explore from '~/pages/Explore';
import Live from '~/pages/Live';
import NotFound from '~/pages/NotFound';
import WiderLayout from '~/layouts/WiderLayout';

// Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.explore, component: Explore },
    { path: config.routes.live, component: Live },
    { path: config.routes.notfound, component: NotFound },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.profile, component: Profile, layout: WiderLayout },
    { path: config.routes.search, component: Search, layout: null },
];

// Private routes
export const privateRoutes = [];
