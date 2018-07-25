'use strict';

Vue.component('scroll', {
    template: '<div ref="wrapper"><slot></slot></div>',
    props: {
        options: {
            type: Object,
            default: null
        },
        data: {
            type: Array,
            default: null
        }
    },
    mounted: function mounted() {
        var _this = this;
        setTimeout(function () {
            _this._initScroll();
        }, 20);
    },

    methods: {
        _initScroll: function _initScroll() {
            if (!this.$refs.wrapper) {
                return;
            }
            this.scroll = new IScroll(this.$refs.wrapper, this.options);
            this.scroll.options.click = true;
        },
        refresh: function refresh() {
            this.scroll && this.scroll.refresh();
        }
    },
    watch: {
        data: function data() {
            var _this = this;
            setTimeout(function () {
                _this.refresh();
            }, 20);
        }
    }
});

Vue.component('loading', {
    template: '<popup class="loading-span" showFlag="true" bgColor="rgba(0,0,0,0.5)"><div class="loading">\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n        <span></span>\n</div></popup>',
    data: function data() {
        return {};
    },

    props: {}
});

Vue.component('popup', {
    template: '<div class="popup" :style="{backgroundColor: bgColor}"><slot></slot></div>',
    props: {
        bgColor: {
            type: String,
            default: '#ffffff'
        }
    },
    data: function data() {
        return {};
    }
});

Vue.component('emptyShow', {
    template: '<div class="empty-box"><i class="iconfont">&#xe60d;</i><p>{{tip}}</p></div>',
    props: {
        tip: {
            type: String,
            default: '暂无数据'
        }
    }
});

Vue.component('blockList', {
    template: '<ul class="block-item-list">\n            <li class="block-item-list-li" v-if="dataList" v-for="item in dataList">\n                <a href="">\n                    <div class="left"><img :src="item.img" alt=""></div>\n                    <div class="right">\n                        <p>{{item.name}}</p>\n                        <p>{{item.desc}}</p>\n                        <p>{{item.beginDate}}&nbsp;\u5F00\u59CB</p>\n                        <p>{{item.expiryDate}}&nbsp;\u62A5\u540D\u622A\u6B62</p>\n                    </div>\n                </a>\n                <div>\u9A6C\u4E0A\u62A5\u540D</div>\n            </li>\n            <li style="height: .5rem;"></li>\n        </ul>',
    props: {
        dataList: {
            type: Array,
            default: []
        }
    }
});