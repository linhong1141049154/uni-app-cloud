'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {
		a,
		b
	} = event

	//返回数据给客户端
	return {
		sum: a + b,
		errCode: 0,
		errMsg: ''
	}
};