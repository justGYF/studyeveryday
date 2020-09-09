# XSS: 跨站点脚本攻击

# CSRF: 跨站点请求伪造攻击

**场景**: 用户登陆站点A，并在新的标签页打开恶意网站C, C在网页中发起对站点A发起请求，浏览器会自动带着A的cookie， 以此，C完成攻击

**攻击前提**：用户登陆A, 并访问C


**防范手段**
1. 验证referer, origin, UA 检测请求发起者是否为客户端，域名是否为A站点
2. **自定义请求头csrfToken**，每次请求添加此请求头，值从cookie中截取，具体规则前后端协商。C站访问A接口不会自动携带此请求头。
3. **不同域的cookie不共享**，C不可以直接读取A的cookie,所以约定的token值可以放在cookie中，这样即使C知道A的token规则，也无法拿到具体的值
4. **要读取cookie，就不可以设置http-only**, 与xss防范冲突，需要具体场景具体分析
