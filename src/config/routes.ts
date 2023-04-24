
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Support from '../pages/Support';

interface RouteType {
    path : string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
} 

const routes: RouteType[] = [
    {
      path : "",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path : "/dashboard",
      component: Dashboard,
      name: "Dashboard",
      protected: true,
    },
    {
      path : "/about",
      component: About,
      name: "About",
      protected: false,
    },
    {
      path : "/support",
      component: Support,
      name: "Support",
      protected: false,
    },
  ];

export default routes