function strStr(haystack: string, needle: string): number {
    if (needle === "") return 0;
    
    // Build the pattern table
    const patternTable = buildPatternTable(needle);
    
    let j = 0; // Index for needle
    
    // Search through haystack
    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) {
            j = patternTable[j - 1];
        }
        
        if (haystack[i] === needle[j]) {
            j++;
        }
        
        if (j === needle.length) {
            return i - j + 1;
        }
    }
    
    return -1;
}

function buildPatternTable(needle: string): number[] {
    const patternTable = [0];
    let prefixLen = 0;
    let i = 1;
    
    while (i < needle.length) {
        if (needle[i] === needle[prefixLen]) {
            prefixLen++;
            patternTable[i] = prefixLen;
            i++;
        } else if (prefixLen === 0) {
            patternTable[i] = 0;
            i++;
        } else {
            prefixLen = patternTable[prefixLen - 1];
        }
    }
    
    return patternTable;
}
