//引入express框架
const express=require('express');

//引入路径处理模块
const path=require('path');
const bodyParser = require('body-parser');
//创建web服务器
const app=express();

//04:app.use(bodyParser.urlencoded());
//05:
app.use(bodyParser.json());

//静态资源访问服务器功能
app.use(express.static(path.join(__dirname,'public')));

//01路由:
app.get('/first',(req,res) => {
    res.send('Hello Ajax');
});
//02路由:
app.get('/responseData',(req,res)=>{
    res.send({"name":"zs"});
});
//03路由:
app.get('/get', (req, res) => {
    // 获取 get 请求参数
    res.send(req.query);
});
//04路由:
app.post('/post', (req, res) => {
    // 获取 post 请求参数
    res.send(req.body);
});
//05路由:
app.post('/json', (req, res) => {
    // 获取 post 请求参数
    res.send(req.body);
});
//监听端口
app.listen(3000);

//控制台提示输出
console.log('服务器启动成功');