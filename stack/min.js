// ----------- 解法 1 --------------
// 通过两个栈模拟最小栈

var MinStack = function () {
  this.stack = [];
  this.min = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length === 0) {
    this.min.push(val);
  } else if (val <= this.min[this.min.length - 1]) {
    this.min.push(val);
  }
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const val = this.stack.pop();
  if (val === this.min[this.min.length - 1]) {
    this.min.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1];
};


// ----------- 解法 2 --------------
// 通过额外存储当前最小值


var MinStack = function () {
  this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  const top = this.stack[this.stack.length - 1];
  if (top !== undefined) {
    this.stack.push({
      val,
      min: val > top.min ? top.min : val
    })
  } else {
    this.stack.push({
      val,
      min: val
    })
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const top = this.stack[this.stack.length - 1];
  return top !== undefined && top.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  const top = this.stack[this.stack.length - 1];
  return top !== undefined && top.min;
};
