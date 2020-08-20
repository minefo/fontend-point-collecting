<template>
    <div class="inner-container" v-else>
        <breadcrumb :current-router="$route"></breadcrumb>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>
        <div class="segment-wraper"><h1 class="segment-title"></h1><div class="segment-content"></div></div>

        <div class="segment-wraper"><h1>本节总结:</h1><div class="summary">
            1. app.dock.setMenu(dockMenu) 需要放在app.on('ready', createWindow)中
            2.  --x64 Build for x64 [boolean] (64位系统)
                --ia32为ia32构建[boolean] (32位系统)
            3.自动更新electron 参考文件 updater.zip   https://segmentfault.com/a/1190000016674982
            4.mac系统强制安装全局npm包 sudo npm install electron-prebuilt -g --unsafe-perm
            5.强制删除node_modules rm -rf node_modules
            6.electron编译nodejs包
               I.node-gyp rebuild --target=3.1.13 --arch=x64 --target_platform=darwin --dist-url=https://atom.io/download/atom-shell  参考：https://juejin.im/post/5c3326aee51d45524a11fd7d
               II.配置环境变量
                  1.添加环境变量 https://jingyan.baidu.com/article/8065f87f47b29523312498e4.html
                  2.生效环境变量
                   在~/.zshrc文件最后，增加一行：
                    source ~/.bash_profile
                    https://blog.csdn.net/qq_18505715/article/details/83276208
            7.node-canvas用不了 需要设置环境变量 export PKG_CONFIG_PATH="${PKG_CONFIG_PATH}:/usr/local/opt/libffi/lib/pkgconfig"

            <textarea>
                // 测试main线程
                // console.log('这里是路径22  33 222:__static', path.join(__static, 'icons/256x256.png'))
                // let appIcon = null
                // app.on('ready', function() {
                //   appIcon = new Tray( path.join(__static, 'icons/256x256.png'))
                //   var contextMenu = Menu.buildFromTemplate([
                //     { label: 'Item1', type: 'radio' },
                //     { label: 'Item2', type: 'radio' },
                //     { label: 'Item3', type: 'radio', checked: true },
                //     { label: 'Item4', type: 'radio' }
                //   ])
                //   appIcon.setToolTip('This is my application.')
                //   appIcon.setContextMenu(contextMenu)
                // })

                //自动更新
                //处理更新操作
                function handleUpdate() {
                  const returnData = {
                    error: {status: -1, msg: '检测更新查询异常'},
                    checking: {status: 0, msg: '正在检查应用程序更新'},
                    updateAva: {status: 1, msg: '检测到新版本，正在下载,请稍后'},
                    updateNotAva: {status: -1, msg: '您现在使用的版本为最新版本,无需更新!'},
                  };

                  //和之前package.json配置的一样
                  if(process.env.NODE_ENV === 'development'){
                    autoUpdater.updateConfigPath = path.join(__dirname, 'dev-app-update.yml') //开发环境测试更新
                  }


                  autoUpdater.setFeedURL('http://test.com/');

                  //更新错误
                  autoUpdater.on('error', function (error) {
                    sendUpdateMessage(returnData.error)
                  });

                  //检查中
                  autoUpdater.on('checking-for-update', function () {
                    sendUpdateMessage(returnData.checking)
                  });

                  //发现新版本
                  autoUpdater.on('update-available', function (info) {
                    sendUpdateMessage(returnData.updateAva)
                  });

                  //当前版本为最新版本
                  autoUpdater.on('update-not-available', function (info) {
                    setTimeout(function () {
                      sendUpdateMessage(returnData.updateNotAva)
                    }, 1000);
                  });

                  // 更新下载进度事件
                  autoUpdater.on('download-progress', function (progressObj) {
                    mainWindow.webContents.send('downloadProgress', progressObj)
                  });


                  autoUpdater.on('update-downloaded', function (event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {
                    ipcMain.on('isUpdateNow', (e, arg) => {
                      //some code here to handle event
                      autoUpdater.quitAndInstall();
                    });
                    // win.webContents.send('isUpdateNow')
                  });

                  //执行自动更新检查
                  //autoUpdater.checkForUpdates();

                  // 通过main进程发送事件给renderer进程，提示更新信息
                  function sendUpdateMessage(text) {
                    mainWindow.webContents.send('message', text)
                  }

                  ipcMain.on("checkForUpdate", (event, data) => {
                    console.log('执行更新检查!!!');
                    // event.sender.send('reply', 'hi lee my name is yuan, age is 17');
                    autoUpdater.checkForUpdates();
                  });

                }
              </textarea>
        </div></div>
        <div class="segment-wraper"><h1 class="segment-title">macOs安装nginx服务器</h1><div class="segment-content">
            1./usr/local/var/www 安装完后的路径
            2.brew install nginx 安装方式
            3.配置默认目录 /usr/local/etc/nginx/nginx.conf
            4.启动服务 nginx
            5.关闭 nginx -s stop
            6.查ip ifconfig

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
