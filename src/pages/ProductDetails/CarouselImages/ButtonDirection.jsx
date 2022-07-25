import { IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '../../../boxicons'

export const ButtonDirection = ({ direction = 'right' }) => {
	return (
		<IconButton
			variant='ghost'
			colorScheme='gray'
			icon={direction === 'right' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
			position='absolute'
			top='50%'
			right={direction === 'right' && '.5rem'}
			left={direction === 'left' && '.5rem'}
			zIndex={1}
			display={['none', 'flex']}
			transform='translateY(-50%)'
		/>
	)
}
