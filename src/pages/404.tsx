import { useNavigate } from 'react-router-dom';

import { Button, Flex, Image, Text } from '@mantine/core';

const NotFoundPage = () => {
	const navigate = useNavigate();

	return (
		<Flex
			direction='column'
			gap='md'
			justify='center'
			align='center'
		>
			<Image
				width='200'
				w='200px'
				opacity='0.85'
				src='/404.png'
			/>

			<Text
				size='4rem'
				fw='500'
				pb='lg'
			>
				404 Page
			</Text>

			<Button
				variant='filled'
				color='indigo'
				onClick={() => navigate('/')}
				type='button'
			>
				Go To Index Page
			</Button>
		</Flex>
	);
};

export default NotFoundPage;
