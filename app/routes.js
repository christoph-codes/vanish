import Home from './screens/Home.tsx';
import Splash from './screens/Splash.tsx';
import Dashboard from './screens/Dashboard.tsx';
import Login from './screens/Login.tsx';
import Conversation from './screens/Conversation';

const routes = [
	{
		name: 'Home',
		component: Home,
		options: {
			headerShown: false,
		},
	},
	{
		name: 'Login',
		component: Login,
		options: {
			headerShown: false,
		},
	},
	{
		name: 'Splash',
		component: Splash,
		options: {
			headerShown: false,
		},
	},
	{
		name: 'Dashboard',
		component: Dashboard,
		options: {
			headerShown: false,
		},
	},
	{
		name: 'Conversation',
		component: Conversation,
		options: {
			headerShown: false,
		},
	},
];

export default routes;
