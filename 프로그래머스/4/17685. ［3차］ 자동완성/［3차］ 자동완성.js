class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.count++;
        }
    }

    find(word) {
        let node = this.root;
        let inputCount = 0;
        for (let char of word) {
            node = node.children[char];
            inputCount++;
            if (node.count === 1) {
                break;
            }
        }
        return inputCount;
    }
}

function solution(words) {
    let trie = new Trie();
    let totalInputCount = 0;

    for (let word of words) {
        trie.insert(word);
    }

    for (let word of words) {
        totalInputCount += trie.find(word);
    }

    return totalInputCount;
}