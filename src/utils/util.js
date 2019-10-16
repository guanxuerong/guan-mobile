import { Dialog, Toast } from 'vant';

/**
 * setStorage 存储
 * getStorage 取到
 * removeStorage 移除
 */
export const storage = {
	setStorage: (name, val) => {
		sessionStorage.setItem(name, val);
	},

	getStorage: (val) => {
		let str = sessionStorage.getItem(val);
		if (str) {
			try {
				var obj = JSON.parse(str);
				return obj;
			} catch (e) {
				return str;
			}
		} else {
			return null;
		}
	},
	removeStorage: (val) => {
		sessionStorage.removeItem(val)
	}
};

/**
 * vue 挂载
 * this...
 */

export default {
  install: function(Vue, options) {
    /**
     * 弹出窗
     * callback 返回函数
     *
     */

    Vue.prototype.Dialog = function(title, message, callback) {
      Dialog.alert({
        title: title ? title : '提示',
        message: message
      }).then(() => {
        if (callback) {
          callback();
        }
      });
    };

    /**
     * 时间戳转成时间格式
     * xxxx-xx-xx
     *
     */

    Vue.prototype.FmtDate = function(obj, type) {
      if (obj) {
        var date = new Date(obj);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? '0' + d : d;
        var h = date.getHours();
        h = h < 10 ? '0' + h : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? '0' + minute : minute;
        second = second < 10 ? '0' + second : second;
        if (type == 'year') {
          return y;
        } else if (type == 'month') {
          return y + '-' + m;
        } else if (type == 'date') {
          return y + '-' + m + '-' + d;
        }
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
      }
    };

    /**
     * Toast
     * 居中展示数据
     *
     */
    Vue.prototype.Toast = function(message,duration=3000) {
       Toast({
				message: message,
				duration: duration
			});
    };

    /**
     * 展示loading
     * showLoading
     */
    Vue.prototype.ShowLoading = function(message) {
      Toast.loading({
        mask: true,
        message: message,
        duration: 0
      });
    };

    /**
     * 隐藏loading
     * hideLoading
     */
    Vue.prototype.HideLoading = function() {
      Toast.clear();
    };

    /**
     * 返回上一页
     * -1,-2,-3
     *
     */
    Vue.prototype.Back = function() {
      this.$router.back(-1);
		};
		
		/**
     * 返回滚轮顶部
     * 
     *
     */
    Vue.prototype.BackScrollTop = function() {
       document.documentElement.scrollTop=0;
    };

    /**
     * 获取当前时间
     *
     */

    Vue.prototype.GetCurrentDate = function() {
      let date = new Date();
      let seperator1 = '-';
      let seperator2 = ':';
      let month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1;
      let strDate = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      let currentdate =
        date.getFullYear() +
        seperator1 +
        month +
        seperator1 +
        strDate +
        ' ' +
        date.getHours() +
        seperator2 +
        date.getMinutes() +
        seperator2 +
        date.getSeconds();
      return currentdate;
    };

    /**
     * 存储cookie
     * name 存储key
     * value 存储值
     * time 过期时间戳
     *
     */
    Vue.prototype.SetCookie = function(name, value, time) {
      var Days = 30;
      var exp = new Date();
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
      document.cookie =
        name + '=' + escape(value) + ';expires=' + exp.toGMTString();
    };

    /**
     *  生成随机文字图片
     *  identifyCode 值
     *
     */
    Vue.prototype.MakeCode = function(o, l, that) {
      for (let i = 0; i < l; i++) {
        that.identifyCode +=
          that.identifyCodes[that.RandomNum(0, that.identifyCodes.length)];
      }
    };
    Vue.prototype.RandomNum = function(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    };

    /**
     * 生成数字字母组合随机数
     */
    Vue.prototype.RandomRange = function(min, max) {
      var returnStr = '',
        range = max ? Math.round(Math.random() * (max - min)) + min : min,
        arr = [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'u',
          'v',
          'w',
          'x',
          'y',
          'z',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z'
        ];
      for (var i = 0; i < range; i++) {
        var index = Math.round(Math.random() * (arr.length - 1));
        returnStr += arr[index];
      }
      return returnStr;
    };
  }
};


/**
     * 展示loading
     * showLoading
     */
    export function ShowLoading(message) {
      Toast.loading({
        mask: true,
        message: message,
        duration: 0
      });
    };

    /**
     * 隐藏loading
     * hideLoading
     */
    export function HideLoading() {
      Toast.clear();
    };

