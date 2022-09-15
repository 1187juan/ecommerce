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
			<Flex sx={{ justifyContent: 'space-between' }}>
				<Box as='img' src={chip} alt='chip' sx={{ height: '2em' }} />
				{cardCompany === 'visa' && <LogoVisa width='5em' height='2em' />}
				{cardCompany === 'masterCard' && (
					<LogoMasterCard width='5em' height='2em' />
				)}
				{cardCompany === 'americanExpress' && (
					<LogoAmericanExpress width='5em' height='2em' />
				)}
				{cardCompany === 'other' && (
					<CreditCardFrontIcon
						style={{ marginTop: '-.25em', fontSize: '2em' }}
					/>
				)}
			</Flex>
			<Grid
				sx={{
					gridTemplateColumns: '1fr max-content',
					columnGap: '1em',
				}}
			>
				<Text
					sx={{
						gridColumn: '2 span',
						fontSize: '1.25em',
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
