// index.js
Page({
    data: {
      userCode: '',
      errorMessage: ''
    },
    getUserCode: function () {
      var that = this;
      wx.login({
        success: function (loginRes) {
          if (loginRes.code) {
            console.log('用户登录凭证 code:', loginRes.code);
            that.setData({
              userCode: loginRes.code
            });
          } else {
            that.setData({
              errorMessage: '登录失败：' + loginRes.errMsg
            });
            console.error('登录失败！' + loginRes.errMsg);
          }
        }
      });
    },
    copyCode: function () {
      var userCode = this.data.userCode;
      wx.setClipboardData({
        data: userCode,
        success: function () {
          wx.showToast({
            title: '复制成功',
            icon: 'success',
            duration: 2000
          });
        },
        fail: function (err) {
          wx.showToast({
            title: '复制失败',
            icon: 'none',
            duration: 2000
          });
          console.error('复制失败:', err);
        }
      });
    }
  });