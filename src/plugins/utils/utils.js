const UNITS = {
	年: 31557600000,
	月: 2629800000,
	天: 86400000,
	小时: 3600000,
	分钟: 60000,
	秒: 1000,
};

export default {
	humanize: (milliseconds) => {
		let humanize = "";
		for (let key in UNITS) {
			if (milliseconds >= UNITS[key]) {
				humanize = Math.floor(milliseconds / UNITS[key]) + key + "前";
				break;
			}
		}
		return humanize || "刚刚";
	},

	format: (dateStr) => {
		let date = parse(dateStr);
		let diff = Date.now() - date.getTime();
		if (diff < UNITS["天"]) {
			return humanize(diff);
		}
		let _format = function (number) {
			return number < 10 ? "0" + number : number;
		};
		return (
			date.getFullYear() +
			"/" +
			_format(date.getMonth() + 1) +
			"/" +
			_format(date.getDate()) +
			"-" +
			_format(date.getHours()) +
			":" +
			_format(date.getMinutes())
		);
	},

	parse: (str) => {
		//将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		let a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	},

	/**
	 * 数据处理
	 * @author echo.
	 * @version 1.5.0
	 **/
	//去空格
	trim: (value) => {
		return value.replace(/(^\s*)|(\s*$)/g, "");
	},
	//内容替换
	replaceAll: (text, repstr, newstr) => {
		return text.replace(new RegExp(repstr, "gm"), newstr);
	},
	replaceBank: (bankAccount) => {
		let reg = /^(.{4})(?:\d+)(.{4})$/;
		let str = bankAccount.replace(reg, "$1 **** **** $2");
		return str;
	},
	//格式化手机号码
	formatNumber: (num) => {
		return num.length === 11 ? num.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") : num;
	},
	//金额格式化
	rmoney: (money) => {
		return parseFloat(money)
			.toFixed(2)
			.toString()
			.split("")
			.reverse()
			.join("")
			.replace(/(\d{3})/g, "$1,")
			.replace(/\,$/, "")
			.split("")
			.reverse()
			.join("");
	},
	//日期格式化
	formatDate: (formatStr, fdate) => {
		if (fdate) {
			if (~fdate.indexOf(".")) {
				fdate = fdate.substring(0, fdate.indexOf("."));
			}
			fdate = fdate.toString().replace("T", " ").replace(/\-/g, "/");
			let fTime,
				fStr = "ymdhis";
			if (!formatStr) formatStr = "y-m-d h:i:s";
			if (fdate) fTime = new Date(fdate);
			else fTime = new Date();
			let month = fTime.getMonth() + 1;
			let day = fTime.getDate();
			let hours = fTime.getHours();
			let minu = fTime.getMinutes();
			let second = fTime.getSeconds();
			month = month < 10 ? "0" + month : month;
			day = day < 10 ? "0" + day : day;
			hours = hours < 10 ? "0" + hours : hours;
			minu = minu < 10 ? "0" + minu : minu;
			second = second < 10 ? "0" + second : second;
			let formatArr = [fTime.getFullYear().toString(), month.toString(), day.toString(), hours.toString(), minu.toString(), second.toString()];
			for (let i = 0; i < formatArr.length; i++) {
				formatStr = formatStr.replace(fStr.charAt(i), formatArr[i]);
			}
			return formatStr;
		} else {
			return "";
		}
	},
	formatTime: (time) => {
		if (typeof time !== "number" || time < 0) {
			return time;
		}

		let hour = parseInt(time / 3600);
		time = time % 3600;
		let minute = parseInt(time / 60);
		time = time % 60;
		let second = time;

		return [hour, minute, second]
			.map(function (n) {
				n = n.toString();
				return n[1] ? n : "0" + n;
			})
			.join(":");
	},
	formatLocation: (longitude, latitude) => {
		if (typeof longitude === "string" && typeof latitude === "string") {
			longitude = parseFloat(longitude);
			latitude = parseFloat(latitude);
		}

		longitude = longitude.toFixed(2);
		latitude = latitude.toFixed(2);

		return {
			longitude: longitude.toString().split("."),
			latitude: latitude.toString().split("."),
		};
	},
	rgbToHex: (r, g, b) => {
		return "#" + toHex(r) + toHex(g) + toHex(b);
	},
	toHex: (n) => {
		n = parseInt(n, 10);
		if (isNaN(n)) return "00";
		n = Math.max(0, Math.min(n, 255));
		return "0123456789ABCDEF".charAt((n - (n % 16)) / 16) + "0123456789ABCDEF".charAt(n % 16);
	},
	hexToRgb: (hex) => {
		let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result
			? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16),
			  }
			: null;
	},
};
