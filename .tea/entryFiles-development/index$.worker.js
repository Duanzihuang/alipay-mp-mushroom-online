if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/search-bar/search-bar?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/course-list/course-list?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/circle/circle?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/home/home?hash=323d26732c46268c893495706be75467d530b5c3');
require('../../pages/phone-login/phone-login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/course/course?hash=7a7fa85edf4c2387fd76648e01642ea004f98b53');
require('../../pages/search/search?hash=7a7fa85edf4c2387fd76648e01642ea004f98b53');
require('../../pages/study/study?hash=bf968bf99c6523ba975398358db4c1f19e361c1a');
require('../../pages/my/my?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/course-detail/course-detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}