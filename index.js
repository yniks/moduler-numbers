var types = {
	Int8u: 0,
	Int16u: 1,
	Int8: 2,
	Int16: 3,
	Int32u: 4,
	Int32: 5,
	Float32: 6,
	Float64: 7,
	Int64: 8,
	Int64u: 9,
};
Object.freeze(types);
var memory_views = [
	Uint8Array,
	Uint16Array,
	Int8Array,
	Int16Array,
	Uint32Array,
	Int32Array,
	Float32Array,
	Float64Array,
	BigInt64Array,
	BigUint64Array,
];
var digitonly = /^\d*(\.?\d*)n?$/;
var proxy = new Proxy(
	{},
	{
		get: function (target, prop, receiver) {
			if (prop == "types") return types;
			if (!(prop in types)) "Use valid CNum type! \n Use `types` interface.";
			else {
				var memory = new memory_views[types[prop]](1);
				return function CNum(value) {
					if (!digitonly.test(value)) `'${value}' is not a valid number`;
					memory[0] = Number(value); //issue
					return {
						set value(value) {
							memory[0] = value;
						},
						get value() {
							return memory[0];
						},
						valueOf() {
							return memory[0];
						},
						[Symbol.toPrimitive]: (hint) => {
							if (hint == "number") {
								return memory[0];
							} else if (hint == "string") {
								return memory[0] + "";
							} else return memory[0];
						},
					};
				};
			}
		},
	}
);
module.exports = proxy;
