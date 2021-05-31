var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;  //data 当有数据可读时触发,data + chunk
});

readerStream.on('end',function(){
   console.log(data); //end - 没有更多的数据可读时触发,打印data
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");