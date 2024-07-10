<template>
  <view class="content">
    <view class="title">基础示例-云函数</view>
    <view class="btn-list">
      <button type="primary" @click="add">新增一条数据</button>
      <button type="primary" @click="remove">删除一条数据</button>
      <button type="primary" @click="update">修改数据</button>
      <button type="primary" @click="get">查询前10条数据</button>
      <button type="primary" @click="useCommon">使用公用模块</button>
      <button type="primary" @click="toRedisPage">使用Redis</button>
      <button type="primary" @click="addTodo">新增一条todo(云对象)</button>
      <button type="primary" @click="addTodoFun">新增一条todo(云函数)</button>
      <!-- #ifdef APP-PLUS || MP-WEIXIN -->
      <navigator url="../secure-network/cloud-function">
        <button type="primary">安全网络</button>
      </navigator>
      <!-- #endif -->
    </view>
    <view class="fixedView"></view>
  </view>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    add() {
      uni.showLoading({
        title: '处理中...',
      })
      uniCloud
        .callFunction({
          name: 'add',
          data: {
            product: 'uniCloud',
            create_time: Date.now(),
          },
        })
        .then((res) => {
          uni.hideLoading()
          uni.showModal({
            content: `成功添加一条数据，文档id为：${res.result.id}`,
            showCancel: false,
          })
          console.log(res)
        })
        .catch((err) => {
          uni.hideLoading()
          uni.showModal({
            content: `添加数据失败，错误信息为：${err.message}`,
            showCancel: false,
          })
          console.error(err)
        })
    },
    remove() {
      uni.showLoading({
        title: '处理中...',
      })
      uniCloud
        .callFunction({
          name: 'remove',
        })
        .then((res) => {
          uni.hideLoading()
          uni.showModal({
            content: res.result.msg,
            showCancel: false,
          })
          console.log(res)
        })
        .catch((err) => {
          uni.hideLoading()
          uni.showModal({
            content: `删除失败，错误信息为：${err.message}`,
            showCancel: false,
          })
          console.error(err)
        })
    },
    update() {
      uni.showLoading({
        title: '处理中...',
      })
      uniCloud
        .callFunction({
          name: 'update',
          data: {
            product: 'uni-app',
            create_time: Date.now(),
          },
        })
        .then((res) => {
          uni.hideLoading()
          uni.showModal({
            content: res.result.msg,
            showCancel: false,
          })
          console.log(res)
        })
        .catch((err) => {
          uni.hideLoading()
          uni.showModal({
            content: `更新操作执行失败，错误信息为：${err.message}`,
            showCancel: false,
          })
          console.error(err)
        })
    },
    get() {
      uni.showLoading({
        title: '处理中...',
      })
      uniCloud
        .callFunction({
          name: 'get',
        })
        .then((res) => {
          uni.hideLoading()
          uni.showModal({
            content: `查询成功，获取数据列表为：${JSON.stringify(res.result.data)}`,
            showCancel: false,
          })
          console.log(res)
        })
        .catch((err) => {
          uni.hideLoading()
          uni.showModal({
            content: `查询失败，错误信息为：${err.message}`,
            showCancel: false,
          })
          console.error(err)
        })
    },
    useCommon() {
      console.log('请确保自己已经阅读并按照公用模块文档操作 https://uniapp.dcloud.io/uniCloud/cf-common')
      uniCloud
        .callFunction({
          name: 'use-common',
        })
        .then((res) => {
          uni.hideLoading()
          uni.showModal({
            content: '云函数use-common返回结果：' + JSON.stringify(res.result),
            showCancel: false,
          })
          console.log(res)
        })
        .catch((err) => {
          uni.hideLoading()
          uni.showModal({
            content: `云函数use-common执行失败，错误信息为：${err.message}`,
            showCancel: false,
          })
          console.error(err)
        })
    },
    toRedisPage() {
      uni.navigateTo({
        url: '/pages/cloudFunction/redis/redis',
      })
    },
    async addTodo() {
      const { add } = uniCloud.importObject('todo')
      try {
        const res = await add('aa', 'bb')
        uni.showToast({
          title: '创建成功',
        })
      } catch (e) {}
    },
    addTodoFun() {
      uni.showLoading({
        title: '处理中...',
      })
      uniCloud
        .callFunction({
          name: 'addToDo',
          data: {
            a: 1,
            b: 2,
          },
        })
        .then((res) => {
          uni.hideLoading()
          uni.showToast({
            title: '创建成功',
          })
        })
        .catch((e) => uni.hideLoading())
    },
  },
}
</script>

<style>
.content {
  padding-bottom: 30px;
}

.title {
  font-weight: bold;
  text-align: center;
  padding: 20px 0px;
  font-size: 20px;
}

.tips {
  color: #999999;
  font-size: 14px;
  padding: 20px 30px;
}

.btn-list {
  padding: 0px 30px;
}

.btn-list button {
  margin-bottom: 20px;
}

.upload-preview {
  width: 100%;
}
</style>
