import { IMG_URL } from './util'
//时间处理
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//轻弹框
const Toast = (str,icon = 'none', duration = 1000) => {
  wx.showToast({
    title: str,
    icon:icon,
    duration:duration,
    mask:true
  })
}
//节流
function throttle(fn,interval = 1000){
  //触发的时间
  let enterTime = 0;
  let gapTime = interval;
  return function(){
    let context = this;
    let backTime = new Date();
    if (backTime - enterTime > gapTime){
      fn.call(context,arguments);
      enterTime = backTime
    }
  }
}
//防抖
function debounce(fn,interval = 1000){
  let timerId = null;
  let flag = true;
  return function(){
    clearTimeout(timerId);
    if(flag){
      fn.apply(this,arguments);
      flag = false;
    }
    timerId = setTimeout(()=>{ flag = true},interval)
  }
}

//图片上传
function uploadImage(url) {
  let that = this;
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          filePath: tempFilePaths[0],
          url: IMG_URL + url,
          success(res) {
            console.log(res,'image')
            resolve(res)
          }
        })
      },
      fail:(error)=>{
        reject(error)
      },
      complete: (res) => { },
    })
  })
}

//无感登陆

module.exports = {
  formatTime,
  throttle,
  debounce,
  Toast,
  uploadImage
}
