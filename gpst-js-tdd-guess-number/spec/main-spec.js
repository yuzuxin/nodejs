const main = require('../main/main');

describe('main()', () => {

	it("Check no position is correct but all numbers of inputs are right", () => {
		let random = "1234";
		let input = "4321";
		let result = main(random, input);
		expect(result).toEqual("0A4B");
	});


	it("Check no position is correct but three numbers of inputs are right", () => {
		let random = "1234";
		let input = "0321";
		let result = main(random, input);
		expect(result).toEqual("0A3B");
	});


	it("Check no position is correct but two numbers of inputs are right", () => {
		let random = "1234";
		let input = "0021";
		let result = main(random, input);
		expect(result).toEqual("0A2B");
	});


	it("Check no position is correct but one number of inputs are right", () => {
		let random = "1234";
		let input = "0001";
		let result = main(random, input);
		expect(result).toEqual("0A1B");
	});


	it("check both the numbers and position are not correct", () => {
		let random = "1234";
		let input = "0000";
		let result = main(random, input);
		expect(result).toEqual("0A0B");
	});


	it("Check one position is correct and three numbers of inputs are right", () => {
		let random = "1234";
		let input = "1423";
		let result = main(random, input);
		expect(result).toEqual("1A3B");
	});


	it("Check one position is correct and two numbers of inputs are right", () => {
		let random = "1234";
		let input = "1043";
		let result = main(random, input);
		expect(result).toEqual("1A2B");
	});


	it("Check one position is correct and one numbers of inputs are right", () => {
		let random = "1234";
		let input = "1003";
		let result = main(random, input);
		expect(result).toEqual("1A1B");
	});


	it("Check one position is correct and zero numbers of inputs are right", () => {
		let random = "1234";
		let input = "1000";
		let result = main(random, input);
		expect(result).toEqual("1A0B");
	});


	it("Check two position are correct and two numbers of inputs are right", () => {
		let random = "1234";
		let input = "1243";
		let result = main(random, input);
		expect(result).toEqual("2A2B");
	});


	it("Check two position are correct and one numbers of inputs are right", () => {
		let random = "1234";
		let input = "1203";
		let result = main(random, input);
		expect(result).toEqual("2A1B");
	});


	it("Check two position are correct and no numbers of inputs are right", () => {
		let random = "1234";
		let input = "1200";
		let result = main(random, input);
		expect(result).toEqual("2A0B");
	});

	//3A1B不存在

	it("Check three position are correct and no numbers of inputs are right", () => {
		let random = "1234";
		let input = "1230";
		let result = main(random, input);
		expect(result).toEqual("3A0B");
	});



	it("Check all position are correct but none of the inputs are right", () => {
		let random = "1234";
		let input = "1234";
		let result = main(random, input);
		expect(result).toEqual("4A0B");
	})
});