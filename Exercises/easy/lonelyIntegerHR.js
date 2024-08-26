/*
Given an array of integers, where all elements but one occur twice, find the unique element.

Example

a = [1,2,3,4,3,2,1]

The unique element is 4

Function Description
 = [1,2,3,4,3,2,1]

The unique element is 4

Function Description = [1,2,3,4,3,2,1]

The unique element is 4

Function Description
Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):

int a[n]: an array of integers
Returns

int: the element that occurs only once
Input Format

The first line contains a single integer, , the number of integers in the array.
The second line contains  space-separated integers that describe the values in .
*/

function lonelyinteger(a) {
    const frequencyMap = {};

function lonelyinteger(a) {
    const frequencyMap = {};

    // Populate the frequency map
    for (let num of a) {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    }

    // Find the element with a count of 1
    for (let num in frequencyMap) {
        if (frequencyMap[num] === 1) {
            return parseInt(num); 
        }
    }
}


//binary option
function lonelyinteger(a) {
    let uniqueElement = 0;
    
    for (let num of a) {
        uniqueElement ^= num; // XOR each element with the uniqueElement
    }
    
    return uniqueElement;
}


 ////////////////////
 /*
 Two players are playing a game of Tower Breakers! Player  always moves first, and both players always play optimally.The rules of the game are as follows:

Initially there are  towers.
Each tower is of height .
The players move in alternating turns.
In each turn, a player can choose a tower of height  and reduce its height to , where  and  evenly divides .
If the current player is unable to make a move, they lose the game.
Given the values of  and , determine which player will win. If the first player wins, return . Otherwise, return .

Example. 

There are  towers, each  units tall. Player  has a choice of two moves:
- remove  pieces from a tower to leave  as 
- remove  pieces to leave 

Let Player  remove . Now the towers are  and  units tall.

Player  matches the move. Now the towers are both  units tall.

Now Player  has only one move.

Player  removes  pieces leaving . Towers are  and  units tall.
Player  matches again. Towers are both  unit tall.

Player  has no move and loses. Return .

Function Description

Complete the towerBreakers function in the editor below.

towerBreakers has the following paramter(s):

int n: the number of towers
int m: the height of each tower
Returns

int: the winner of the game
Input Format

The first line contains a single integer , the number of test cases.
Each of the next  lines describes a test case in the form of  space-separated integers,  and .

Constraints

Sample Input

STDIN   Function
-----   --------
2       t = 2
2 2     n = 2, m = 2
1 4     n = 1, m = 4
Sample Output

2
1
Explanation

We'll refer to player  as  and player  as 

In the first test case,  chooses one of the two towers and reduces it to . Then  reduces the remaining tower to a height of . As both towers now have height ,  cannot make a move so  is the winner.

In the second test case, there is only one tower of height .  can reduce it to a height of either  or .  chooses  as both players always choose optimally. Because  has no possible move,  wins.

function towerBreakers(n, m) {
    // Write your code here
    if (n % 2 == 0 && m % 2 == 0) {
        return 1
    }
    
   return 0
   
}
