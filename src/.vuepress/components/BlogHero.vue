<script setup lang="ts">
import BlogHero from "vuepress-theme-hope/blog/components/BlogHero.js";
import HitokotoBlogHero from "vuepress-theme-hope/presets/HitokotoBlogHero.js";
import BingHeroBackground from "vuepress-theme-hope/presets/BingHeroBackground.js";
</script>

<template>
	<BlogHero>
		<template #info="info">
			<HitokotoBlogHero v-bind="info"  alt="" :text="info.text"/>
		</template>
		<template #bg>
			<bing-hero-background />
		</template>
	</BlogHero>
</template>

<style scoped lang="sass">
</style>