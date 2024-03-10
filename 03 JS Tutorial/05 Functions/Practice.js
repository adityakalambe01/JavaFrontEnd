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

halloDiamondPattern(5);

console.log();console.log();console.log();

diamondPattern(5);

console.log();console.log();console.log();

hallowLeftTriangle(5);

console.log();console.log();console.log();

leftTriangle(5);

console.log();console.log();console.log();

hallowRightTriangle(5);

console.log();console.log();console.log();

rightTriangle(2);

console.log();console.log();console.log();

square(5);

console.log();console.log();console.log();

printStar(5);

console.log();console.log();console.log();

rectangle(10,4);

console.log();console.log();console.log();

hallowSquare(5);

console.log();console.log();console.log();

hallowRectangle(10,3);