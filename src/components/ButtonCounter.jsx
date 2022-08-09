import { Button, Center, IconButton } from '@chakra-ui/react'

export const ButtonCounter = ({
	value = 1,
	colorScheme = 'gray',
	variant = 'solid',
	size = 'md',
	onAdd,
	onSubtract,
	limit = Number.POSITIVE_INFINITY,
	...props
}) => {
	return (
		<Button
			as='div'
			colorScheme={colorScheme}
			variant={variant}
			size={size}
			sx={{
				justifyContent: props.isLoading ? 'center' : 'space-between',
				gap: '1rem',
				padding: 0,
			}}
			{...props}
		>
			<IconButton
				colorScheme='inherit'
				variant='ghost'
				size={size}
				icon={<Center>{value <= 1 ? '🗑' : '-'}</Center>}
				onClick={onSubtract}
				disabled={!value}
			/>
			<Center>{value}</Center>
			<IconButton
				variant='ghost'
				colorScheme='inherit'
				size={size}
				onClick={onAdd}
				disabled={value >= limit}
				icon={<Center>+</Center>}
			/>
		</Button>
	)
}
