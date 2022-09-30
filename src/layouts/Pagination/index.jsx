import { Button, Flex, IconButton, Text } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '../../boxicons'

export const Pagination = ({ sx, page, totalPages, setPage }) => {
	const onNext = () => setPage(page + 1)
	const onPrevious = () => setPage(page - 1)

	return (
		<Flex
			sx={{
				justifyContent: 'center',
				alignItems: 'center',
				gap: ['.5rem', '1rem'],
				color: 'onSurfaceMedium',
				...sx,
			}}
		>
			{page > 1 && (
				<>
					<IconButton
						variant='ghost'
						colorScheme={'gray'}
						color='primary'
						size='lg'
						onClick={onPrevious}
						icon={<ChevronLeftIcon />}
						sx={{ display: ['flex', 'none'] }}
					/>
					<Button
						size='lg'
						variant='ghost'
						colorScheme={'gray'}
						color='primary'
						onClick={onPrevious}
						leftIcon={<ChevronLeftIcon />}
						sx={{ display: ['none', 'flex'] }}
					>
						Anterior
					</Button>
				</>
			)}
			<Text>
				{page} de {totalPages}
			</Text>
			{page < totalPages && (
				<>
					<IconButton
						variant='ghost'
						colorScheme={'gray'}
						color='primary'
						size='lg'
						onClick={onNext}
						icon={<ChevronRightIcon />}
						sx={{ display: ['flex', 'none'] }}
					/>
					<Button
						size='lg'
						variant='ghost'
						colorScheme={'gray'}
						color='primary'
						onClick={onNext}
						rightIcon={<ChevronRightIcon />}
						sx={{ display: ['none', 'flex'] }}
					>
						Siguiente
					</Button>
				</>
			)}
		</Flex>
	)
}
