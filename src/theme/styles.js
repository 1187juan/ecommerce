export const styles = {
	global: ({ colorMode }) => ({
		'html, body': {
			background: colorMode === 'light' ? 'hsl(0 0% 98%)' : 'hsl(192 16% 12%)',
		},
	}),
}
