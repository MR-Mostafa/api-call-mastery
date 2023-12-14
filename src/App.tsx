import { RouterProvider } from 'react-router-dom';

import { ColorSchemeScript, MantineProvider, localStorageColorSchemeManager } from '@mantine/core';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { theme } from '~/config/theme';
import { router } from '~/router';

const queryClient = new QueryClient();

const colorSchemeManager = localStorageColorSchemeManager({
	key: 'color-scheme',
});

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ColorSchemeScript defaultColorScheme='dark' />
			<MantineProvider
				defaultColorScheme='dark'
				colorSchemeManager={colorSchemeManager}
				theme={theme}
			>
				<RouterProvider router={router()} />
			</MantineProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
