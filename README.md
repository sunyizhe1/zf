:rules="[
{ required: true, message: '请填写用户名' },
{
pattern: /^[a-zA-Z0-9_-]{5,8}$/,
message: '用户名格式为 5-8 位的字母和数字',
},
]"

:rules="[
{ required: true, message: '请填写密码' },
{
pattern: /^[a-zA-Z0-9]{5,12}$/,
message: '密码格式为 5-12 位的字母和数字',
},
]"
