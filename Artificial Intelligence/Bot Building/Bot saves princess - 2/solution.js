function processData(input) {
    var lines = input.split('\n');
    var dimension = parseInt(lines[0]);
    var botPos = [parseInt(lines[1].split(" ")[0]), parseInt(lines[1].split(" ")[1])]
    var grid = [];
    for(var i = 2; i <= dimension; ++i)
    {
        grid.push(lines[i]);
    }
    displayNextMove(grid, botPos);
}

function displayNextMove(grid, botPos)
{
    var princessSig = 'p';
    
    var bot = botPos;
    var princess;
    
    for(var i = 0; i < grid.length; i++) {
        if (grid[i].indexOf(princessSig) > -1) princess = [i, grid[i].indexOf(princessSig)];
    }
    
    var distance = [princess[0] - bot[0], princess[1] - bot[1]];
    
    /** 
    -> - = left, + = right (distance[1])
    -> - = up, + = down (distance[0])
    **/
    
    if (distance[1] >= 1) {
        console.log('RIGHT');
    } else if (distance[1] <= -1) {
        console.log('LEFT');
    } else if (distance[0] >= 1) {
        console.log('DOWN');
    } else if (distance[0] <= -1) {
        console.log('UP');
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
