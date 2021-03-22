# Markdown syntax guide
  一级标题
## Headers
  二级标题
# This is a Heading h1  
   
## This is a Heading h2 
###### This is a Heading h6
  六级标题
## Emphasis

*This text will be italic*  
_This will also be italic_
  斜体
**This text will be bold**  
__This will also be bold__
  加粗
_You **can** combine them_

## Lists

### Unordered
  无序列表，加 *
* Item 1
* Item 2
* Item 2a
* Item 2b

  无序列表，加 -
  - CSS的单位
  - 字体属性
  - 文本属性
  
### Ordered
  有序列表 加1.
1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b

## Images

![This is a alt text.](/image/sample.png "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

```
let message = 'Hello world';
alert(message);
```

## Inline code

This web site is using `markedjs/marked`.