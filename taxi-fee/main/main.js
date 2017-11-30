module.exports = function main(distance,time) {
    var fee1 = 6;
    var fee2 = 4.8
    if(distance <= 2){
        return Math.floor(fee1 + time * 0.25);
    }else if(distance > 2 && distance < 8){
        return Math.floor(fee1 + (distance - 2) * 0.8 + time *0.25);
    }else if(distance >= 8){
        return Math.floor(fee1 + fee2 + (distance - 8) * 1.2 + time * 0.25);
    }
};