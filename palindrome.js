function checkPalindrome(word)
{
    
    let store_word = ""
    let l = word.length;

    for (let i=0; i<l; i++)
    {
        store_word=word[i]+store_word;
        store_word.toUpperCase;
        

    }
    console.log(store_word);

    if (store_word == word)
    {

        console.log('It is a palindrome String');

    }
    else
    {

       console.log('It is not a palindrome string');

    }

    
    

}
let x = prompt("enter a string: ");
checkPalindrome(x);
