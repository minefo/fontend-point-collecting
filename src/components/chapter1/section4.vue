<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>

        <div class="segment-wraper"><h1 class="segment-title"> 1xx: 信息</h1>
            <div class="segment-content">
                消息:	描述:
                100 Continue	服务器仅接收到部分请求，但是一旦服务器并没有拒绝该请求，客户端应该继续发送其余的请求。   备注：不会报错只是提示在pending,ajax不会进入success error complete任何一个
                101 Switching Protocols	服务器转换协议：服务器将遵从客户的请求转换到另外一种协议。 备注：一直等待服务器响应,超时后ajax会进入error complete
            </div>
        </div>

        <div class="segment-wraper"><h1 class="segment-title">  2xx: 成功</h1>
            <div class="segment-content">
                消息:	描述:
                200 OK	请求成功（其后是对GET和POST请求的应答文档。） 备注:请求成功，占大部分状态 ajax会进入success  complete
                201 Created	请求被创建完成，同时新的资源被创建。 备注：感觉和200没啥区别
                202 Accepted	供处理的请求已被接受，但是处理未完成。  备注：感觉和200没啥区别
                203 Non-authoritative Information	文档已经正常地返回，但一些应答头可能不正确，因为使用的是文档的拷贝。 备注：感觉和200没啥区别
                204 No Content	没有新文档。浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而Servlet可以确定用户文档足够新，这个状态代码是很有用的。备注：请求完成，但是<span class="red">没有返回值</span>，ajax不会进入success error complete任何一个
                205 Reset Content	没有新文档。但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容。备注：请求完成，但是<span class="red">没有返回值</span>，ajax会进入success  complete
                206 Partial Content	客户发送了一个带有Range头的GET请求，服务器完成了它。 备注：感觉和200没啥区别
            </div>
        </div>

        <div class="segment-wraper"><h1 class="segment-title">  3xx: 重定向</h1>
            <div class="segment-content">
                消息:	描述:
                300 Multiple Choices	多重选择。链接列表。用户可以选择某链接到达目的地。最多允许五个地址。  备注：不会报错 ajax会进入error complete
                301 Moved Permanently	所请求的页面已经转移至新的url。 备注：不会报错 ajax会进入error complete
                302 Found	所请求的页面已经临时转移至新的url。 备注：不会报错 ajax会进入error complete
                303 See Other	所请求的页面可在别的url下被找到。 备注：不会报错 ajax会进入error complete
                304 Not Modified	未按预期修改文档。客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用。 备注：不会报错 ajax会进入success（此时回调函数没有参数） complete
                305 Use Proxy	客户请求的文档应该通过Location头所指明的代理服务器提取。  备注：不会报错 ajax会进入error complete
                306 Unused	此代码被用于前一版本。目前已不再使用，但是代码依然被保留。 备注：不会报错 ajax会进入error complete
                307 Temporary Redirect	被请求的页面已经临时移至新的url。 备注：不会报错 ajax会进入error complete
            </div>
        </div>
        <div class="segment-wraper"><h1 class="segment-title">4xx: 客户端错误</h1>
            <div class="segment-content">
                消息:	描述:
                400 Bad Request	服务器未能理解请求。 备注：会报错 ajax会进入error complete
                401 Unauthorized	被请求的页面需要用户名和密码。 备注：会报错 ajax会进入error complete
                402 Payment Required	此代码尚无法使用。 备注：会报错 ajax会进入error complete
                403 Forbidden	对被请求页面的访问被禁止。 备注：会报错 ajax会进入error complete
                404 Not Found	服务器无法找到被请求的页面。 备注：会报错 ajax会进入error complete
                405 Method Not Allowed	请求中指定的方法不被允许。 备注：会报错 ajax会进入error complete
                406 Not Acceptable	服务器生成的响应无法被客户端所接受。 备注：会报错 ajax会进入error complete
                407 Proxy Authentication Required	用户必须首先使用代理服务器进行验证，这样请求才会被处理。 备注：会报错 ajax会进入error complete
                408 Request Timeout	请求超出了服务器的等待时间。 备注：会报错 ajax会进入error complete
                409 Conflict	由于冲突，请求无法被完成。备注：会报错 ajax会进入error complete
                410 Gone	被请求的页面不可用。备注：会报错 ajax会进入error complete
                411 Length Required	"Content-Length" 未被定义。如果无此内容，服务器不会接受请求。 备注：会报错 ajax会进入error complete
                412 Precondition Failed	请求中的前提条件被服务器评估为失败。备注：会报错 ajax会进入error complete
                413 Request Entity Too Large	由于所请求的实体的太大，服务器不会接受请求。备注：会报错 ajax会进入error complete
                414 Request-url Too Long	由于url太长，服务器不会接受请求。当post请求被转换为带有很长的查询信息的get请求时，就会发生这种情况。备注：会报错 ajax会进入error complete
                415 Unsupported Media Type	由于媒介类型不被支持，服务器不会接受请求。备注：会报错 ajax会进入error complete
                416 服务器不能满足客户在请求中指定的Range头。备注：会报错 ajax会进入error complete
                417 Expectation Failed 备注：会报错 ajax会进入error complete
            </div>
        </div>


        <div class="segment-wraper"><h1 class="segment-title">5xx: 服务器错误</h1>
            <div class="segment-content">
                消息:	描述:
                500 Internal Server Error	请求未完成。服务器遇到不可预知的情况。备注：会报错 ajax会进入error complete
                501 Not Implemented	请求未完成。服务器不支持所请求的功能。备注：会报错 ajax会进入error complet
                502 Bad Gateway	请求未完成。服务器从上游服务器收到一个无效的响应。备注：会报错 ajax会进入error complet
                503 Service Unavailable	请求未完成。服务器临时过载或当机。备注：会报错 ajax会进入error complet
                504 Gateway Timeout	网关超时。备注：会报错 ajax会进入error complet
                505 HTTP Version Not Supported	服务器不支持请求中指明的HTTP协议版本。备注：会报错 ajax会进入error complet
            </div>
        </div>

        <div class="segment-wraper"><h1 class="segment-title">HTTP</h1><div class="segment-content">
            1.HTTP 是基于文本 (所有的通信都是以纯文本的形式进行)
            2.万维网组成
                1.一个用来表示超文本文档的文本格式，超文本标记语言（HTML）。
                2.一个用来交换超文本文档的简单协议，超文本传输协议（HTTP）。
                3.一个显示（以及编辑）超文本文档的客户端，即网络浏览器。第一个网络浏览器被称为 WorldWideWeb。
                4.一个服务器用于提供可访问的文档，即 httpd 的前身。
            3.状态码会在响应开始时发送，使浏览器能了解请求执行成功或失败，并相应调整行为（如更新或使用本地缓存）
            4.在新HTTP头的帮助下，具备了传输除纯文本HTML文件以外其他类型文档的能力（感谢Content-Type头
            5.服务器和浏览器添加这些新扩展功能,用以描述如何操作实践这些新扩展功能。文档 RFC 1945 定义了 HTTP/1.0
            6.在1997年初，HTTP1.1 标准发布，就在HTTP/1.0 发布的几个月后
            7.HTTP/1.1 消除了大量歧义内容并引入了多项改进：
                I.连接可以复用，节省了多次打开TCP连接加载网页文档资源的时间。
                II.增加流水线操作，允许在第一个应答被完全发送之前就发送第二个请求，以降低通信延迟。
                III.支持响应分块。
                IV.引入额外的缓存控制机制。
                V.引入内容协商机制，包括语言，编码，类型等，并允许客户端和服务器之间约定以最合适的内容进行交换。
                VI.感谢Host头，能够使不同域名配置在同一个IP地址的服务器上。
            8.HTTP协议已经稳定使用超过15年了
            9.HTTP 用于安全传输
              HTTP最大的变化发生在1994年底。HTTP在基本的TCP/IP协议栈上发送信息，网景公司（Netscape Communication）
              在此基础上创建了一个额外的加密传输层：SSL 。SSL 1.0没有在公司以外发布过，
              但SSL 2.0及其后继者SSL 3.0和SSL 3.1允许通过加密来保证服务器和客户端之间交换消息的真实性，来创建电子商务网站
            10.HTTP2/ - 为了更优异的表现
               I.HTTP流水线就成为了Web开发的负担
               II.明确了响应数量的增加和解决复杂的数据传输，SPDY成为了HTTP/2协议的基础
               III/HTTP/2在HTTP/1.1有几处基本的不同:
                 1.HTTP2是二进制协议而不是文本协议。不再可读和无障碍的手动创建，改善的优化技术现在可被实施。
                 2.这是一个复用协议。并行的请求能在同一个链接中处理，移除了HTTP/1.x中顺序和阻塞的约束。
                 3.压缩了headers。因为headers在一系列请求中常常是相似的，其移除了重复和传输重复数据的成本。
                 4.其允许服务器在客户端缓存中填充数据，通过一个叫服务器推送的机制来提前请求。
               VI.在2015年5月正式标准化后，HTTP/2取得了极大的成功
            11.后HTTP/2进化

        </div></div>

        <div class="segment-wraper"><h1 class="segment-title">SSL</h1><div class="segment-content">
            1.SSL(Secure Sockets Layer 安全套接层),及其继任者传输层安全（Transport Layer Security，TLS）是为网络通信提供安全及数据完整性的一种安全协议
            2.利用数据加密(Encryption)的技术，可确保数据在网络上的传输过程中不会被截取及窃听
            3.SSL协议位于TCP/IP协议与各种应用层协议之间，为数据通讯提供安全支持
            4.加密算法
               I.传统加密算法（对称加密） 需要发送者和接收者共享一个密钥,同时用于加密和解密的信息
               II.公钥加密算法（非对称加密） 这样就有可能获得简单地发布一个密钥（公钥），并使用未发布的密钥（私钥）来接受经过公钥加密的消息,也就是公钥加密，私钥解密
               III.消息摘要算法 备注：消息摘要算法的目的，就是让人无法为两条不同的消息找到相同的消息摘要 (可以理解md5)
               IV.数字签名 备注：数字签名主要使用私钥来加密消息摘要和其他信息,任何人都可以使用公钥解密数字签名 数字签名：公钥解密，私钥加密
                  1.签名包含一个唯一的序列号。 这样可以保证发送者无法否认她曾经发送过这条消息，因为只有她可以签名这条消息（不可抵赖性）
            5.证书
               I.发送者需要确认是和接受者通信，接受者需要确定就是发送者发送的,简单说就是通信双方用来确定身份的
               II.认证中心（CA) 备注：知名的认证中心有Versign，Wosign，Thawte等
               III.证书内容包括：公钥和真实身份识别信息，包括个人，服务器或其他实体,具体如下表
                                主题（证书所有人） 	 识别名，公钥
                                签发者	 识别名，签名
                                有效期	 不早于，不晚于
                                管理信息	  版本，序列号
                                扩展信息	 基本限制, Netscape标记等
            VI.识别名DN是用来提供对某个特定背景下的身份
            V.证书的二进制格式是使用（抽象语法标记） 这种表示法定义了如何指定编码规则的内容和如何将信息转换成二进制形式,证书的二进制编码使用了区分编码规则
              对于那些不能采用二进制的信息传递使用Base64编码
            VI.证书颁发机构提供以下服务
                验证证书请求
                处理证书申请
                发行和管理证书
             VII.证书管理
                  1.证书吊销清单 他们有一个列表，里面列举了过去颁发的，但已经不再有效的证书，并且不断更新这个列表
                  2.如果你需要使用一个不是浏览器默认信任的CA机构，就必须将这个CA的根证书装入浏览器的可信根证书列表，使浏览器可以识别这个CA颁发的服务器证书
            VIII.安全套接字层简称 SSL
                  1.SSL是工作在面对连接网络层（如TCP层）和应用层（HTTP层）之间的协议层
                  2.SSL层协议通过为客户端和服务器提供双向认证，对隐私数据的加密，和用数字签名来保证数据完整性，从而提供了一个安全的通信通道
                  3.SSL3.0的一个优势就是它增加了对证书链加载的支持。这项功能使服务器可以将自己的服务器证书和发行者的证书一起传给浏览器
                  4.协商数据传输中使用的加密套接字过程
                    密钥交换方法
                    数据加密传输
                    创建消息认证码（MAC）的消息摘要
            IX.安全HTTP通信 使用加密的HTTP（称为HTTPS），即在SSL协议上使用HTTP协议 服务器端口（HTTPS缺省使用443，HTTP使用80）
            XI.证书验证过程 浏览器使用内置的根证书中的公钥来对收到的证书进行认证，如果一致，就表示该安全证书是由可信任的颁证机构签发的，这个网站就是安全可靠的；
               如果该SSL证书不是根服务器签发的，浏览器就会自动检查上一级的发证机构，直到找到相应的根证书颁发机构，如果该根证书颁发机构是可信的，这个网站的SSL证书也是可信的

        </div></div>



        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            I.post协议是无限大的,一般是服务器限制
        </div></div>

    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        mounted(){

        },
        watch: {
            ...pageCommon.pageCommonWatch.commonWatch
        },
        methods : {
            ...pageCommon.pageCommonMethod.opeMethod,//增删改查方法
            ...pageCommon.pageCommonMethod.otherMethod, //页面其他方法
        },
    }
</script>
<style scoped>

</style>
