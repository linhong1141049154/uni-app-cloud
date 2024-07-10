'use strict';
exports.main = async (event, context) => {
	const db = uniCloud.database()
	const collection = db.collection('unicloud-test')
	const res = await collection.add(event)
	return res
};