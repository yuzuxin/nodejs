const main = require('../main/main');
describe('taxi fee', function () {
    it("when the distance is less than 2",function(){
        var distance = 1;
        var time = 1;
        var result = main(distance,time);
        expect(result).toEqual(6);
    })
    it("when the distance is between 2 and 8",function(){
        var distance = 6;
        var time = 4;
        var result = main(distance,time);
        expect(result).toEqual(10);
    })
    it("when the distance is more than 8",function(){
        var distance = 10;
        var time = 8;
        var result = main(distance,time);
        expect(result).toEqual(15);
    })

});
