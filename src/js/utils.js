
// 工具函数
var utils = (function () {
    return {
        // 剩余天数
        leaveDay: function (endTime) {
            var nowTime = new Date().getTime();
            return parseInt((endTime - nowTime) / 1000 / 60 / 60 / 24);
        },
        // 秒转小时
        secToHour: function (seconds) {
            var result = 0;
            if (seconds > 0) {
                result = Math.floor(seconds / 3600);
                return result;
            }
            return result;
        },
        // 取cookie
        getCookie: function (name) {
            if (!name) return;
            var arr,
                reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)) {
                return unescape(arr[2]);
            } else {
                return null;
            }
        },
        // 设置cookie
        setCookie: function (name, value) {
            var days = 30;
            var exp = new Date();
            exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
            document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
        },
        // 单体模式
        singleton: function (fn) {
            var result;
            return function () {
                return result || (result = fn.apply(this, arguments));
            }
        }
    }
})();

export {utils};