// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function() { // 通用预处理器

	},
	add: function(title, content) {
		const cloudInfo = this.getCloudInfo()
		// 参数校验，如无参数则不需要
		if (!title || !content) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		title = title.trim()
		content = content.trim()
		// 业务逻辑

		// 返回结果
		return {
			errCode: 0,
			errMsg: cloudInfo,
		}
	}

}