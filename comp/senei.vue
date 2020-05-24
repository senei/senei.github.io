<template>
	<h1 v-bind:class="transformClass">
		<span class="s" @click="trigger('s', 'who', $event)" ref="s" v-bind:style="transformScom">s</span>
		<span class="e" @click="trigger('e', 'what', $event)" ref="e" v-bind:style="transformEcom">e</span>
		<span class="n" @click="trigger('n', 'where', $event)" ref="n" v-bind:style="transformNcom">n</span>
		<span class="ei" @click="trigger('ei', 'when', $event)" ref="ei" v-bind:style="transformEIcom">ei</span>
		<small @click="trigger('web', '/')"> <span class="_web">web</span> </small>
	</h1>
</template>

<script>
	import { ref, computed } from "vue";
	import router from "../router/router.js";

	export default {
		setup() {
			const _mainClass = "flex-auto text-center name";
			const _hash =
				window.location.hash.substr(1) !== "/"
					? window.location.hash.substr(2)
					: "start";
					console.log(_hash)
			const transformId = ref(_hash);
			const transforms = ref({
				s: [],
				e: [],
				n: [],
				ei: [],
			});
			const transformScom = computed(
				() => "transform: translate(" + transforms.value.s[0] + "px," + transforms.value.s[1] + "px)"
			);
			const transformEcom = computed(
				() => "transform: translate(" + transforms.value.e[0] + "px," + transforms.value.e[1] + "px)"
			);
			const transformNcom = computed(
				() => "transform: translate(" + transforms.value.n[0] + "px," + transforms.value.n[1] + "px)"
			);
			const transformEIcom = computed(
				() => "transform: translate(" + transforms.value.ei[0] + "px," + transforms.value.ei[1] + "px)"
			);
			const transformClass = computed(
				() => _mainClass + " name-transform--" + transformId.value
			);
			//methods
			function trigger(trans, route, event) {
				this.transformId = route;
				router.push(route);
				// console.info(' count transitions for specyfic route ');
				console.log(
					" target ",
					event.currentTarget,
					event.currentTarget.offsetWidth / 2,
					event.currentTarget.offsetHeight / 2
				);
				// this.transforms = {
				// 	s: [-93 - event.currentTarget.offsetWidth/2, -99 + event.currentTarget.offsetHeight/2],
				// 	e: [  1 - event.currentTarget.offsetWidth/2, -99 + event.currentTarget.offsetHeight/2],
				// 	n: [-87 - event.currentTarget.offsetWidth/2,   1 + event.currentTarget.offsetHeight/2],
				// 	ei:[  1 - event.currentTarget.offsetWidth/2,   1 + event.currentTarget.offsetHeight/2]
				// }
				// console.log(this.transforms.value);
			}
			//
			return {
				transformId,
				transformClass,
				trigger,
				transforms,
				transformScom,
				transformEcom,
				transformNcom,
				transformEIcom,
			};
		},
	};
</script>

<style lang="scss">
	.logo {
		max-width: 320px;
		background-image: url("/assets/img/pawel-czerwinski-KWpm9MmEo2s-unsplash.jpg");
		background-repeat: no-repeat;
		background-position: center center;
		background-size: auto 140%;
		animation: zommInOut 2s ease-in-out;
		animation-iteration-count: 1;
	}
	.name {
		display: block;
		width: 100%;
		height: 220px;
		/* -- */
		border: 1px dashed lightgray;
		position: relative;
		/* -- */ 
		mix-blend-mode: lighten;
		background-color: #fff;
		color: #000;
		
		small {
			font-size: 0;
			position: absolute;
			right: 50%;
			bottom: 50%;
		}
		.s,
		.e,
		.n,
		.ei {
			font-family: StencilRough;
			font-size: 128px;
			line-height: 0.75;
			cursor: pointer;
		
			/* -- */
			display: inline-block;
			overflow: hidden;
			height: 98px;
			/* -- */
			position: absolute;
			top: 50%;
			left: 50%;
			/* -- */
			transform: translate(-50%, -50%);
			transition: transform 0.4s ease-in-out;
		}
		//
		.e {
			width: 86px;
			/* -- */
			transform: translate(-47px, -50px);
			transform: translate(-42px, -50px);
			transform: translate(44px, -148px);
			transform: translate(-58px, -148px);
			/* -- */
			transform: translate(1px, -99px);
		}
		.ei {
			width: 118px;
			/* -- */
			transform: translate(47px, 50px);
			transform: translate(-42px, 50px);
			transform: translate(44px, -48px);
			transform: translate(-58px, -48px);
			/* -- */
			transform: translate(1px, 1px);
		}
		.n {
			width: 86px;
			/* -- */
			transform: translate(-41px, 50px);
			transform: translate(-130px, 50px);
			transform: translate(-44px, -48px);
			transform: translate(-146px, -48px);
			/* -- */
			transform: translate(-87px, 1px);
		}
		.s {
			width: 92px;
			/* -- */
			transform: translate(-136px, -50px);
			transform: translate(-130px, -50px);
			transform: translate(-50px, -148px);
			transform: translate(-152px, -148px);
			/* -- */
			transform: translate(-93px, -99px);
		}
	}
	.name-transform--who {
		.s {
			transform: translate(-47px, -50px);
		}
		.e {
			transform: translate(47px, -50px);
		}
		.n {
			transform: translate(-41px, 50px);
		}
		.ei {
			transform: translate(47px, 50px);
		}
	}

	.name-transform--what {
		.s {
			transform: translate(-136px, -50px);
		}
		.e {
			transform: translate(-42px, -50px);
		}
		.n {
			transform: translate(-130px, 50px);
		}
		.ei {
			transform: translate(-42px, 50px);
		}
	}

	.name-transform--where {
		.s {
			transform: translate(-50px, -148px);
		}
		.e {
			transform: translate(44px, -148px);
		}
		.n {
			transform: translate(-44px, -48px);
		}
		.ei {
			transform: translate(44px, -48px);
		}
	}

	.name-transform--when {
		.s {
			transform: translate(-152px, -148px);
		}
		.e {
			transform: translate(-58px, -148px);
		}
		.n {
			transform: translate(-146px, -48px);
		}
		.ei {
			transform: translate(-58px, -48px);
		}
	}
</style>
