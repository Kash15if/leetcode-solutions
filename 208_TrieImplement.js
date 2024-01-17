

var Trie = function () {
    this.root = {
        children: {},
        endOfWord: false
    };
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function (word) {

    let node = this.root;

    for (let i = 0; i < word.length; i++) {
        if (!node.children[word[i]]) {
            node.children[word[i]] = {
                children: {},
                endOfWord: false
            };
        }

        node = node.children[word[i]]
    }

    node.endOfWord = true;
};

/** 
* @param {string} word
* @return {boolean}
*/



Trie.prototype.traverse = function (pre) {
    let node = this.root;

    for (let i = 0; i < pre.length; i++) {
        if (!node.children[pre[i]]) {
            return false;
        }

        node = node.children[pre[i]]
    }

    return true;

}

Trie.prototype.search = function (word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
        if (!node.children[word[i]]) {
            return false;
        }

        node = node.children[word[i]]
    }

    return node.endOfWord;

};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function (prefix) {
    // let node = this.root;
    // return node.children[prefix[0]] ? true : false;
    return this.traverse(prefix)
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/