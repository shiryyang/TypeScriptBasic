class Snake {
    // 表示蛇头的元素
    head: HTMLElement;
    // 蛇的身体（包括舌头）
    bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 获取蛇的坐标（蛇头坐标）
    get X() {
        return this.head.offsetLeft
    }
    // 获取蛇的Y轴坐标（蛇头坐标）
    get Y() {
        return this.head.offsetTop
    }

    // 设置蛇头的坐标
    set X(value) {
        if (value === this.X) {
            return
        }
        // X的值的合法范围0-290之间
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }

        // 修改x时，是在修改水平坐标，蛇在向左移动时，不能向右掉头，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            // 如果发生了掉头，让蛇向反方向继续移动
            if (value > this.X) {
                // 如果新值value大于旧值X，则说明蛇在向右走，应该使蛇继续向左走
                value = this.X - 10;
            } else {
                // 向右走
                value = this.X + 10;
            }
        }
        this.moveBody()
        this.head.style.left = value + 'px'
        // 检查有没有撞到自己
        this.checkHeadBody()
    }
    set Y(value) {
        if (value === this.Y) {
            return
        }
        // Y的值的合法范围0-290之间
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了')
        }
        // 修改y时，是在修改垂直坐标，蛇在向上移动时，不能向下掉头，反之亦然
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody()
        this.head.style.top = value + 'px'
        // 检查有没有撞到自己
        this.checkHeadBody()
    }

    // 蛇增加身体的方法
    addBody() {
        // 向element中添加一个div
        this.element.insertAdjacentHTML('beforeend', '<div></div>')
    }
    // 添加一个蛇身体移动的方法
    moveBody() {
        /*
        * 将后边的身体设置为前边身体的位置
        * 举例子
        * 第4节 = 第3节的位置
        * 第3节 = 第2节的位置
        * 第2节 = 第1节的位置
        **/
        // 获取所有的身体
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 获取前边身体的位置
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;

            // 将值设置到当前身体
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    // 检查是否撞到身体的方法
    checkHeadBody() {
        // 获取所有身体，检查其是否和蛇头的坐标发生重叠
        for(let i = 1;  i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                //进入判断说明撞到身体，游戏结束
                throw new Error('撞到自己了')
            }
        }
    }

}
export default Snake
