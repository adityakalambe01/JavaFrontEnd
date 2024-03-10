function printStar(nth){
    for (var start = 0 ; start < nth ; start++){
        process.stdout.write("* ");
    }
}

function square(nth){
    for(var row = 0 ; row < nth ; row++){
        for (var column = 0 ; column < nth ; column++){
            process.stdout.write("* ");
        }
        console.log();
    }
}

function hallowSquare(nth){
    for(var row = 0 ; row < nth ; row++){
        for (var column = 0 ; column < nth ; column++){
            if (row === 0 || column === 0 || row === (nth - 1) || column === (nth - 1)){
                process.stdout.write("* ");
            }else {
                process.stdout.write("  ");
            }
        }
        console.log();
    }
}

function rectangle(rows, columns){
    for (var i = 0 ; i < rows ; i++){
        for (var j = 0 ; j < columns ; j++){
            process.stdout.write("* ");
        }
        console.log();
    }
}

function hallowRectangle(nthRow, nthColumn){
    for (var i = 0 ; i < nthRow ; i++){
        for (var j = 0 ; j < nthColumn ; j++){
            if (i === 0 || j === 0 || i === (nthRow - 1) || j === (nthColumn - 1)){
                process.stdout.write("* ");
            }else {
                process.stdout.write("  ");
            }
        }
        console.log();
    }
}

function rightTriangle(nth){
    for (var row = 0 ; row < nth ; row++){
        for (var column = 0 ; column <= row ; column++){
            process.stdout.write("* ");
        }
        console.log();
    }
}




function hallowRightTriangle(nth){
    for (var row = 0 ; row < nth ; row++){
        for (var column = 0 ; column <= row ; column++){
            if( row === 0 || column === 0 || row === column || row === (nth - 1)){
                process.stdout.write("* ");
            }else {
                process.stdout.write("  ");
            }
        }
        console.log();
    }
}

function leftTriangle(nth){
    for (var row = 0 ; row < nth ; row++){
        for (var column = row+1 ; column < nth ; column++){
            process.stdout.write("  ");
        }
        for (column = 0 ; column <= row ; column++){
            process.stdout.write("* ");
        }
        console.log();
    }
}

function hallowLeftTriangle(nth){

    for (var row = 0 ; row < nth ; row++){
        for (var column = row+1 ; column < nth ; column++){
            process.stdout.write("  ");
        }

        for (column = 0 ; column <= row ; column++){
            if( row === 0 || column === 0 || row === column || row === (nth - 1)){
                process.stdout.write("* ");
            }else {
                process.stdout.write("  ");
            }
        }
        console.log();
    }
}

function diamondPattern(n){

    for (var i = 0 ; i < n ; i++){
        for(var j = n - i ; j > 0 ; j--){
            process.stdout.write(" ");
        }
        for (j = 0 ; j <= i ; j++){
            process.stdout.write("* ");
        }
        console.log();
    }
    for ( i = n ; i >= 0 ; i--){
        for(var j = n - i ; j > 0 ; j--){
            process.stdout.write(" ");
        }
        for (j = 0 ; j <= i ; j++){
            process.stdout.write("* ");
        }
        console.log();
    }
}

function halloDiamondPattern(n){
    //upper
    for (var i = 0 ; i < n ; i++){
        for(var j = n - i ; j > 0 ; j--){
            process.stdout.write(" ");
        }
        for (var j = 0 ; j <= i ; j++){
            if (i===0 || j===0 || i===j){
                process.stdout.write("* ");
            }else{
                process.stdout.write("  ");
            }
        }
        console.log();
    }
    //lower
    for (var i = n ; i >= 0 ; i--){
        for(var j = n - i ; j > 0 ; j--){
            process.stdout.write(" ");
        }
        for (var j = 0 ; j <= i ; j++){
            if (i===0 || j===0 || i===j){
                process.stdout.write("* ");
            }else{
                process.stdout.write("  ");
            }
        }
        console.log();
    }
}

function getNumber(){
    return 5;
}

function patternFunction(choice){
    switch (choice){
        case 1:
            square(getNumber());
            break;
        case 2:
            hallowSquare(getNumber());
            break;
        case 3:
            rectangle(getNumber(),getNumber());
            break;
        case 4:
            hallowRectangle(getNumber(),getNumber());
            break;
        case 5:
            rightTriangle(getNumber());
            break;
        case 6:
            hallowRightTriangle(getNumber());
            break;
        case 7:
            leftTriangle(getNumber());
            break;
        case 8:
            hallowLeftTriangle(getNumber());
            break;
        case 9:
            diamondPattern(getNumber());
            break;
        case 10:
            halloDiamondPattern(getNumber());
            break;
        case 11:
            printStar(getNumber());
            break;
        default:
            console.log("Invalid choice!");
    }
}

var showPatterns = () => {
    var patternArray = ["Square", "Hallow Square", "Rectangle", "Hallow Rectangle", "Right Triangle", "Hallow Right Triangle", "Left Triangle", "Hallow Left Triangle", "Diamond Pattern", "Hallow Diamond Pattern", "Star Pattern"];
    for (var index = 0 ; index < patternArray.length ; index++){
        console.log(`${index+1} ${patternArray[index]}`)
    }
    console.log();
    process.stdout.write("Enter your choice: ");
}

do{
    showPatterns();
    console.log();console.log();
    patternFunction(getNumber());
}while (false);