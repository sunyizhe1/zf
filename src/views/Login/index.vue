<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="账号登录" left-arrow />
    <!-- 表单 -->
    <van-form @submit="onSubmit" ref="from">
      <van-field
        v-model="username"
        name="username"
        placeholder="请输入账号"
        :rules="[
          { required: true, message: '请填写用户名' },
          {
            pattern: /^[a-zA-Z0-9_-]{5,8}$/,
            message: '用户名格式为 5-8 位的字母和数字',
          },
        ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="请输入密码"
        :rules="[
          { required: true, message: '请填写密码' },
          {
            pattern: /^[a-zA-Z0-9]{5,12}$/,
            message: '密码格式为 5-12 位的字母和数字',
          },
        ]"
      />
      <div style="margin: 16px">
        <van-button
          square
          block
          type="info"
          native-type="submit"
          color="#21b97a"
          >登录</van-button
        >
      </div>
    </van-form>
    <p>还没有账号呢，去注册一个吧</p>
  </div>
</template>

<script>
import { login } from '@/api/user.js'
import { setToken } from '@/utils/token'
export default {
  created () { },
  data () {
    return {
      username: 'heima',
      password: '123456'
    }
  },
  methods: {
    async onSubmit (values) {
      // 可以用values（收集参数名和值）
      // console.log(values)
      try {
        const res = await login(values)
        console.log(res)
        setToken(res.data.body.token)
        this.$toast('登录成功')
        this.$router.push('/my')
      } catch (err) {
        console.log(err)
        this.$toast.fail('用户名和密码的格式不对哦')
      }
    }
    // async onLogin () {
    //   await this.$refs.form.validate(['username', 'password'])
    // }

  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.van-nav-bar {
  margin-bottom: 30px;
}
/deep/ .van-field__control {
  border-bottom: 2px solid #f6f6f6 !important;
  font-size: 18px;
  padding: 10px 0 30px 0;
  height: 30px;
  line-height: 30px;
}

p {
  font-size: 14px;
  text-align: center;
  color: #666666;
}
</style>
