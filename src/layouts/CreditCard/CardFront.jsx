import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { CreditCardFrontIcon } from '../../boxicons'
import { LogoAmericanExpress, LogoMasterCard, LogoVisa } from '../../components'
import { Card } from './Card'
import chip from '../../assets/creaditCard/chip.svg'

export const CardFront = ({
	cardCompany,
	numberFormat,
	expirationDateFormat,
	name,
}) => {
	return (
		<Card sx={{ gridTemplateRows: '50% 50%' }}>
			<Flex sx={{ justifyContent: 'space-between', fontSize: '2rem' }}>
				<Box as='img' src={chip} alt='chip' sx={{ height: '2rem' }} />
				{cardCompany === 'visa' && <LogoVisa width='4rem' height='2rem' />}
				{cardCompany === 'masterCard' && (
					<LogoMasterCard width='4rem' height='2rem' />
				)}
				{cardCompany === 'americanExpress' && (
					<LogoAmericanExpress width='4rem' height='2rem' />
				)}
				{cardCompany === 'other' && (
					<CreditCardFrontIcon style={{ marginTop: '-.5rem' }} />
				)}
			</Flex>
			<Grid
				sx={{
					gridTemplateColumns: '1fr max-content',
					columnGap: '1rem',
				}}
			>
				<Text
					sx={{
						gridColumn: '2 span',
						fontSize: 'xl',
						fontWeight: 'semibold',
					}}
				>
					{numberFormat}
				</Text>
				<Text
					noOfLines={1}
					sx={{
						overflow: 'hidden',
						height: 'max-content',
						textTransform: 'uppercase',
					}}
				>
					{name}
				</Text>
				<Text>{expirationDateFormat}</Text>
			</Grid>
		</Card>
	)
}
