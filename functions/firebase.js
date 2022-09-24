const { credential } = require('firebase-admin')
const { initializeApp } = require('firebase-admin/app')
const { getFirestore } = require('firebase-admin/firestore')

const serviceAccount = require('./serviceAccountKey.json')

initializeApp({
	credential: credential.cert(serviceAccount),
})

const db = getFirestore()

module.exports = { db }
