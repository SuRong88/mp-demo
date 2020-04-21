/**
 * 通用返回
 */
function returnBack(e) {
    wx.navigateBack({
        delta: 1
    });
};

/**
 * 空函数
 */
function emptyHandle(e) {
    return false
};

/**
 * 公用跳转
 */
function jump(e) {
    var pages = getCurrentPages();
    var currentPage = pages[pages.length - 1];
    var current = currentPage.route;
    var url = getApp().dataset(e, 'url');
    var type = getApp().dataset(e, 'type');
    if (`/${current}` == url) {
        return false
    }
    if (type == 'reLaunch') {
        url && wx.reLaunch({
            url
        });
    } else if (type == 'switchTab') {
        url && wx.switchTab({
            url
        });
    } else if (type == 'redirect') {
        url && wx.redirectTo({
            url
        });
    } else {
        url && wx.navigateTo({
            url
        });
    }
}

/**
 * 外联跳转(待测)
 */
function webJump(e) {
    var url = getApp().dataset(e, 'url');
    if (/^http/.test(url)) {
        wx.navigateTo({
            url: '/pages/web/web?url=' + encodeURIComponent(url)
        });
    }
};

/**
 * 初始化base
 */
function onLoad(page) {
    page.emptyHandle = emptyHandle;
    page.returnBack = returnBack;
    page.base_jump = jump;
    page.base_webJump = webJump;
    // 判断当前是否iphoneX 
    var sys = getApp().getSystemInfo(),
        model = sys.model.toLowerCase(),
        is_iphone = /iphone/.test(sys.model.toLowerCase()),
        is_iphonex = /iphone\D*x/.test(model),
        system;
    // 判断系统
    system = is_iphone ? 'ios' : 'android';
    page.setData({
        is_iphonex,
        system,
        isHome: getCurrentPages().length <= 1
    });
}

module.exports = {
    onLoad
};
