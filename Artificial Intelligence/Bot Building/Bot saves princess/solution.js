function processData(input) {
    var lines = input.split('\n');
    var dimension = parseInt(lines[0]);
    var grid = [];
    for(var i = 1; i <= dimension; ++i)
    {
        grid.push(lines[i]);
    }
    displayPathtoPrincess(dimension, grid);
}

function displayPathtoPrincess(dimension, grid)
{
    var botSig = 'm';
    var princessSig = 'p';
    
    var bot, princess;
    
    for(var i = 0; i < grid.length; i++) {
        if (grid[i].indexOf(botSig) > -1) bot = [i, grid[i].indexOf(botSig)];
        if (grid[i].indexOf(princessSig) > -1) princess = [i, grid[i].indexOf(princessSig)];
    }
    
    var distance = [princess[0] - bot[0], princess[1] - bot[1]];
    
    /** 
    -> + = left, - = right (distance[0])
    -> + = up, - = down (distance[1])
    **/
    
    if (distance[1] >= 1) {
        for (var i = 0; i < distance[1]; i++) {
            console.log('RIGHT');
        }
    } else if (distance[1] <= -1) {
        for (var i = 0; i < Math.abs(distance[1]); i++) {
            console.log('LEFT');
        }
    }
    
    if (distance[0] >= 1) {
        for (var i = 0; i < distance[0]; i++) {
            console.log('DOWN');
        }
    } else if (distance[0] <= -1) {
        for (var i = 0; i < Math.abs(distance[0]); i++) {
            console.log('UP');
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
