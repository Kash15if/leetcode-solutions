
var TreeNode = function()  {
    return { 
    children : {},
    isEndOfWord : false,
    }
}



var Trie = function() {
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    
    for(let i = 0 ;i < word.length ; i++){
        if(!trie.children[word[i]]){
            trie.children[word[i]] = new TreeNode();
        }
        
        trie = trie.children[word[i]]
    }
    
    tree.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */


Trie.prototype.search = function(word) {
    
   for(let i = 0 ;i < word.length ; i++){
        if(!trie.children[word[i]]){
            return false;
        }
        
        trie = trie.children[word[i]]
    }
    
    return trie.endOfWord;
    
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return trie.children[prefix[i]] ? true : false;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */