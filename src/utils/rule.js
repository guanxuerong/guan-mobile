
/***
 * Rule 验证对象
 * by:zhaohong
 * 2019-05-15
 */

import { Toast } from 'vant';

export const Rule = {
  /**
   * checkDataNull 验证数据为空
   * message  提示信息
   * trigger 指向类型  blur表单 change 选择
   */
  checkDataNull: (vaule, message) => {
    if (!vaule) {
      Toast(message);
      return false;
    }
    return true;
  },

  /**
   * checkDataLength 验证数据长度
   * min 最小字符
   * max 最大字符
   */
  checkDataLength: (value, min, max) => {
    if (!value) {
      Toast('输入内容不能为空');
      return false;
    }
    if (!min <= value.length <= max) {
      Toast('请输入' + min + '位至' + max + '位');
      return false;
    }
    return true;
  },

  /**
   * checkDataPhone 验证手机号
   */
  checkDataPhone: value => {
    const reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
    if (!value) {
      Toast('手机号不能为空');
      return false;
    }
    if (!reg.test(value)) {
      Toast('请输入正确的手机号');
      return false;
    }
    return true;
  },

  /**
   * checkDataLength 验证码
   * num 位数
   */
  checkDataCode: (value, num) => {
    if (!value) {
      Toast('输入验证码不能为空');
      return false;
    }
    if (value.length != num) {
      Toast('验证码限制为' + num + '位');
      return false;
    }
    return true;
  },

  /**
   * 身份证号码验证
   * 15到18位的数字加字母
   */
  checkCard: value => {
    if (!value) {
      Toast('身份证号不能为空');
      return false;
    }
    let reg = /^[a-zA-Z0-9]{15,18}$/;
    if (!reg.test(value)) {
      Toast('身份证号格式错误');
      return false;
    }
    return true;
  },

  /**
   * checkDataCard 验证身份证号
   */
  checkDataCard: value => {
    var city = {
      11: '北京',
      12: '天津',
      13: '河北',
      14: '山西',
      15: '内蒙古',
      21: '辽宁',
      22: '吉林',
      23: '黑龙江 ',
      31: '上海',
      32: '江苏',
      33: '浙江',
      34: '安徽',
      35: '福建',
      36: '江西',
      37: '山东',
      41: '河南',
      42: '湖北 ',
      43: '湖南',
      44: '广东',
      45: '广西',
      46: '海南',
      50: '重庆',
      51: '四川',
      52: '贵州',
      53: '云南',
      54: '西藏 ',
      61: '陕西',
      62: '甘肃',
      63: '青海',
      64: '宁夏',
      65: '新疆',
      71: '台湾',
      81: '香港',
      82: '澳门',
      91: '国外 '
    };
    var tip = '';
    var pass = true;
    //验证身份证格式（6个地区编码，8位出生日期，3位顺序号，1位校验位）
    if (
      !value ||
      !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(
        value
      )
    ) {
      Toast('身份证号格式错误或不能为空');
      return false;
    } else {
      //18位身份证需要验证最后一位校验位
      if (value.length == 18) {
        value = value.split('');
        //∑(ai×Wi)(mod 11)
        //加权因子
        var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        //校验位
        var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
        var sum = 0;
        var ai = 0;
        var wi = 0;
        for (var i = 0; i < 17; i++) {
          ai = value[i];
          wi = factor[i];
          sum += ai * wi;
        }
        var last = parity[sum % 11];
        if (parity[sum % 11] != value[17]) {
          Toast('身份证号格式错误');
          return false;
        }
      }
    }
    return true;
  },

  /**
   * checkDataAccount 验证包括中文字、英文字母、数字和下划线
   */
  checkDataAccount: value => {
    if (!value) {
      Toast('输入内容不能为空');
      return false;
    }
    if (value && !/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value)) {
      Toast('账号不符合规范');
      return false;
    }
    return true;
  },

  /**
   * checkDataCnText 验证只能输入中文
   */
  checkDataCnText: () => {
    if (!value) {
      Toast('输入内容不能为空');
      return false;
    }
    if (value && /[^\u4e00-\u9fa5]/.test(value)) {
      Toast('只能填写中文字符');
      return false;
    }
    return true;
  }
};
