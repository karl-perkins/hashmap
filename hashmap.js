class HashMap {
  buckets = Array(16);

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key) % this.buckets.length;

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    this.buckets[index] = value;
  }

  get(key) {
    const index = this.hash(key) % this.buckets.length;

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    return this.buckets[index] ?? null;
  }

  has(key) {
    const index = this.hash(key) % this.buckets.length;

    if (index < 0 || index >= this.buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    return this.buckets[index] !== undefined;
  }
}

const hashMap = new HashMap();

// console.log(hashMap.buckets);
hashMap.set('Carlos', 'I am the old value');
console.log(hashMap.get('Carlos'));
console.log(hashMap.get('Karl'));

console.log(hashMap.has('Carlos'));
console.log(hashMap.has('Karl'));