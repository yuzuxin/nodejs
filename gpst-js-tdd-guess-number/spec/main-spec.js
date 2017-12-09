const main = require('../main/main');

describe('main()', () => {

	it("the first case", () => {
		let random = "1234";
		let input = "4321";
		let result = main(random, input);
		expect(result).toEqual("0A4B");
	});


	it("the second case", () => {
		let random = "1234";
		let input = "0321";
		let result = main(random, input);
		expect(result).toEqual("0A3B");
	});


	it("the third case", () => {
		let random = "1234";
		let input = "0021";
		let result = main(random, input);
		expect(result).toEqual("0A2B");
	});


	it("the forth case", () => {
		let random = "1234";
		let input = "0001";
		let result = main(random, input);
		expect(result).toEqual("0A1B");
	});


	it("the fifth case", () => {
		let random = "1234";
		let input = "0000";
		let result = main(random, input);
		expect(result).toEqual("0A0B");
	});


	it("the sixth case", () => {
		let random = "1234";
		let input = "1423";
		let result = main(random, input);
		expect(result).toEqual("1A3B");
	});


	it("the seventh case", () => {
		let random = "1234";
		let input = "1043";
		let result = main(random, input);
		expect(result).toEqual("1A2B");
	});


	it("the eighth case", () => {
		let random = "1234";
		let input = "1003";
		let result = main(random, input);
		expect(result).toEqual("1A1B");
	});


	it("the ninth case", () => {
		let random = "1234";
		let input = "1000";
		let result = main(random, input);
		expect(result).toEqual("1A0B");
	});


	it("the tenth case", () => {
		let random = "1234";
		let input = "1243";
		let result = main(random, input);
		expect(result).toEqual("2A2B");
	});


	it("the eleventh case", () => {
		let random = "1234";
		let input = "1203";
		let result = main(random, input);
		expect(result).toEqual("2A1B");
	});


	it("the twlfth case", () => {
		let random = "1234";
		let input = "1200";
		let result = main(random, input);
		expect(result).toEqual("2A0B");
	});

	//3A1B不存在

	it("the thirteenth case", () => {
		let random = "1234";
		let input = "1230";
		let result = main(random, input);
		expect(result).toEqual("3A0B");
	});



	it("the fourteenth case", () => {
		let random = "1234";
		let input = "1234";
		let result = main(random, input);
		expect(result).toEqual("4A0B");
	})
});