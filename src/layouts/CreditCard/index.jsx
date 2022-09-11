import { Box } from '@chakra-ui/react'
import {
	formatCardExpiredDate,
	formatCardNumber,
	formatCCV,
} from '../../helpers/format'
import { CardBack } from './CardBack'
import { CardFront } from './CardFront'

const companyCodes = {
	4: 'visa',
	5: 'masterCard',
	34: 'americanExpress',
	37: 'americanExpress',
}

export const CreditCard = ({
	showFront = true,
	number = null,
	expirationDate = null,
	name,
	ccv = null,
	sx = {},
}) => {
	const numberFormat = formatCardNumber(number, { autocomplete: true })
	const expirationDateFormat = expirationDate
		? formatCardExpiredDate(expirationDate, { autocomplete: true })
		: 'MM/AA'
	const ccvFormat = formatCCV(ccv, { autocomplete: true })

	const firstNumber = number ? number.toString().slice(0, 1) : ''
	const secondNumber = number && number > 9 ? number.toString().slice(1, 2) : ''

	const cardCompany =
		companyCodes[firstNumber] ??
		companyCodes[firstNumber + secondNumber] ??
		'other'

	return (
		<Box
			sx={{
				position: 'relative',
				zIndex: 1,
				width: '100%',
				maxWidth: '350px',
				aspectRatio: '1.586 / 1',
				transform: showFront ? 'rotateY(0deg)' : 'rotateY(180deg)',
				transition: 'transform 1s ease',
				transformStyle: 'preserve-3d',
				backfaceVisibility: 'hidden',
				color: 'whiteAlpha.900',
				...sx,
			}}
		>
			<CardFront
				cardCompany={cardCompany}
				expirationDateFormat={expirationDateFormat}
				name={name}
				numberFormat={numberFormat}
			/>
			<CardBack ccvFormat={ccvFormat} />
		</Box>
	)
}
