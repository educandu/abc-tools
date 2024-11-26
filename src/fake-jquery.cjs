function ensureIsUnique(arr) {
  return [...new Set(arr)];
}

function ensureIsPlainElementArray(obj) {
  if (obj === null || typeof obj === 'undefined') {
    return [];
  }

  // eslint-disable-next-line no-use-before-define
  if (obj instanceof FakeQuery) {
    return obj.get();
  } else if (Array.isArray(obj)) {
    return obj;
  } else if (obj[Symbol.iterator]) {
    return [...obj];
  }

  return [obj];
}

class FakeQuery {
  constructor(elements) {
    this.elements = ensureIsUnique(ensureIsPlainElementArray(elements));
    this.length = this.elements.length;
    for (let index = 0; index < this.elements.length; index += 1) {
      this[index] = this.elements[index];
    }
  }

  find(selector) {
    const allMatches = this.elements.flatMap(element => {
      return 'querySelectorAll' in element
        ? [...element.querySelectorAll(selector)]
        : [];
    });

    return new FakeQuery(allMatches);
  }

  attr(attrName) {
    // eslint-disable-next-line no-undefined
    return this.get(0)?.getAttribute?.(attrName) ?? undefined;
  }

  get(index = null) {
    return index === null ? this.elements : this.elements[index];
  }

  toArray() {
    return this.elements;
  }

  text() {
    return this.elements.map(element => element.textContent ?? '').join('');
  }

  children() {
    return new FakeQuery(this.elements.flatMap(element => [...element.children]).filter(child => !!child));
  }

  eq(index) {
    return new FakeQuery(this.elements[index]);
  }

  map(callback) {
    return new FakeQuery(this.elements.map((element, index) => callback.call(element, element, index)));
  }

  each(callback) {
    this.elements.forEach((element, index) => callback.call(element, element, index));
  }

  add(something) {
    return new FakeQuery(this.elements.concat(new FakeQuery(something).get()));
  }

  first() {
    return new FakeQuery(this.elements[0]);
  }

  *[Symbol.iterator]() {
    for (const element of this.elements) {
      yield element;
    }
  }
}

function $(elements) {
  return new FakeQuery(elements);
}

$.fn = FakeQuery.prototype;

module.exports = $;
