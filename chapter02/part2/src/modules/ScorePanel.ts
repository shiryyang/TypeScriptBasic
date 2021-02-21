// 定义表示计分牌的类
class ScorePanel {
    // score和level用来记录分数和等级
    score = 0;
    level = 1;

    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    // 设置一个等级限制
    maxLevel: number;
    upScore: number;
    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    // 设置一个加分的方法
    addScore() {
        // 使分数自增
        this.scoreEle.innerHTML =  ++this.score + '';
        if (this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 设置一个升级的方法
    levelUp() {
        // 使等级自增
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML =  ++this.level + ''
        }
    }
}

// 测试代码
// const scorePanel = new ScorePanel(100, 2)
// for (let i = 0; i < 300; i++) {
//     scorePanel.addScore();
// }

export default ScorePanel
