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




// hallowLeftTriangle(5);
// leftTriangle(5);
// hallowRightTriangle(5);
// rightTriangle(2);
// square(5);
// printStar(5);
// rectangle(10,4);
// hallowSquare(5);
// hallowRectangle(10,3);