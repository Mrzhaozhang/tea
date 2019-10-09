<template>
	<div class="home">
		<transition :name="transition"><router-view class="router-child-view" /></transition>
		<van-tabbar v-model="active">
			<van-tabbar-item replace to="/dynamic">动态<span v-effect></span></van-tabbar-item>
			<van-tabbar-item replace to="/mall">商城<span v-effect></span></van-tabbar-item>
			<van-tabbar-item icon="fire-o"><span v-effect></span></van-tabbar-item>
			<van-tabbar-item replace to="/message">消息<span v-effect></span></van-tabbar-item>
			<van-tabbar-item replace to="/self">我的<span v-effect></span></van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
	name: 'home',
	components: {},
	data() {
		return {
			active: 0,
			transition: null
		};
	},
	watch: {
		$route(to, from) {
			if (to.meta.pageIndex > from.meta.pageIndex) {
				this.transition = 'slide-left';
			} else if (to.meta.pageIndex < from.meta.pageIndex) {
				this.transition = 'slide-right';
			}
		}
	}
};
</script>
<style lang="less" scoped>
.home {
	height: 100%;
	position: relative;
	.router-child-view {
		position: absolute;
		height: calc(100% - 50px);
		width: 100%;
		left: 0;
		top: 0;
		overflow-y: auto;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
	}
	.van-tabbar-item{
		position: relative;
	}
	.waves-effect{
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
	}
}
</style>
