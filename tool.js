// 图上白色
function drawWhite(fall){
    for (var i = 0; i < fall.length; i++) {
        var cur = fall[i];
        // 设置填充颜色
        tetris_ctx.fillStyle = 'white';
        // 绘制矩形
        tetris_ctx.fillRect(
            cur.x * CELL_SIZE + 1,
            cur.y * CELL_SIZE + 1,
            CELL_SIZE - 2,
            CELL_SIZE -2
            );
    }
}

// 图上该方块的本色
function drawRawColor(){
    // 将下移后的每个方块的背景色涂成该方块的颜色值
    for (var i = 0; i < currentFall.length; i++) {
        var cur = currentFall[i];
        // 设置填充颜色
        tetris_ctx.fillStyle = colors[cur.color];
        // 绘制矩形
        tetris_ctx.fillRect(
            cur.x * CELL_SIZE + 1,
            cur.y * CELL_SIZE + 1,
            CELL_SIZE - 2,
            CELL_SIZE - 2
            );
    }
}

function canMoveLeft(){
    var flag = true;
    currentFall.forEach(function( node ){
        if (node.x == 0) {
            flag = false;
        }
        // 或左边的位置已有方块，则不能左移
        if (tetris_status[node.y][node.x-1] != NO_BLOCK) {
            flag = false;
        }
    });
    return flag;
}

function canMoveRight(){
    var flag = true;
    currentFall.forEach(function( node ){
        if ( (node.x+1) >= TETRIS_COLS ) {
            flag = false;
        }
        if (tetris_status[node.y][node.x+1] != NO_BLOCK) {
            flag = false;
        }

    });
    return flag;
}
