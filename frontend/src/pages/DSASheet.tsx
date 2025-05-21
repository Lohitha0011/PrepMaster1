import  { useState } from 'react';
import {
  
  CheckCircle,
  Circle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from 'lucide-react';

interface Problem {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  platform: string;
  link: string;
  completed?: boolean;
}

interface Topic {
  id: string;
  title: string;
  description: string;
  problems: Problem[];
  isExpanded?: boolean;
}

interface Section {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
  isExpanded?: boolean;
}

const dsaSections: Section[] = [
  
  {
    id: 'basics',
    title: 'Basics',
    description: 'Master the fundamental concepts of programming',
    topics: [
      {
        id: 'patterns',
        title: 'Patterns',
        description: 'Basic programming patterns to build logic',
        problems: [
          { id: 'p30', title: 'Print Rectangle Pattern', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com' },
          { id: 'p31', title: 'Print Triangle Pattern', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com' },
        ],
      },
      {
        id: 'math-problems',
        title: 'Mathematics Problems',
        description: 'Practice problems related to mathematics.',
        problems: [
          { id: 'p154', title: 'Count Primes', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/count-primes/' },
          { id: 'p155', title: 'Valid Perfect Square', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/valid-perfect-square/' },
          { id: 'p156', title: 'Power of Three', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/power-of-three/' },
          { id: 'p157', title: 'Factorial Trailing Zeroes', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/factorial-trailing-zeroes/' },
          { id: 'p158', title: 'Happy Number', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/happy-number/' },
          { id: 'p159', title: 'Add Two Numbers', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/add-two-numbers/' },
          { id: 'p160', title: 'Excel Sheet Column Number', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/excel-sheet-column-number/' },
          { id: 'p161', title: 'Excel Sheet Column Title', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/excel-sheet-column-title/' },
          { id: 'p162', title: 'Sqrt(x)', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/sqrtx/' },
          { id: 'p163', title: 'Count and Say', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/count-and-say/' },
          { id: 'p164', title: 'Reverse Integer', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/reverse-integer/' },
          { id: 'p165', title: 'Roman to Integer', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/roman-to-integer/' },
          { id: 'p166', title: 'Integer to Roman', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/integer-to-roman/' },
          { id: 'p167', title: 'Two Sum II - Input Array Is Sorted', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' },
          { id: 'p168', title: 'Plus One', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/plus-one/' },
        ],
      },
    ],
  },
  {
    id: 'sorting',
    title: 'Sorting Algorithms',
    description: 'Learn about sorting algorithms and their applications.',
    topics: [
      {
        id: 'sorting-problems',
        title: 'Sorting Problems',
        description: 'Practice problems related to sorting algorithms.',
        problems: [
          { id: 'p209', title: 'Sort Colors', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/sort-colors/' },
          { id: 'p210', title: 'Kth Largest Element in an Array', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
          { id: 'p211', title: 'Merge Intervals', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/merge-intervals/' },
          { id: 'p212', title: 'Top K Frequent Elements', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/top-k-frequent-elements/' },
          { id: 'p213', title: 'Find K Closest Elements', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-k-closest-elements/' },
          { id: 'p214', title: 'Largest Number', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/largest-number/' },
          { id: 'p215', title: 'Wiggle Sort II', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/wiggle-sort-ii/' },
          { id: 'p216', title: 'Sort List', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/sort-list/' },
          { id: 'p217', title: 'Kth Smallest Element in a BST', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/' },
          { id: 'p218', title: 'Find the Duplicate Number', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-the-duplicate-number/' },
        ],
      },
    ],
  },
  {
    id: 'searching',
    title: 'Searching Algorithms',
    description: 'Learn about searching algorithms and their applications.',
    topics: [
      {
        id: 'searching-problems',
        title: 'Searching Problems',
        description: 'Practice problems related to searching algorithms.',
        problems: [
          { id: 'p219', title: 'Binary Search', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/binary-search/' },
          { id: 'p220', title: 'Search Insert Position', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/search-insert-position/' },
          { id: 'p221', title: 'First Bad Version', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/first-bad-version/' },
          { id: 'p222', title: 'Find Peak Element', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-peak-element/' },
          { id: 'p223', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
          { id: 'p224', title: 'Find Minimum in Rotated Sorted Array', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/' },
          { id: 'p225', title: 'Search a 2D Matrix', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/search-a-2d-matrix/' },
          { id: 'p226', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
          { id: 'p227', title: 'Find First and Last Position of Element in Sorted Array', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/' },
          { id: 'p228', title: 'Search in Rotated Sorted Array II', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array-ii/' },
        ],
      },
    ],
  },
  {
    id: 'arrays',
    title: 'Arrays',
    description: 'Learn about arrays and their operations.',
    topics: [
      {
        id: 'array-problems',
        title: 'Array Problems',
        description: 'Practice problems related to arrays.',
        problems: [
          { id: 'p1', title: 'Two Sum', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/two-sum/' },
          { id: 'p2', title: 'Best Time to Buy and Sell Stock', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/' },
          { id: 'p3', title: 'Rotate Array', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/rotate-array/' },
          { id: 'p4', title: 'Contains Duplicate', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/contains-duplicate/' },
          { id: 'p5', title: 'Maximum Subarray', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/maximum-subarray/' },
          { id: 'p6', title: 'Product of Array Except Self', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/product-of-array-except-self/' },
          { id: 'p7', title: 'Merge Sorted Array', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/merge-sorted-array/' },
          { id: 'p8', title: 'Find the Duplicate Number', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-the-duplicate-number/' },
          { id: 'p9', title: '3Sum', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/3sum/' },
          { id: 'p10', title: 'Maximum Product Subarray', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/maximum-product-subarray/' },
          { id: 'p11', title: 'Arrays: Left Rotation', difficulty: 'Easy', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/array-left-rotation/problem' },
          { id: 'p12', title: 'Array Manipulation', difficulty: 'Medium', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/crush/problem' },
          { id: 'p13', title: 'Minimum Swaps 2', difficulty: 'Medium', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/minimum-swaps-2/problem' },
          { id: 'p14', title: '2D Array - DS', difficulty: 'Easy', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/2d-array/problem' },
          { id: 'p15', title: 'Dynamic Array', difficulty: 'Easy', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/dynamic-array/problem' },
          { id: 'p16', title: 'Find the Union and Intersection of Two Sorted Arrays', difficulty: 'Medium', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/union-and-intersection-of-two-sorted-arrays-2/' },
          { id: 'p17', title: 'Maximum Sum Subarray of Size K', difficulty: 'Medium', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/sliding-window-maximum-maximum-sum-subarray-size-k/' },
          { id: 'p18', title: 'Kadane\'s Algorithm', difficulty: 'Medium', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/' },
          { id: 'p19', title: 'Find the First Repeating Element in an Array', difficulty: 'Easy', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/find-the-first-repeating-element-in-an-array/' },
        ],
      },
    ],
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    description: 'Learn about binary search and its applications.',
    topics: [
      {
        id: 'binary-search-problems',
        title: 'Binary Search Problems',
        description: 'Practice problems related to binary search.',
        problems: [
          { id: 'p20', title: 'Binary Search', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/binary-search/' },
          { id: 'p21', title: 'Search Insert Position', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/search-insert-position/' },
          { id: 'p22', title: 'Find First and Last Position of Element in Sorted Array', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/' },
          { id: 'p23', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
          { id: 'p24', title: 'Kth Smallest Element in a Sorted Matrix', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/' },
        ],
      },
    ],
  },
  {
    id: 'strings',
    title: 'Strings',
    description: 'Learn about string manipulation and algorithms.',
    topics: [
      {
        id: 'string-problems',
        title: 'String Problems',
        description: 'Practice problems related to strings.',
        problems: [
          { id: 'p169', title: 'Longest Common Prefix', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-common-prefix/' },
        { id: 'p170', title: 'Valid Palindrome', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/valid-palindrome/' },
        { id: 'p171', title: 'Implement strStr()', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/implement-strstr/' },
        { id: 'p172', title: 'Count and Say', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/count-and-say/' },
        { id: 'p173', title: 'Group Anagrams', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/group-anagrams/' },
        { id: 'p174', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
        { id: 'p175', title: 'String to Integer (atoi)', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/string-to-integer-atoi/' },
        { id: 'p176', title: 'Valid Anagram', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/valid-anagram/' },
        { id: 'p177', title: 'Longest Palindromic Substring', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-palindromic-substring/' },
        { id: 'p178', title: 'Minimum Window Substring', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/minimum-window-substring/' },
        ],
      },
    ],
  },
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    description: 'Learn about linked lists and their operations.',
    topics: [
      {
        id: 'linked-list-problems',
        title: 'Linked List Problems',
        description: 'Practice problems related to linked lists.',
        problems: [
          { id: 'p34', title: 'Reverse Linked List', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/reverse-linked-list/' },
          { id: 'p35', title: 'Merge Two Sorted Lists', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/merge-two-sorted-lists/' },
          { id: 'p36', title: 'Linked List Cycle', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/linked-list-cycle/' },
          { id: 'p37', title: 'Remove Nth Node From End of List', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/' },
          { id: 'p38', title: 'Palindrome Linked List', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/palindrome-linked-list/' },
          { id: 'p39', title: 'Intersection of Two Linked Lists', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/intersection-of-two-linked-lists/' },
          { id: 'p40', title: 'Add Two Numbers', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/add-two-numbers/' },
          { id: 'p41', title: 'Copy List with Random Pointer', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/copy-list-with-random-pointer/' },
          { id: 'p42', title: 'Flatten a Multilevel Doubly Linked List', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/' },
          { id: 'p43', title: 'Remove Duplicates from Sorted List', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-list/' },
        ],
      },
    ],
  },
  {
    id: 'recursion',
    title: 'Recursion',
    description: 'Learn about recursion and backtracking.',
    topics: [
      {
        id: 'recursion-problems',
        title: 'Recursion Problems',
        description: 'Practice problems related to recursion.',
        problems: [
          { id: 'p44', title: 'Climbing Stairs', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/climbing-stairs/' },
          { id: 'p45', title: 'Generate Parentheses', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/generate-parentheses/' },
          { id: 'p46', title: 'Permutations', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/permutations/' },
          { id: 'p47', title: 'Subsets', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/subsets/' },
          { id: 'p48', title: 'Combination Sum', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/combination-sum/' },
          { id: 'p49', title: 'Letter Combinations of a Phone Number', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' },
          { id: 'p50', title: 'N-Queens', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/n-queens/' },
          { id: 'p51', title: 'Combination Sum II', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/combination-sum-ii/' },
          { id: 'p52', title: 'Unique Paths', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/unique-paths/' },
          { id: 'p53', title: 'Word Search', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/word-search/' },
        ],
      },
    ],
  },
  {
    id: 'bit-manipulation',
    title: 'Bit Manipulation',
    description: 'Learn about bit manipulation techniques.',
    topics: [
      {
        id: 'bit-manipulation-problems',
        title: 'Bit Manipulation Problems',
        description: 'Practice problems related to bit manipulation.',
        problems: [
          { id: 'p54', title: 'Single Number', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/single-number/' },
          { id: 'p55', title: 'Number of 1 Bits', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/number-of-1-bits/' },
          { id: 'p56', title: 'Power of Two', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/power-of-two/' },
          { id: 'p57', title: 'Reverse Bits', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/reverse-bits/' },
          { id: 'p58', title: 'Counting Bits', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/counting-bits/' },
          { id: 'p59', title: 'Bitwise AND of Numbers Range', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/bitwise-and-of-numbers-range/' },
          { id: 'p60', title: 'Single Number II', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/single-number-ii/' },
          { id: 'p61', title: 'Find the Complement', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-the-complement/' },
          { id: 'p62', title: 'Maximum XOR of Two Numbers in an Array', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/' },
          { id: 'p63', title: 'Sum of Two Integers', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/sum-of-two-integers/' },
        ],
      },
    ],
  },
  {
    id: 'stacks',
    title: 'Stacks',
    description: 'Learn about stack data structure and its applications.',
    topics: [
      {
        id: 'stack-problems',
        title: 'Stack Problems',
        description: 'Practice problems related to stacks.',
        problems: [
          { id: 'p64', title: 'Valid Parentheses', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/valid-parentheses/' },
          { id: 'p65', title: 'Min Stack', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/min-stack/' },
          { id: 'p66', title: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/' },
          { id: 'p67', title: 'Daily Temperatures', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/daily-temperatures/' },
          { id: 'p68', title: 'Largest Rectangle in Histogram', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/largest-rectangle-in-histogram/' },
          { id: 'p69', title: 'Remove K Digits', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/remove-k-digits/' },
          { id: 'p70', title: 'Next Greater Element I', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/next-greater-element-i/' },
          { id: 'p71', title: 'Trapping Rain Water', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/trapping-rain-water/' },
          { id: 'p72', title: 'Binary Search Tree Iterator', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/binary-search-tree-iterator/' },
          { id: 'p73', title: 'Implement Queue using Stacks', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
          ],
        },
      ],
    },
    {
      id: 'queues',
      title: 'Queues',
      description: 'Learn about queue data structure and its applications.',
      topics: [
        {
          id: 'queue-problems',
          title: 'Queue Problems',
          description: 'Practice problems related to queues.',
          problems: [
            { id: 'p74', title: 'Implement Stack using Queues', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/implement-stack-using-queues/' },
            { id: 'p75', title: 'Design Circular Queue', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/design-circular-queue/' },
            { id: 'p76', title: 'Number of Recent Calls', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/number-of-recent-calls/' },
            { id: 'p77', title: 'Sliding Window Maximum', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/sliding-window-maximum/' },
            { id: 'p78', title: 'Design Hit Counter', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/design-hit-counter/' },
            { id: 'p79', title: 'Implement Queue using Stacks', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/implement-queue-using-stacks/' },
            { id: 'p80', title: 'Course Schedule', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/course-schedule/' },
            { id: 'p81', title: 'Course Schedule II', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/course-schedule-ii/' },
            { id: 'p82', title: 'Binary Tree Level Order Traversal', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/' },
            { id: 'p83', title: 'Design a Stack that Supports Increment Operations', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/design-a-stack-that-supports-increment-operations/' },
          ],
        },
      ],
    },
    {
      id: 'backtracking',
      title: 'Backtracking Algorithms',
      description: 'Learn about backtracking algorithms and their applications.',
      topics: [
        {
          id: 'backtracking-problems',
          title: 'Backtracking Problems',
          description: 'Practice problems related to backtracking algorithms.',
          problems: [
            { id: 'p239', title: 'Permutations', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/permutations/' },
            { id: 'p240', title: 'Combinations', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/combinations/' },
            { id: 'p241', title: 'Subsets', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/subsets/' },
            { id: 'p242', title: 'Word Search', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/word-search/' },
            { id: 'p243', title: 'N-Queens', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/n-queens/' },
            { id: 'p244', title: 'N-Queens II', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/n-queens-ii/' },
            { id: 'p245', title: 'Combination Sum', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/combination-sum/' },
            { id: 'p246', title: 'Combination Sum II', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/combination-sum-ii/' },
            { id: 'p247', title: 'Letter Combinations of a Phone Number', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/' },
            { id: 'p248', title: 'Restore IP Addresses', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/restore-ip-addresses/' },
          ],
        },
      ],
    },
    {
      id: 'divide-and-conquer',
      title: 'Divide and Conquer Algorithms',
      description: 'Learn about divide and conquer algorithms and their applications.',
      topics: [
        {
          id: 'divide-and-conquer-problems',
          title: 'Divide and Conquer Problems',
          description: 'Practice problems related to divide and conquer algorithms.',
          problems: [
            { id: 'p249', title: 'Merge Sort', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/sort-an-array/' },
            { id: 'p250', title: 'Quick Sort', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
            { id: 'p251', title: 'Count Inversions', difficulty: 'Medium', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/count-inversions-array/' },
            { id: 'p252', title: 'Find Kth Largest Element', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
            { id: 'p253', title: 'Search in Rotated Sorted Array', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/' },
            { id: 'p254', title: 'Find Peak Element', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-peak-element/' },
            { id: 'p255', title: 'Median of Two Sorted Arrays', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/median-of-two-sorted-arrays/' },
            { id: 'p256', title: 'Maximum Subarray', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/maximum-subarray/' },
            { id: 'p257', title: 'Closest Pair of Points', difficulty: 'Medium', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/closest-pair-of-points/' },
            { id: 'p258', title: 'Count of Smaller Numbers After Self', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/count-of-smaller-numbers-after-self/' },
      ],
    },
  ],
},
    {
      id: 'sliding-window',
      title: 'Sliding Window Algorithms',
      description: 'Learn about sliding window algorithms and their applications.',
      topics: [
        {
          id: 'sliding-window-problems',
          title: 'Sliding Window Problems',
          description: 'Practice problems related to sliding window algorithms.',
          problems: [
            { id: 'p296', title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' },
            { id: 'p297', title: 'Minimum Size Subarray Sum', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/minimum-size-subarray-sum/' },
            { id: 'p298', title: 'Longest Repeating Character Replacement', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-repeating-character-replacement/' },
            { id: 'p299', title: 'Permutation in String', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/permutation-in-string/' },
            { id: 'p300', title: 'Sliding Window Maximum', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/sliding-window-maximum/' },
            { id: 'p301', title: 'Longest Substring with At Most Two Distinct Characters', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/' },
            { id: 'p302', title: 'Design a Sliding Window', difficulty: 'Medium', platform: 'HackerRank', link: 'https://www.hackerrank.com/challenges/design-a-sliding-window/problem' },
            { id: 'p303', title: 'Sliding Window Median', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/sliding-window-median/' },
            { id: 'p304', title: 'Sliding Puzzle', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/sliding-puzzle/' },
            { id: 'p305', title: 'Sliding Window Pattern', difficulty: 'Medium', platform: 'Educative', link: 'https://www.educative.io/courses/grokking-the-coding-interview/BQ3QQjGhvZQ' },
          ],
        },
      ],
    },
    {
      id: 'heaps',
      title: 'Heap Algorithms',
      description: 'Learn about heap data structures and their applications.',
      topics: [
        {
          id: 'heap-problems',
          title: 'Heap Problems',
          description: 'Practice problems related to heap algorithms.',
          problems: [
            { id: 'p306', title: 'Kth Largest Element in an Array', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/' },
            { id: 'p307', title: 'Merge k Sorted Lists', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/merge-k-sorted-lists/' },
            { id: 'p308', title: 'Top K Frequent Elements', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/top-k-frequent-elements/' },
            { id: 'p309', title: 'Find K Pairs with Smallest Sums', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-k-pairs-with-smallest-sums/' },
            { id: 'p310', title: 'Kth Smallest Element in a Sorted Matrix', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/' },
            { id: 'p311', title: 'Last Stone Weight', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/last-stone-weight/' },
            { id: 'p312', title: 'Reorganize String', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/reorganize-string/' },
            { id: 'p313', title: 'Kth Largest Element in a Stream', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/' },
            { id: 'p314', title: 'Find Median from Data Stream', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-median-from-data-stream/' },
            { id: 'p315', title: 'Sliding Window Maximum', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/sliding-window-maximum/' },
          ],
        },
      ],
    },
    {
      id: 'greedy',
      title: 'Greedy Algorithms',
      description: 'Learn about greedy algorithms and their applications.',
      topics: [
        {
          id: 'greedy-problems',
          title: 'Greedy Problems',
          description: 'Practice problems related to greedy algorithms.',
          problems: [
            { id: 'p135', title: 'Assign Cookies', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/assign-cookies/' },
            { id: 'p136', title: 'Jump Game II', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/jump-game-ii/' },
            { id: 'p137', title: 'Gas Station', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/gas-station/' },
            { id: 'p138', title: 'Minimum Number of Arrows to Burst Balloons', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/' },
            { id: 'p139', title: 'Partition Labels', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/partition-labels/' },
            { id: 'p140', title: 'Meeting Rooms II', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/meeting-rooms-ii/' },
            { id: 'p141', title: 'Minimum Cost to Connect Sticks', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/minimum-cost-to-connect-sticks/' },
            { id: 'p142', title: 'Candy', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/candy/' },
            { id: 'p143', title: 'Maximum Subarray', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/maximum-subarray/' },
          ],
        },
      ],
    },
    {
      id: 'trees',
      title: 'Trees',
      description: 'Learn about tree data structures and their applications.',
      topics: [
        {
          id: 'tree-problems',
          title: 'Tree Problems',
          description: 'Practice problems related to trees.',
          problems: [
            { id: 'p84', title: 'Maximum Depth of Binary Tree', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/' },
            { id: 'p85', title: 'Validate Binary Search Tree', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/validate-binary-search-tree/' },
            { id: 'p86', title: 'Binary Tree Inorder Traversal', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/binary-tree-inorder-traversal/' },
            { id: 'p87', title: 'Lowest Common Ancestor of a Binary Search Tree', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/' },
            { id: 'p88', title: 'Binary Tree Level Order Traversal II', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/binary-tree-level-order-traversal-ii/' },
            { id: 'p89', title: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/' },
            { id: 'p90', title: 'Diameter of Binary Tree', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/diameter-of-binary-tree/' },
            { id: 'p91', title: 'Kth Smallest Element in a BST', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/' },
            { id: 'p92', title: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/' },
            { id: 'p93', title: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/' },
          ],
        },
      ],
    },
    {
      id: 'graphs',
      title: 'Graphs',
      description: 'Learn about graph data structures and their applications.',
      topics: [
        {
          id: 'graph-problems',
          title: 'Graph Problems',
          description: 'Practice problems related to graphs.',
          problems: [
            { id: 'p94', title: 'Number of Islands', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/number-of-islands/' },
            { id: 'p95', title: 'Clone Graph', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/clone-graph/' },
            { id: 'p96', title: 'Course Schedule', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/course-schedule/' },
            { id: 'p97', title: 'Pacific Atlantic Water Flow', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/' },
            { id: 'p98', title: 'Graph Valid Tree', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/graph-valid-tree/' },
            { id: 'p99', title: 'Minimum Height Trees', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/minimum-height-trees/' },
            { id: 'p100', title: 'Find if Path Exists in Graph', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/find-if-path-exists-in-graph/' },
            { id: 'p101', title: 'Longest Path in a Grid', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-path-in-a-grid/' },
        { id: 'p102', title: 'Reconstruct Itinerary', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/reconstruct-itinerary/' },
        { id: 'p103', title: 'Course Schedule II', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/course-schedule-ii/' },
        { id: 'p104', title: 'Cheapest Flights Within K Stops', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/' },
        { id: 'p105', title: 'Word Ladder II', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/word-ladder-ii/' },
      ],
    },
  ],
},
{
  id: 'dynamic-programming',
  title: 'Dynamic Programming',
  description: 'Learn about dynamic programming techniques and problems.',
  topics: [
    {
      id: 'dp-problems',
      title: 'Dynamic Programming Problems',
      description: 'Practice problems related to dynamic programming.',
      problems: [
        { id: 'p106', title: 'Climbing Stairs', difficulty: 'Easy', platform: 'LeetCode', link: 'https://leetcode.com/problems/climbing-stairs/' },
        { id: 'p107', title: 'House Robber', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/house-robber/' },
        { id: 'p108', title: 'Longest Increasing Subsequence', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-increasing-subsequence/' },
        { id: 'p109', title: 'Coin Change', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/coin-change/' },
        { id: 'p110', title: 'Edit Distance', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/edit-distance/' },
        { id: 'p111', title: 'Unique Paths', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/unique-paths/' },
        { id: 'p112', title: 'Longest Palindromic Substring', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-palindromic-substring/' },
        { id: 'p113', title: 'Word Break', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/word-break/' },
        { id: 'p114', title: 'Maximum Product Subarray', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/maximum-product-subarray/' },
        { id: 'p115', title: '0/1 Knapsack Problem', difficulty: 'Medium', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/' },
      ],
    },
  ],
},
{
  id: 'tries',
  title: 'Tries',
  description: 'Learn about trie data structures and their applications.',
  topics: [
    {
      id: 'trie-problems',
      title: 'Trie Problems',
      description: 'Practice problems related to trie data structures.',
      problems: [
        { id: 'p316', title: 'Implement Trie (Prefix Tree)', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/implement-trie-prefix-tree/' },
        { id: 'p317', title: 'Add and Search Word - Data structure design', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/add-and-search-word-data-structure-design/' },
        { id: 'p318', title: 'Replace Words', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/replace-words/' },
        { id: 'p319', title: 'Longest Word in Dictionary', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/longest-word-in-dictionary/' },
        { id: 'p320', title: 'Palindrome Pairs', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/palindrome-pairs/' },
        { id: 'p321', title: 'Count Distinct Substrings', difficulty: 'Hard', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/count-distinct-substrings-using-trie/' },
        { id: 'p322', title: 'Implement Magic Dictionary', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/implement-magic-dictionary/' },
        { id: 'p323', title: 'Stream of Characters', difficulty: 'Medium', platform: 'LeetCode', link: 'https://leetcode.com/problems/stream-of-characters/' },
        { id: 'p324', title: 'Count of Distinct Substrings', difficulty: 'Medium', platform: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/count-distinct-substrings-using-trie/' },
        { id: 'p325', title: 'Word Search II', difficulty: 'Hard', platform: 'LeetCode', link: 'https://leetcode.com/problems/word-search-ii/' },
      ],
    },
  ],
},
];     



const DifficultyBadge = ({ difficulty }: { difficulty: Problem['difficulty'] }) => {
  const colors = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800',
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
};

const ProgressBar = ({ progress }: { progress: number }) => (
  <div className="w-full bg-gray-200 rounded-full h-2">
    <div
      className="bg-indigo-600 h-2 rounded-full"
      style={{ width: `${progress}%` }}
    />
  </div>
);

const ProblemRow = ({ problem, onToggle }: { problem: Problem; onToggle: (id: string) => void }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-50 border-b last:border-b-0">
    <div className="flex items-center space-x-4">
      <button onClick={() => onToggle(problem.id)} className="focus:outline-none">
        {problem.completed ? (
          <CheckCircle className="h-5 w-5 text-green-500" />
        ) : (
          <Circle className="h-5 w-5 text-gray-300" />
        )}
      </button>
      <div>
        <h4 className="text-sm font-medium text-gray-900">{problem.title}</h4>
        <p className="text-sm text-gray-500">{problem.platform}</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <DifficultyBadge difficulty={problem.difficulty} />
      <a
        href={problem.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 hover:text-indigo-800"
      >
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  </div>
);

const TopicCard = ({ topic, onToggleProblem }: { topic: Topic; onToggleProblem: (id: string) => void }) => {
  const completedProblems = topic.problems.filter((p) => p.completed).length;
  const totalProblems = topic.problems.length;
  const progress = (completedProblems / totalProblems) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div
        className="p-6 flex justify-between items-center cursor-pointer"
        onClick={() => onToggleProblem(topic.id)}
      >
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{topic.description}</p>
        </div>
        <div className="flex-shrink-0">
          <ProgressBar progress={progress} />
          <p className="text-xs text-gray-500 mt-1">
            {completedProblems}/{totalProblems} Completed
          </p>
        </div>
      </div>
      {topic.isExpanded && (
        <div className="border-t border-gray-200">
          {topic.problems.map((problem) => (
            <ProblemRow
              key={problem.id}
              problem={problem}
              onToggle={onToggleProblem}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const DSASheet = () => {
  const [sections, setSections] = useState(dsaSections);
  const [completedProblems, setCompletedProblems] = useState<Set<string>>(new Set());

  const toggleSection = (sectionId: string) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    );
  };

  const toggleProblem = (problemId: string) => {
    setCompletedProblems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(problemId)) newSet.delete(problemId);
      else newSet.add(problemId);
      return newSet;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">DSA Sheet</h1>
        <p className="mt-4 text-xl text-gray-600">
          A structured path to master Data Structures and Algorithms
        </p>
      </div>
      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button
              className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                <p className="mt-1 text-sm text-gray-600">{section.description}</p>
              </div>
              {section.isExpanded ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            {section.isExpanded && (
              <div className="p-6 space-y-6">
                {section.topics.map((topic) => (
                  <TopicCard
                    key={topic.id}
                    topic={{
                      ...topic,
                      problems: topic.problems.map((problem) => ({
                        ...problem,
                        completed: completedProblems.has(problem.id),
                      })),
                      isExpanded: true,
                    }}
                    onToggleProblem={toggleProblem}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DSASheet;