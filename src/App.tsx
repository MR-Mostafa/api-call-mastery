import { RouterProvider } from 'react-router-dom';

import { MantineProvider } from '~/providers/mantineProvider';
import { ReactQueryProvider } from '~/providers/reactQueryProvider';
import { router } from '~/router';

const App = () => {
	return (
		<ReactQueryProvider>
			<MantineProvider>
				<RouterProvider router={router()} />
			</MantineProvider>
		</ReactQueryProvider>
	);
};

export default App;
