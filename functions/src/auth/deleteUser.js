const { auth, logger } = require('firebase-functions')
const { db } = require('../../firebase')

const deleteUser = auth.user().onDelete(async user => {
	try {
		await db.collection('users').doc(user.uid).delete()
		await db.collection('baskets').doc(user.uid).delete()
		return true
	} catch ({ message }) {
		logger.log(message)
		return false
	}
})

module.exports = { deleteUser }
