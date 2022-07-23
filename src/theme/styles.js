export const styles = {
	global: ({ colorMode }) => ({
		'html, body': {
			background: colorMode === 'light' ? 'hsl(0 0% 92%)' : 'hsl(192 50% 8%)',
		},
	}),
}
