import { get, post } from '@/request/http'

const api = {}

// 图片验证码
api.picCode = p => get('member/kaptcha', p);


export default api