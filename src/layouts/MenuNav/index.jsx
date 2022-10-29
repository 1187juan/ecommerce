import {
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	useToast,
} from '@chakra-ui/react'
import { deleteUser, signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LogInIcon, LogOutIcon, TrashIcon, UserIcon } from '../../boxicons'
import { ButtonNav } from '../../components'
import { auth } from '../../firebase'

export const MenuNav = ({ colorScheme }) => {
	const isLogin = useSelector(({ auth }) => auth.isLogin)
	const toast = useToast()

	const onLogout = async () => {
		try {
			await signOut(auth)
		} catch ({ message }) {
			toast({
				status: 'error',
				title: message,
				isClosable: true,
			})
		}
	}

	const onDeleteAccount = async () => {
		try {
			await deleteUser(auth.currentUser)
			toast({
				status: 'success',
				title: 'Cuenta borrada con exito!',
				isClosable: true,
			})
		} catch ({ message }) {
			toast({
				status: 'error',
				title: message,
				isClosable: true,
			})
		}
	}

	if (!isLogin)
		return (
			<ButtonNav
				as={Link}
				to='/login'
				colorScheme={colorScheme}
				label='Acceder'
				icon={<LogInIcon />}
			/>
		)

	return (
		<Menu>
			<ButtonNav
				as={MenuButton}
				colorScheme={colorScheme}
				label='Menu'
				icon={<UserIcon />}
				sx={{
					span: {
						display: 'flex',
						justifyContent: 'center',
					},
				}}
			/>

			<MenuList sx={{ color: 'onSurfaceHigh' }}>
				<MenuItem icon={<LogOutIcon />} onClick={onLogout}>
					Salir
				</MenuItem>
				<MenuItem icon={<TrashIcon />} onClick={onDeleteAccount}>
					Eliminar cuenta
				</MenuItem>
			</MenuList>
		</Menu>
	)
}
