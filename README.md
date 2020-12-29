HOMETASK #1

Problem 1

Problem 2

Problem 3.

Problem 4

Problem 5


Problem 1

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value

I             1

V             5

X             10

L             50

C             100

D             500

M             1000

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.


Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:


I can be placed before V (5) and X (10) to make 4 and 9.

X can be placed before L (50) and C (100) to make 40 and 90.

C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.



Example 1:

Input: s = "III"

Output: 3

Example 2:

Input: s = "IV"

Output: 4

Example 3:

Input: s = "IX"

Output: 9

Example 4:

Input: s = "LVIII"

Output: 58

Explanation: L = 50, V= 5, III = 3.

Example 5:

Input: s = "MCMXCIV"

Output: 1994

Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



Constraints:

1 <= s.length <= 15

s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').

It is guaranteed that s is a valid roman numeral in the range [1, 3999].


Problem 2

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.


Example 1:

Input: x = 121

Output: true

Example 2:

Input: x = -121

Output: false

Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:

Input: x = 10

Output: false

Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Example 4:

Input: x = -101

Output: false



Constraints:

-2**31 <= x <= 2**31 - 1



Problem 3.

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.

Open brackets must be closed in the correct order.


Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([)]"

Output: false

Example 5:

Input: s = "{[]}"

Output: true


Constraints:

1 <= s.length <= 104

s consists of parentheses only '()[]{}'.

Problem 4

Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.


Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]

Output: [2,2,2,1,4,3,3,9,6,7,19]


Constraints:

1 <= arr1.length, arr2.length <= 1000

0 <= arr1[i], arr2[i] <= 1000

All the elements of arr2 are distinct.

Each arr2[i] is in arr1.


Problem 5

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.


Example 1:

Input: nums = [1,3,5,6], target = 5

Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2

Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7

Output: 4

Example 4:

Input: nums = [1,3,5,6], target = 0

Output: 0

Example 5:

Input: nums = [1], target = 0

Output: 0


