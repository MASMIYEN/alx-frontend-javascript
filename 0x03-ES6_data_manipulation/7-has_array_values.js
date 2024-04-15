export default function hasArrayValues(set, arr) {
	return arr.every((val) => set.has(val));
}
