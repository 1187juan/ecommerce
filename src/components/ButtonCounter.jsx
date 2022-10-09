import { Button, Center, CircularProgress, IconButton } from '@chakra-ui/react'
import { MinusIcon, PlusIcon, TrashIcon } from '../boxicons'

export const ButtonCounter = ({
	value,
	onChange,
	colorScheme = 'gray',
	variant = 'solid',
	size = 'md',
	limit = Number.POSITIVE_INFINITY,
	isDisabled = false,
	isLoading = false,
	sx = {},
	...props
}) => {
	return (
		<>
			<Button
				as='div'
				colorScheme={colorScheme}
				variant={variant}
				size={size}
				sx={{
					gap: '1rem',
					padding: 0,
					display: 'flex',
					pointerEvents: (isLoading || isDisabled) && 'none',
					...sx,
				}}
				{...props}
			>
				<IconButton
					colorScheme='inherit'
					variant='ghost'
					size={size}
					icon={value <= 1 ? <TrashIcon /> : <MinusIcon />}
					isDisabled={isLoading || isDisabled || value < 1}
					onClick={() => onChange(value - 1)}
					sx={{ flexGrow: 1 }}
				/>

				{isLoading ? (
					<CircularProgress
						isIndeterminate
						size='1.25em'
						color='currentColor'
						sx={{ minWidth: '1.8rem' }}
					/>
				) : (
					<Center sx={{ minWidth: '1.8rem' }}>{value}</Center>
				)}
				<IconButton
					colorScheme='inherit'
					variant='ghost'
					size={size}
					onClick={() => onChange(value + 1)}
					isDisabled={isLoading || isDisabled || value >= limit}
					icon={<PlusIcon />}
					sx={{ flexGrow: 1, padding: 0 }}
				/>
			</Button>
		</>
	)
}
