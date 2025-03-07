class Queue {
  constructor() {
    this.header = null;
    this.length = 0;
  }

  push(value) {
    const node = { value, next: null };
    if (this.length === 0) {
      this.header = node;
    } else {
      let current = this.header;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return null;
    }
    const value = this.header.value;
    this.header = this.header.next;
    this.length--;
    return value;
  }

  size() {
    return this.length;
  }

  peek() {
    if (this.length === 0) {
      return null;
    }
    return this.header.value;
  }

  isEmpty() {
    return this.length === 0;
  }
}

function solution(players, m, k) {
  let count = 0;

  const serverExpired = new Queue();

  const addServer = (time) => {
    serverExpired.push(time + k);
    count++;
  };

  const player가_서버최대치보다_적음 = (player) => {
    return player < (serverExpired.size() + 1) * m;
  };

  for (let i = 0; i < players.length; i++) {
    while (!serverExpired.isEmpty() && serverExpired.peek() <= i) {
      serverExpired.pop();
    }
    if (player가_서버최대치보다_적음(players[i])) {
      continue;
    }

    while (true) {
      if (player가_서버최대치보다_적음(players[i])) {
        break;
      }

      addServer(i);
    }
  }

  return count;
}
