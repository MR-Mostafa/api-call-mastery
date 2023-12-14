import { DEFAULT_THEME, createTheme, mergeMantineTheme } from '@mantine/core';

const themeOverride = createTheme({
	fontFamily: '-apple-system,Roboto,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji',
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
