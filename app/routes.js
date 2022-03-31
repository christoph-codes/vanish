import Home from './screens/Home.tsx';
import Splash from './screens/Splash.tsx';

const routes = [
	{
		name: 'Home',
		component: Home,
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
];

export default routes;
