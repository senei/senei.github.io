<template>
	<h1 v-bind:class="transformClass">
		<span class="s" @click="trigger('s', 'who')">s</span>
		<span class="e1" @click="trigger('e1', 'what')">e</span>
		<span class="n" @click="trigger('n', 'where')">n</span>
		<span class="e2" @click="trigger('e2', 'when')">e</span>
		<span class="i" @click="trigger('i', 'why')">i</span>
		<small @click="trigger('web', '/')">
			<span class="_w">w</span>
			<span class="_e">e</span>
			<span class="_b">b</span>
		</small>
	</h1>
</template>

<script>
	import { ref, computed } from "vue";

	export default {
		setup() {
			const _mainClass = "flex-auto text-center name";
			// router.push(window.location.pathname);
			const transformId = ref("start");
			const transformClass = computed(
				() => _mainClass + " title-transform--" + transformId.value
			);
			//methods
			function trigger(trans, route) {
				transformId.value = trans;
				// router.push(route);
			}
			//
			return { transformId, transformClass, trigger };
		},
	};
</script>

<style scoped lang="scss">
	.name {
		position: relative;
		margin: 1rem;

		font-family: StencilRough;
		font-size: 6rem;

		mix-blend-mode: lighten;
		background: rgba(255, 255, 255, 0.95);

		& > span {
			cursor: pointer;
			transition: transform 0.2s, top 0.3s, right 0.3s, bottom 0.3s, left 0.3s;
			display: inline-block;
			width: 66px;
			height: 76px;
			line-height: 0.8;
			text-align: center;

			&.i {
				text-align: left;
			}
		}
		& > small {
			transition: transform 0.2s, top 0.3s, right 0.3s, bottom 0.3s, left 0.3s;
			display: inline-block;
			height: 62px;
			line-height: 0.8;
			white-space: nowrap;

			& > span {
				cursor: pointer;
				transition: transform 0.2s, top 0.3s, right 0.3s, bottom 0.3s, left 0.3s;
				display: inline-block;
				width: 54px;
				line-height: 0.8;

				&._w {
					width: 77px;
				}
			}
		}
	}

	.logo {
		.s,
		.e1,
		.n,
		.e2,
		.i {
			position: relative;
			top: 121px;
			transform: translate(0, 0);
		}

		small {
			position: relative;
			top: 136px;
		}

		@media (max-width: 540px) {
			.i {
				width: 40px;
			}
			small {
				position: absolute;
				top: 100%;
				left: 100%;
				transform: translate(-100%, -100%);
			}
		}

		@media (max-width: 360px) {
			min-height: 270px;
			small {
				transform: translate(100%, 100%);
			}
			.s,
			.e1 {
				position: absolute;
				top: 3rem;
				transform: translate(-100%, 0);
			}
			.e1 {
				transform: translate(0, 0);
			}
			.n,
			.e2,
			.i {
				position: absolute;
				top: 3rem;
				transform: translate(-100%, 100%);
			}
			.e2 {
				transform: translate(0%, 100%);
			}
			.i {
				transform: translate(160%, 100%);
			}
			.i {
				position: absolute;
			}
		}
	}
</style>
