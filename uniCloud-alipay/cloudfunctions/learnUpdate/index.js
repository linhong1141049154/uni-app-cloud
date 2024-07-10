'use strict';
exports.main = async (event, context) => {
	const db = uniCloud.database()
	const collection = db.collection('unicloud-test')
	const {
		id,
		...data
	} = event
	const res = await collection.doc(id).update(data)
	if (res.updated === 1) {
		return {
			status: 0,
			msg: `修改成功`
		}
	} else {
		return {
			status: -1,
			msg: `修改失败`
		}
	}
};