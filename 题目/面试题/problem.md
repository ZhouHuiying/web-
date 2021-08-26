## 海康笔试
单选16个 多选4个 两个问答 2个编程
1. 
var num = '10' + 3 - '1';    //102
先'10' + 1, 字符串和数字相加 会变成字符串'103'
'103' - '1'会变成数字103 - 1就等于102

2. 求合数

3. 字母异位词分组
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
示例:
    输入: [“eat”, “tea”, “tan”, “ate”, “nat”,“bat”]
    输出:
    [ [“ate”,“eat”,“tea”], [“nat”,“tan”], [“bat”]]

```javascript
var groupAnagrams = function(strs) {
    var res = {}
    for(var i=0;i<strs.length;i++){
        var s = strs[i].split('').sort().join('')
        //排序后字母不相同，则初始化数组为空
        if(!res[s]){
            res[s] = []
        }
        res[s].push(strs[i])
    }
    return Object.values(res)
};
```