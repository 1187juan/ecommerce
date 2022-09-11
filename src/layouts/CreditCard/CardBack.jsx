import { Box, Text } from '@chakra-ui/react'
import { Card } from './Card'

export const CardBack = ({ ccvFormat }) => {
	return (
		<Card
			sx={{
				gridTemplateRows: 'max-content 1fr',
				padding: '2rem 0',
				transform: 'rotateY(180deg)',
				backfaceVisibility: 'hidden',
			}}
		>
			<Box
				sx={{
					width: '100%',
					height: '2rem',
					backgroundColor: 'silver',
				}}
			/>
			<Text
				sx={{
					color: 'whiteAlpha.900',
					margin: 'auto 2rem auto auto',
				}}
			>
				{ccvFormat}
			</Text>
		</Card>
	)
}
