'use strict';
exports.main = async (event, context) => {
	const db = uniCloud.database()
	const collection = db.collection('unicloud-test')
	const res = collection.where({
		product: event.product
	}).get()

	//返回数据给客户端
	return res
};