// pages/login/index.js
import { login,upload } from '../../utils/api'
// import { uploadImage } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account:'',
    password:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //绑定input框的值
  bindValue(e){
     console.log(e.detail.value)
    let type = e.currentTarget.dataset.type
    this.setData({
      [type]:e.detail.value
    })
  },
  
  //图片上传
  uploasImage(){
    upload().then(res=>{
      console.log(res)
    })
  },
  
  //提交登陆请求
  submit(){
    let param = {
      telephone:this.data.account,
      password:this.data.password
    }
     login(param).then(res=>{
      //  下面部分是自己对业务的处理
       if(res.status == 200){
         wx.$Toast('登陆成功')
       }
     })
  }
})