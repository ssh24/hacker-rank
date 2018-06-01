function processData(input) {
    var lines = input.split('\n');
    var dimension = 5;
    var posr = parseInt(lines[0].split(" ")[0]);
    var posc = parseInt(lines[0].split(" ")[1]);
    var grid = [];
    for(var i = 1; i <= dimension; ++i)
    {
        grid.push(lines[i]);
    }
    next_move(posr, posc, grid);
}

function next_move(posr, posc, grid) {
    if (grid[posr][posc] === 'd') {
        console.log('CLEAN');
    } else if (grid[posr] && grid[posr][posc-1] && grid[posr][posc-1] != '-') {
        moveLeft(posc, grid);
    } else if (grid[posr] && grid[posr][posc+1] && grid[posr][posc+1] != '-') {
        moveRight(posc, grid);
    } else if (grid[posr-1] && grid[posr-1][posc] && grid[posr-1][posc] != '-') {
        moveUp(posr, grid);
    } else if (grid[posr+1] && grid[posr+1][posc] && grid[posr+1][posc] != '-') {
        moveDown(posr, grid);
    } else {
        var closestDirt = findClosestDirt(grid);
        if (closestDirt[1] < posc) {
            moveLeft(posc, grid);
        } else if (closestDirt[1] > posc) {
            moveRight(posc, grid);
        } else if (closestDirt[0] < posr) {
            moveUp(posr, grid);
        } else if (closestDirt[0] > posr) {
            moveDown(posr, grid);
        }
    }
}

function moveRight(posc, grid) {
    var max = grid.length - 1;
    if (posc + 1 <= max) {
        posc += 1;
        console.log('RIGHT');   
    }
}

function moveLeft(posc, grid) {
    var min = 0;
    if (posc - 1 >= min) {
        posc -= 1;
        console.log('LEFT');   
    }
}

function moveUp(posr, grid) {
    var min = 0;
    if (posr - 1 >= min) {
        posr -= 1;
        console.log('UP');   
    }
}

function moveDown(posr, grid) {
    var max = grid.length - 1;
    if (posr + 1 <= max) {
        posr += 1;
        console.log('DOWN');   
    }
}

function findClosestDirt(grid) {
    for(var i = 0; i < grid.length; i++) {
        var dirt = grid[i].indexOf('d');
        if (dirt > -1) {
            return [i, dirt];
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
