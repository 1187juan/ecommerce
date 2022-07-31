import { IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '../../../boxicons'

export const ButtonDirection = ({ direction = 'right' }) => {
	return (
		<IconButton
			icon={direction === 'right' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
			colorScheme='gray'
			sx={{
				position: 'absolute',
				top: '50%',
				left: direction === 'left' && '0',
				right: direction === 'right' && '0',
				display: ['none', 'flex'],
				transform: 'translateY(-50%)',
			}}
		/>
	)
}
