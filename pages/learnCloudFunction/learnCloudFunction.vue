<template>
  <view class="content">
    <view class="title">云函数</view>
    <view class="btn-list">
      <button type="primary" @click="add">新增一条数据</button>
      <button type="primary" @click="remove">删除一条数据</button>
      <button type="primary" @click="update">修改数据</button>
      <button type="primary" @click="get">查询前10条数据</button>
      <button type="primary" @click="getData">查询数据</button>
    </view>
  </view>
</template>

<script setup>
const add = () => {
  uni.showLoading({
    title: '处理中...',
  })
  uniCloud
    .callFunction({
      name: 'add',
      data: {
        product: 'uniCloudLearn',
        create_time: Date.now(),
      },
    })
    .then((res) => {
      uni.hideLoading()
      uni.showToast({
        title: '创建成功',
      })
    })
    .catch((e) => {
      uni.hideLoading()
      uni.showToast({
        title: '创建失败',
      })
    })
}
//删除
const remove = () => {
  uni.showLoading({
    title: '处理中...',
  })
  uniCloud
    .callFunction({
      name: 'learnRemove',
      data: {
        id: '664566d216a0f7565d02c7b3',
      },
    })
    .then((res) => {
      console.log(res)
      uni.hideLoading()
      uni.showToast({
        title: res.result.msg,
      })
    })
    .catch((e) => {
      uni.hideLoading()
      uni.showToast({
        title: res.result.msg,
      })
    })
}
//修改
const update = () => {
  uni.showLoading({
    title: '处理中...',
  })
  uniCloud
    .callFunction({
      name: 'learnUpdate',
      data: {
        id: '6645645616a0f7565d02c33c',
        product: '这是修改的数据',
      },
    })
    .then((res) => {
      uni.hideLoading()
      uni.showToast({
        title: res.result.msg,
      })
    })
    .catch((e) => {
      uni.hideLoading()
      uni.showToast({
        title: res.result.msg,
      })
    })
}
const get = () => {
  uni.showLoading({
    title: '处理中...',
  })
  uniCloud
    .callFunction({
      name: 'learnGet',
    })
    .then((res) => {
      uni.hideLoading()
      uni.showModal({
        content: `${JSON.stringify(res.result.data)}`,
        showCancel: false,
      })
    })
    .catch((e) => {
      uni.hideLoading()
      uni.showToast({
        title: res.result.msg,
      })
    })
}
const getData = () => {
  uni.showLoading({
    title: '处理中...',
  })
  uniCloud
    .callFunction({
      name: 'learnGetData',
      data: {
        product: '这是修改的数据',
      },
    })
    .then((res) => {
      uni.hideLoading()
      uni.showModal({
        content: `${JSON.stringify(res.result.data)}`,
        showCancel: false,
      })
    })
    .catch((e) => {
      uni.hideLoading()
      uni.showToast({
        title: res.result.msg,
      })
    })
}
</script>

<style scoped>
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
