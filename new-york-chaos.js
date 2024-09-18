function minimumBribes(q) {
    let bribes = 0;
    
    // Iterate through the queue from right to left
    for (let i = q.length - 1; i >= 0; i--) {
        // Check if the current person (q[i]) has moved more than 2 positions forward
        // q[i] is the original position, (i+1) is the current position
        // If the difference is > 2, it means they've moved more than 2 positions forward
        if (q[i] - (i + 1) > 2) {
            console.log('Too chaotic');
            return;
        }
        
        // Count bribes for the current person
        // Start checking from 2 positions in front of their original position (or 0, whichever is larger)
        // This is because a person can bribe at most 2 people
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            // If we find a larger number ahead of the current person,
            // it means the current person was bribed by that larger number
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }
    
    console.log(bribes);
    return bribes;
}

// Example usage:
// const queue = [2, 1, 5, 3, 4];
// minimumBribes(queue);

// Explanation of the algorithm:
// 1. We iterate through the queue from right to left (end to start).
// 2. For each person, we first check if they've moved more than 2 positions forward.
//    If so, it's "Too chaotic" as no one can bribe more than 2 people.
// 3. If it's not chaotic, we then count how many times this person was bribed.
// 4. To count bribes, we look at positions in front of where this person could have started.
//    They could have started at most 2 positions behind their number, so we start checking from there.
// 5. Any number larger than the current number that appears before it represents a bribe.
// 6. We sum up all these bribes to get the total minimum number of bribes.

// Time Complexity: O(n^2) in the worst case, where n is the length of the queue.
// Space Complexity: O(1) as we only use a constant amount of extra space.
