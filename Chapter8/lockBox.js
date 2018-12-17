

const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked! Drats!");
    return this._content;
  }
};

withBoxUnlocked(function() {
    box.content.push("It work?!?!");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("No Work!");
    });
  } catch (e) {
    console.log("We encountered a problem sir!:", e);
  }

function withBoxUnlocked(body) {
  let locked = box.locked;
  if (!locked) {
    return body();
  }

  box.unlock();
  try {
    return body();
  } finally {
    box.lock();
  }
}
