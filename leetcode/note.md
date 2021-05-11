### 循环、判断
  ##### while 
  for 
    if-else 

### 位运算
    & 
    | 
    ^

### 数据结构：
  数组、队列、栈、二叉树、堆、链表、
  队列：先进先出(FIFO-first in first out)    
    入队 unshift(): 它能在数组首端添加任意个项并返回新数组的长度   
    出队pop():删除并返回数组的最后一个元素
  栈：后进先出(LIFO-last in first out) 
    入栈push(): 在数组最后添加一个元素  
    出栈pop()
    eg. 计算器
  其他数组方法：　shift()：删除并返回数组的第一个元素

### 链表

### 二叉树：
  #### 深度优先遍历 Depth-First-Search、
  #### 广度优先遍历
      层序遍历：637.（广度优先遍历）；
      
      二叉树的最大深度：深度优先遍历：分别计算左右子树中的最大深度 + 1；
                      可以用递归实现，也可以不用递归实现；

                    广度优点遍历：用队列。广度优先搜索的队列里存放的是「当前层的所有节点」。每次拓展下一层的时候，我们需要将队列里的所有节点都拿出来进行拓展，
                    这样能保证每次拓展完的时候队列里存放的是当前层的所有节点，即我们是一层一层地进行拓展，最后我们用一个变量 \textit{ans}ans 来维护拓展的次数，该二叉树的最大深度即为 \textit{ans}ans。
    
### 递归 recursion:

### 迭代 iteration:
  递归是一个树结构，从字面可以其理解为重复“递推”和“回归”的过程，当“递推”到达底部时就会开始“回归”，其过程相当于树的深度优先遍历。
  迭代是一个环结构，从初始状态开始，每次迭代都遍历这个环，并更新状态，多次迭代直到到达结束状态。

### 回溯法
  深度优先搜索

  回溯法思路的简单描述是：把问题的解空间转化成了图或者树的结构表示，然后使用深度优先搜索策略进行遍历，遍历的过程中记录和寻找所有可行解或者最优解。
  基本思想类同于：图的深度优先搜索，二叉树的后序遍历；

  回溯法实现：
    递归、迭代
  
  回溯法写法比较统一，就是循环对所有数据执行入栈，递归，然后出栈。

set、map、hashMap、
  
### 动态规划DP 
    求解最优化，在最后结果之前的数字在计算该数字前都已经计算过了。
    788. 旋转数字
    70. 爬楼梯
      ```
      var climbStairs = function(n) {
      if(n===1) return 1;
      let f=1,s=2;
      for(let i=3; i<=n; i++){
          let t=f+s;
          f=s;
          s=t;
      }
      return s;
      };
      ```
    746. 使用最小花费爬楼梯
    剑指 Offer 42. 连续子数组的最大和
      var maxSubArray = function(nums) {
      const dp = new Array(nums.length);
      dp[0] = nums[0];
      dp[1] = nums[0];
      for(let i=2;i<=nums.length;i++){
          dp[i] = Math.max(nums[i-1],nums[i-1]+dp[i-1]);
      }
      return Math.max(...dp)
  };

### 指针:
    指针的基本要素：起始值、终止值、方向（增减）、速度;
    -双指针法  -单指针法

#### 双指针法：
    普通双指针、对撞双指针（指两个指针的方向相对）、快慢双指针（两个指针的方向相同但是移动的速度不一样）;
    (1)快慢指针:
      eg1：876、[链表的中间结点] (https://leetcode-cn.com/problems/middle-of-the-linked-list/solution/lian-biao-de-zhong-jian-jie-dian-by-leetcode-solut/)
        (1) 数组
        ```
          var middleNode = function(head) {
            let A = [head];
            while (A[A.length - 1].next != null)
                A.push(A[A.length - 1].next);
            return A[Math.trunc(A.length / 2)];
          };
        ```
        eg2:
        ```
          var middleNode = function(head) {
            //用两个指针 slow 与 fast 一起遍历链表。slow 一次走一步，fast 一次走两步。那么当 fast 到达链表的末尾时，slow 必然位于中间。
            slow = fast = head;
            while (fast && fast.next) {
                slow = slow.next;
                fast = fast.next.next;
            }
            return slow;
          };
        ```
    (2)对撞双指针:
      eg1:  LCP 18. 早餐组合   暴力法遍历会超出时间限制
        ```
        var breakfastNumber = function(staple, drinks, x) {
          //排序
          staple = staple.sort(function (a, b) {
              return a - b;
          });
          drinks = drinks.sort(function (a, b) {
              return a - b;
          });
          //双指针
          let l1 = staple.length, l2 = drinks.length, result = 0;
          let i = 0; j = l2 - 1;
          while (i < l1 && j >= 0) {
              if (staple[i] + drinks[j] <= x) {
                  result += j + 1; //从大到小遍历，j符合,那小于这个价格的饮料都是符合的。
                  i++;
              } else {
                  j--
              };
          }
          return result % 1000000007; 
      };
        ```
    (3) 快慢双指针：给定一个链表，删除链表的倒数第 n 个节点并返回链表的头指针
      ```
      function removeNthFromEnd( head ,  n ) {
        let prehead = new ListNode(0);
        prehead.next = head;
        let fast = prehead;
        let slow = prehead;
        for(let i=0; i<n; i++){
            fast = fast.next;
        }
        while(fast.next != null){
            fast = fast.next;
            slow = slow.next;
        }
        slow.next = slow.next.next;
        return prehead.next;
    }
      ```

        
[回文链表的例子](https://leetcode-cn.com/problems/palindrome-linked-list/solution/hui-wen-lian-biao-by-leetcode-solution/)

贪心算法

位运算

逆向思维:考虑相反的情况

例子： 
  杨辉三角  
  二分查找  367：有效的完全平方数 / 704 二分查找

    ```
    二分查找是一种基于比较目标值和数组中间元素的教科书式算法。
    如果目标值等于中间元素，则找到目标值。
    如果目标值较小，继续在左侧搜索。
    如果目标值较大，则继续在右侧搜索
    ```
  求和
  排序
 

