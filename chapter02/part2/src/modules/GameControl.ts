import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
// 游戏控制器，控制其他的所有类
class GameControl {
    // 定义三个属性
    // 蛇
    snake: Snake;
    // 食物
    food: Food;
    // 计分牌
    scorePanel: ScorePanel;
    // 创建一个属性来存储按键的方向
    direction: string = '';
    // 创建一个属性来记录游戏是否结束
    isLive = true

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel()

        this.init()
    }

    // 游戏的初始化方法，调用后游戏即开始
    init() {
        // 绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        // 调用run方法，使蛇移动
        this.run();
    }

    /*
    * ArrowUp Up
    * ArrowDown Down
    * Arrow Left
    * ArrowRight Right
    * **/
    // 创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // 需要检查event.key的值是否合法（用户是否按了正确的按键）
        // 修改direction属性
        this.direction = event.key;
    }

    // 创建一个控制蛇移动的方法
    run() {
      /*
      * 根据方向（this.direction）来使蛇的位置改变
      * 向上 top 减少
      * 向下 top 增加
      * 向左 left 减少
      * 向右 left 增加
      **/
        // 获取蛇现在的坐标
        let x = this.snake.X;
        let y = this.snake.Y;
        // 根据按键的方向处理坐标轴
        switch (this.direction) {
            case 'ArrowUp':
                // 向上移动top减少
                y -= 10;
                break
            case 'ArrowDown':
                // 向下移动top增加
                y += 10;
                break
            case 'ArrowLeft':
                // 向左移动left减少
                x -= 10;
                break
            case 'ArrowRight':
                // 向右移动left增加
                x += 10;
                break
        }
        this.checkEat(x, y);
        try {
            this.snake.X = x;
            this.snake.Y = y;
        }catch (e) {
            alert(e.message + ' Game Over!')
            this.isLive = false
        }
        // 开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1)*30)
    }

    checkEat(x: number, y: number) {
        if(x === this.food.X && y === this.food.Y) {
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl
