<template>
	<div id="app">
		<transition :name="transition"><router-view class="router-view" /></transition>
	</div>
</template>
<script>
export default {
	data() {
		return {
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
<style lang="less">
html,
body,
#app {
	padding: 0;
	margin: 0;
	height: 100%;
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	position: relative;
	overflow: hidden;
}
.waves-effect{
	position: relative;
	cursor: pointer;
	display: inline-block;
	overflow: hidden;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
	vertical-align: middle;
	z-index: 1;
	will-change: opacity, transform;
	transition: all .3s ease-out;
}
.waves-effect .waves-ripple {
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    opacity: 0;
    background: rgba(238,10,36,0.1);
    transition: all 0.7s ease-out;
    transition-property: opacity, -webkit-transform;
    transition-property: transform, opacity;
    transition-property: transform, opacity, -webkit-transform;
    -webkit-transform: scale(0);
    transform: scale(0);
    pointer-events: none;
}
.router-view {
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	overflow-y: auto;
	overflow-x: hidden;
	-webkit-overflow-scrolling: touch;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
	height: calc(100% - 45px);
	will-change: transform;
	transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1);
	position: absolute;
	backface-visibility: hidden;
	perspective: 1000;
}
.slide-right-enter,
.slide-right-enter-active {
	animation: bounce-left-in 300ms;
}
.slide-right-leave-active {
	animation: bounce-left-out 300ms;
}
.slide-left-enter,
.slide-left-enter-active {
	animation: bounce-right-in 300ms;
}
.slide-left-leave-active {
	animation: bounce-right-out 300ms;
}
@keyframes bounce-right-in {
	0% {
		transform: translate3d(100%, 0, 0);
	}
	100% {
		transform: translate3d(0px, 0, 0);
	}
}
@keyframes bounce-right-out {
	0% {
		transform: translate3d(0, 0, 0);
	}
	100% {
		transform: translate3d(-100%, 0, 0);
	}
}
@keyframes bounce-left-in {
	0% {
		transform: translate3d(-100%, 0, 0);
	}
	100% {
		transform: translate3d(0px, 0, 0);
	}
}
@keyframes bounce-left-out {
	0% {
		transform: translate3d(0, 0, 0);
	}
	100% {
		transform: translate3d(100%, 0, 0);
	}
}
</style>
