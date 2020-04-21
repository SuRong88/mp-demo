Component({
    properties: {
        // 组件附加的类名
        cln: {
            type: String
        },
        title: {
            type: String,
            value: '提示'
        },
        // 标题 默认显示
        showTitle: {
            type: Boolean,
            value: true
        },
        // 内容区 默认隐藏
        showContent: {
            type: Boolean,
            value: false
        },
        confirmText: {
            type: String,
            value: '确定'
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        showCancel: {
            type: Boolean,
            value: true
        }
    },

    data: {
        // 组件内部数据
    },

    methods: {
        // 弹窗确定事件
        confirmHandle: function() {
            this.triggerEvent('confirm');
        },
        // 弹窗取消事件
        cancelHandle: function() {
            this.triggerEvent('cancel', 'data');
        },
        // 阻止冒泡行为
        emptyHandle: function() {
            return false;
        }
        // _onCollection: function() {
        //     let collected = this.properties.collected;
        //     this.setData({
        //         collected: !collected
        //     })
        //     this.triggerEvent('collected', this.properties.collected);
        // }
    }
})
