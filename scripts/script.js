function triangleType(firstSide, secondSide, thridSide) {
    var sideArr = [firstSide, secondSide, thridSide];
    for (var i = 0; i < sideArr.length; i++) {
        for (var j = 0; j < sideArr.length; j++) {
            if (sideArr[i]<sideArr[j]) {
                var swap = sideArr[i];
                sideArr[i]= sideArr[j];
                sideArr[j]= swap;}
            }
        }
    console.log(sideArr)
    if ((firstSide + secondSide) <= thridSide) {
        console.log('такого треугольника не существует')
    } else if (Math.pow(sideArr[0] + sideArr[1], 2) === Math.pow(sideArr[2],2)) {
        console.log('Треугольник - прямоугольный')
    } else if (Math.pow(sideArr[0] + sideArr[1], 2) < Math.pow(sideArr[2],2)) {
        console.log('Треугольник - тупоугольный')
    } else if (Math.pow(sideArr[0] + sideArr[1], 2) > Math.pow(sideArr[2],2)) {
        console.log('Треугольник - остроугольный')
    }
}


triangleType(10,4,7);