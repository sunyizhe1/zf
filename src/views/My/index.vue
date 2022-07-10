<template>
  <div>
    <div class="MyTitle">
      <div class="MyInfo">
        <div class="MyIcon">
          <van-image
            class="tx"
            round
            width="60px"
            height="60px"
            :src="avatarObj"
          />
        </div>
        <div class="MyUser">
          <div class="MyName">{{ nickName }}</div>
          <div class="MyLogin">
            <van-button type="primary" size="small" round @click="changetips">{{
              tips
            }}</van-button>
          </div>
        </div>
      </div>
    </div>

    <div class="MyOption">
      <van-row type="flex" justify="center">
        <van-col
          span="8"
          v-for="(item, index) in options"
          :key="index"
          align="center"
        >
          <van-icon :name="names[index]" size="20" />
          <p>{{ item }}</p></van-col
        >
      </van-row>
    </div>
    <div class="Myad">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
import { getUserData } from '@/api/user'
import { getToken, removeToken } from '@/utils/token'
export default {
  async created () {
    const res = await getUserData()
    console.log(res)

    // token不存在，显示未登录状态
    if (!getToken()) {
      this.tips = '登录'
    }
    // token存在证明登录成功，获取用户信息渲染页面
    this.nickName = res.data.body.nickname
    // 头像与背景同步为后端传入的图片路径
    this.avatarObj = `http://liufusong.top:8080${res.data.body.avatar}`
  },
  data () {
    return {
      options: [
        '我的收藏',
        '我的出租',
        '看房记录',
        '成为房主',
        '个人资料',
        '联系我们'
      ],
      names: ['star-o', 'wap-home-o', 'clock-o', 'debit-pay', 'user-o', 'service-o'],
      tips: '退出',
      nickName: 'USER',
      avatarObj: 'http://liufusong.top:8080/img/profile/avatar.png'
    }
  },
  methods: {
    // login () {
    //   this.$router.replace({ name: 'login' })
    // },
    changetips () {
      if (this.tips === '退出') {
        this.$dialog.confirm({
          title: '提示',
          message: '是否确认退出'
        }).then(async () => {
          this.tips = '登录'
          this.nickName = '游客'
          // 退出后头像与图片切换为默认显示
          this.avatarObj = 'http://liufusong.top:8080/img/profile/avatar.png'
          this.bgObj = 'http://liufusong.top:8080/img/profile/bg.png'
          // 调用登出接口
          // await loginOutData()
          // 手动清除token
          removeToken()
        })
          .catch(() => { })
      } else {
        this.$router.push({ name: 'login' })
      }
    }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.MyTitle {
  position: relative;
  width: 100%;
  min-height: 300px;
  background: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2019-4%2F15566033988126524.jpg&refer=http%3A%2F%2Fpic.qqtn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658912928&t=8701b694278e89915850ed842f6a7273")
    no-repeat center;
}
// background-color: pink;
.MyInfo {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 320px;
  height: 160px;
  background-color: #fff;
  box-shadow: 0 0 10px 3px #ddd;
}

.tx {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translate(-50%);
}
.MyName {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 15px;
}
.MyUser {
  text-align: center;
}
.MyOption {
  // background-color: pink;
  width: 100%;
  height: 150px;
  margin: 15px auto;
  p {
    font-size: 13px;
  }
}
.van-row {
  margin-bottom: 10px;
}
.Myad {
  text-align: center;
  img {
    width: 340px;
  }
}
</style>
