import { Button, Grid } from '@chakra-ui/react'
import { useState } from 'react'
import { CreditCard } from '../layouts/CreditCard'

export const Tests = () => {
	const [isFront, setIsFront] = useState(true)

	return (
		<Grid
			sx={{
				height: '100vmin',
				justifyItems: 'center',
				alignContent: 'center',
				gap: '1rem',
			}}
		>
			<CreditCard showFront={isFront} />
			<Button onClick={() => setIsFront(prev => !prev)}>change</Button>
		</Grid>
	)
}
