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
