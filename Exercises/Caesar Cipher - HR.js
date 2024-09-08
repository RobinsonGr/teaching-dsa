
//my solution

function caesarCipher(s, k) {
    // ensuring k is within 0-25 range
    // This way, if k is larger than 26, it wraps around correctly
    k = k % 26
    
    const result = s.split('').map(char => {
        // getting the ascii code of the character
        const code = char.charCodeAt(char);
        let base;
        
        // checking if it's uppercase 
        if(code >= 65 && code <= 90) {
            base = 65  // ascii code for 'A' , the starting limit - uppercase    (stats with 65 up 90)
        } 
        // Check if it's lowercase (97 - 122)
        else if (code >= 97 && code <= 122) {
            base = 97  // the base code for 'a'
        } 
        // If it's not a letter, return it unchanged
        else {
            return char 
        }

        // Calculate the new character code:
        // 1. substrating the base to get a number from 0-25
        // 2. adding  the shift (k)
        // 3. using % 26 to wrap around if it goes past 'Z' or 'z', the module works with whole numbers
        // 4. adding the base back to get the correct ASCII code
        return String.fromCharCode((code - base + k) % 26 + base)
        
    }).join('') //  the array back into a string usign empty string
   
    console.log(result)

    return result
   
};
//time com,plexity O(n) and the sime for space 
//alternate solution


function caesarCipher(s, k) {
    k = k % 26;
    
    function rotateChar(char) {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const isUpperCase = char === char.toUpperCase();
            const base = isUpperCase ? 65 : 97;
            return String.fromCharCode((code - base + k) % 26 + base);
        }
        return char;
    }
    
    // Map each character in the input string
    return s.split('').map(rotateChar).join('');
