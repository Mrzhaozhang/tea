import Vue from 'vue'
(function() {
	Vue.directive('effect', {
		bind: function(el, binding, vnode) {
			el.classList.add('waves-effect')
			binding.value && el.classList.add('waves-' + binding.value)

			function convertStyle(obj) {
				var style = '';
				for (var a in obj) {
					if (obj.hasOwnProperty(a)) {
						style += (a + ':' + obj[a] + ';');
					}
				}
				return style;
			}
			vnode.handler = function(e) {
				var ripple = document.createElement('div');
				ripple.classList.add('waves-ripple');
				el.appendChild(ripple);
				var styles = {
					'left': e.layerX + 'px',
					'top': e.layerY + 'px',
					'opacity': 1,
					'transform': 'scale(' + ((el.clientWidth / 100) * 10) + ')',
					'transition-duration': '750ms',
					'transition-timing-function': 'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
				};
				ripple.setAttribute('style', convertStyle(styles));
				let timeoutA = setTimeout(function() {
					ripple.setAttribute('style', convertStyle({
						'opacity': 0,
						'transform': styles.transform,
						'left': styles.left,
						'top': styles.top
					}));
					let timeoutB = setTimeout(function() {
						ripple && el.removeChild(ripple);
						clearTimeout(timeoutA);
						clearTimeout(timeoutB);
					}, 750);
				}, 450);
			}
			el.addEventListener('mousedown', vnode.handler, false)
		},
		unbind: function(el, binding, vnode) {
			el.removeEventListener('mousedown', vnode.handler)
		}
	})
})();
