


class Group {
  constructor() {
    this.values = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.values.push(value);
    }
  }

  delete(value) {
    this.values = this.values.filter(v => v !== value);
  }

  has(value) {
    return this.values.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  
//Iterator
  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.values.length) {
      return {done: true};
    } else {
      let result = {value: this.group.values[this.position],
                    done: false};
      this.position++;
      return result;
    }
  }
}
