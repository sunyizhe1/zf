<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in SwiperList" :key="item.id">
        <img v-lazy="baseUrl + item.imgSrc" class="lazy-img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 搜索框 -->
    <div class="search">
      <van-search
        v-model="value"
        show-action
        placeholder="请输入小区或地址"
        @search="onSearch"
      >
        <template #label>
          <span @click="$router.push({ name: 'city' })">地址</span>
        </template>
        <template #action>
          <div @click="onSearch">
            <van-icon name="location-o" size="20px" />
          </div>
        </template>
      </van-search>
    </div>
    <!-- 选择 -->
    <van-row type="flex" justify="center">
      <van-col span="6">
        <van-icon name="wap-home-o" />
        <p class="info">整租</p>
      </van-col>
      <van-col span="6">
        <van-icon name="friends-o" />
        <p class="info">合租</p>
      </van-col>
      <van-col span="6">
        <van-icon name="location-o" />
        <p class="info">地图找房</p>
      </van-col>
      <van-col span="6" @click="$router.push({ name: 'publish' })">
        <van-icon name="description" />
        <p class="info">去出租</p>
      </van-col>
    </van-row>
    <!-- 租房小组 -->
    <div class="group">
      <div class="title">
        <h3>租房小组</h3>
        <span>更多</span>
      </div>
      <van-row>
        <van-col span="12" v-for="item in groups" :key="item.id">
          <van-image
            :src="baseUrl + item.imgSrc"
            style="float: left; padding-top: 19px"
          />
          <div class="content">
            <p>{{ item.title }}</p>
            <p>{{ item.desc }}</p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload } from 'vant'
import { getSwiper, getGroup } from '@/api/home'

Vue.use(Lazyload)
export default {
  async created () {
    const res = await getSwiper()
    this.SwiperList = res.data.body
    const res2 = await getGroup({ area: 'AREA|88cff55c-aaa4-e2e0' })
    this.groups = res2.data.body
  },
  data () {
    return {
      value: '',
      SwiperList: [],
      baseUrl: 'http://liufusong.top:8080',
      groups: []

    }
  },
  methods: {
    onSearch () {

    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  height: 212px;
  line-height: 212px;
  text-align: center;
  background-color: #39a9ed;
  position: relative;
  margin-bottom: 20px;
  img {
    height: 100%;
  }
}
.search {
  position: absolute;
  width: 360px;
  height: 34px;
  top: 2%;
  left: 2%;
  z-index: 1;
  .van-search {
    background-color: unset;
  }
}
.info {
  font-size: 14px;
}

.van-icon {
  font-size: 40px;
  color: #04af68;
}
.van-col {
  text-align: center;
}
.group {
  padding: 0 10px;
  background-color: #f6f5f6;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0 15px 10px;
    font-size: 15px;
    justify-content: space-between;
    align-items: center;
  }
}
.content {
  font-size: 14px;
}
.van-image {
  height: 50px;
  width: 50px;
}
.van-row {
  background-color: #fff;
}
</style>
