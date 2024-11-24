import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import {onMounted} from "vue";
import {clickEffect} from "./utils/fireworks.js";
import "vuepress-theme-hope/presets/round-blogger-avatar.scss"
export default defineClientConfig({
	setup() {
		onMounted(() => {
			clickEffect();//调用特效函数
		})
		setupTransparentNavbar({type: 'homepage', light: 'rgba(235,235,245,0.86)'})
		setupRunningTimeFooter(new Date("2024-11-24"), {
			"/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒"
		})
	}
})