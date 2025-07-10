//leetcode = 155


var MinStack = function() {
    this.s = [];
    this.min = Infinity;
    this.res = [];
    this.size = 0;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const min = this.s.length === 0 
        ? val 
        : Math.min(val, this.s[this.s.length - 1][1]);
    this.s.push([val, min]);;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s[this.s.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
        return this.s[this.s.length - 1][1];

};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */