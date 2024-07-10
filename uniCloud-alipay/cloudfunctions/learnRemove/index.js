'use strict';
exports.main = async (event, context) => {
	const db = uniCloud.database()
	const collection = db.collection('unicloud-test')
	const res = await collection.doc(event.id).remove()
	if (res.deleted === 1) {
		return {
			status: 0,
			msg: '删除成功'
		}
	} else {
		return {
			status: -2,
			msg: '删除数据失败'
		}
	}
};