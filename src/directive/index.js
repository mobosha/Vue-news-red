
// <div v-demo="{ color: 'white', text: 'hello!' }"></div>
export const demo = (el, binding) => {
	el.style.backgroundColor = binding.value.color
}