import { IconButton, Tooltip } from '@chakra-ui/react'

export const ButtonNav = ({
	label,
	colorScheme = 'gray',
	icon,
	onClick,
	sx = {},
	...props
}) => {
	return (
		<Tooltip label={label}>
			<IconButton
				onClick={onClick}
				isRound
				size='lg'
				colorScheme={colorScheme}
				icon={icon}
				sx={{ color: colorScheme === 'whiteAlpha' && 'onPrimaryHigh', ...sx }}
				{...props}
			/>
		</Tooltip>
	)
}
