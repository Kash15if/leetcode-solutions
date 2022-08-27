/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
    let m = board.length;
    let n =board[0].length;
    
    let rowTemplate = Array(n).fill(false);
    let visited = Array.from(Array(m), () => [...rowTemplate]);
    
    for(let i = 0 ; i < m ; i++){
        for(let j = 0 ; j < n ;j++){
            
          if(board[i][j] === word[0] && foundWord(board , i , j , 0, word , visited))
              return true;
        }
    }
    
    return false;
};



function foundWord(board , i , j , k , word , visited){
    
    if(k === word.length)
        return true;
    
    if(i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[k] || visited[i][j] ){
        return false;
    }
    
    visited[i][j] = true;
    if( foundWord(board , i-1 , j, k+1, word ,visited) || foundWord(board , i+1 , j, k+1, word , visited) || foundWord(board , i , j-1, k+1, word, visited) || foundWord(board , i , j+1, k+1,word, visited))
        return true;
    visited[i][j]  = false;
    
    return false; 
}

//using backtracking 
//with separate funcrtion and uses it with recursion