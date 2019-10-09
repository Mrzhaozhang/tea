<template>
	<div class="dynamic">
		<van-tabs :lineHeight="1" animated sticky swipeable>
			<van-tab>
				<span v-effect class="van-ellipsis" slot="title">发现</span>
			</van-tab>
			<van-tab>
				<span v-effect class="van-ellipsis" slot="title">圈子</span>
				内容 2
			</van-tab>
		</van-tabs>
	</div>
</template>

<script>
export default {
	data() {
		return {
			
		};
	}
};
</script>

<style lang="less" scoped>
.dynamic,
.van-tabs {
	height: 100%;
}
</style>
