import { IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '../boxicons'

export const ButtonDirection = ({
	direction = 'right',
	colorScheme = 'gray',
	sx = {},
	...props
}) => {
	return (
		<IconButton
			icon={
				(direction === 'right' && <ChevronRightIcon />) ??
				(direction === 'left' && <ChevronLeftIcon />)
			}
			colorScheme={colorScheme}
			sx={{
				...sx,
			}}
			{...props}
		/>
	)
}
