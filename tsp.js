const tspBruteForce = (distances) => {
    const n = distances.length;
    const cities = Array.from({ length: n }, (_, i) => i);
    
    const getPermutations = (array) => {
        if (array.length === 0) return [[]];
        const result = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            const rest = array.slice(0, i).concat(array.slice(i + 1));
            const permutations = getPermutations(rest);
            for (const permutation of permutations) {
                result.push([element].concat(permutation));
            }
        }
        return result;
    };

    const calculateDistance = (route) => {
        let totalDistance = 0;
        for (let i = 0; i < route.length - 1; i++) {
            totalDistance += distances[route[i]][route[i + 1]];
        }
        totalDistance += distances[route[route.length - 1]][route[0]]; // return to start
        return totalDistance;
    };

    const permutations = getPermutations(cities);
    let minDistance = Infinity;
    let bestRoute = [];

    for (const perm of permutations) {
        const distance = calculateDistance(perm);
        if (distance < minDistance) {
            minDistance = distance;
            bestRoute = perm;
        }
    }

    return { minDistance, bestRoute };
};

const distances = [
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
];

const result = tspBruteForce(distances);
console.log("Minimum Distance:", result.minDistance);
console.log("Best Route:", result.bestRoute);
// Explanation
// Get Permutations: Generates all permutations of the cities.
// Calculate Distance: Computes the total distance for a given permutation of cities.
// Find Minimum Distance: Iterates over all permutations to find the one with the smallest total distance.
// Limitations
// Time Complexity: The brute-force approach has a time complexity of 
// 𝑂
// (
// 𝑛
// !
// )
// O(n!), making it impractical for large numbers of cities.
// Scalability: This solution is only feasible for a small number of cities (e.g., fewer than 10).
// For larger instances of TSP, consider heuristic or approximation algorithms like Genetic Algorithms, Simulated Annealing, or Ant Colony Optimization.







