const { FieldValue } = require('firebase-admin/firestore')
const { auth } = require('firebase-functions')
const { db } = require('../../firebase')

const newUser = auth.user().onCreate(async user => {
	try {
		const batch = db.batch()
		const userRef = db.collection('users').doc(user.uid)

		batch.create(userRef, {
			uid: user.uid,
			created: FieldValue.serverTimestamp(),
			timestamp: FieldValue.serverTimestamp(),
		})

		await batch.commit()
		return true
	} catch (error) {
		return false
	}
})

module.exports = { newUser }
