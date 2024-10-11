function longestValidParentheses(s) {
    let maxLength = 0;
    let stack = [-1]; 

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);  // Pushing the index of '('
        } else {
            stack.pop();  // Popping the previous '('
            if (stack.length === 0) {
                stack.push(i);  // Pushing the index of ')' when stack is empty
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLength;
}
