const { FieldValue } = require('firebase-admin/firestore')
const { auth, logger } = require('firebase-functions')
const { db } = require('../../firebase')

const newUser = auth.user().onCreate(async user => {
	try {
		const batch = db.batch()
		const userRef = db.collection('users').doc(user.uid)

		batch.create(userRef, {
			uid: user.uid,
			created: FieldValue.serverTimestamp(),
			lastUpdate: FieldValue.serverTimestamp(),
		})

		await batch.commit()
		return true
	} catch ({ message }) {
		logger.error(message)
		return false
	}
})

module.exports = { newUser }