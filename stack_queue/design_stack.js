//leetcode : 225

var MyStack = function() {
    this.q1 = [];
    this.q2 = [];
    this.size=0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
    this.size++;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;

    for(let i = 0;i<n-1;i++)
    {
        let frontEl = this.q1.shift();
        this.q2.push(frontEl);
    }
    let ans = this.q1.shift();
    let tmp =  this.q1;
     this.q1 =  this.q2;
     this.q2 = tmp;
    return ans
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;

    for(let i = 0;i<n-1;i++)
    {
        let frontEl = this.q1.shift();
        this.q2.push(frontEl);
    }
    let front = this.q1[0]

    this.q2.push(this.q1.shift())
    let tmp = this.q1;
     this.q1 =  this.q2;
     this.q2 = tmp;
    return front
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return  this.q1.length == 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


// Using one queue


var MyStack = function() {
    this.q1 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i = 0;i<n-1;i++)
    {
        let front = this.q1.shift();
        this.q1.push(front)
    }
    let ans = this.q1.shift();
    return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;
    for(let i = 0;i<n-1;i++)
    {
        let front = this.q1.shift();
        this.q1.push(front)
    }
    let ans = this.q1[0];
    this.q1.push(this.q1.shift())
    return ans;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length == 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */