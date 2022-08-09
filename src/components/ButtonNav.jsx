import { IconButton, Tooltip } from '@chakra-ui/react'

const badgeStyles = {
	content: 'attr(data-badge)',
	position: 'absolute',
	top: 0,
	right: 0,
	height: '1.25rem',
	display: 'flex',
	alignItems: 'center',
	padding: '.25rem',
	fontSize: '.75rem',
	backgroundColor: 'darkred',
	color: 'white',
	borderRadius: '.75rem',
	transform: 'translate(50%, -25%)',
	aspectRatio: '1 / 1',
}

export const ButtonNav = ({
	label,
	badge = null,
	colorScheme = 'gray',
	icon,
	onClick,
	sx = {},
	...props
}) => {
	badge > 99 && (badge = '+99')

	return (
		<Tooltip label={label}>
			<IconButton
				onClick={onClick}
				isRound
				size='lg'
				colorScheme={colorScheme}
				icon={icon}
				data-badge={badge}
				sx={{
					color: colorScheme === 'whiteAlpha' && 'onPrimaryHigh',
					'&::after': badge && badgeStyles,
					...sx,
				}}
				{...props}
			/>
		</Tooltip>
	)
}
