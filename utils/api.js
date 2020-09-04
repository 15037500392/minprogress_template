import { get, post,post_form } from './http.js'
import { uploadImage } from './util.js'

//登陆
export const login = data => { return post('app/user/login',data)}
//图片上传
export const upload = () =>{ return uploadImage('app/upload/image')}