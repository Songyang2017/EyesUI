Vue.component('scroll', {
    template: `<div ref="wrapper"><slot></slot></div>`,
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
    mounted() {
        var _this = this;
        setTimeout(function () {
            _this._initScroll()
        }, 20)
    },
    methods: {
        _initScroll() {
            if (!this.$refs.wrapper) {
                return
            }
            this.scroll = new IScroll(this.$refs.wrapper, this.options)
            this.scroll.options.click = true;
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
    },
    watch: {
        data() {
            var _this = this;
            setTimeout(function () {
                _this.refresh()
            }, 20)
        }
    }
})

Vue.component('loading', {
    template: `<popup class="loading-span" showFlag="true" bgColor="rgba(0,0,0,0.5)"><div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
</div></popup>`,
    data() {
        return {

        }
    },
    props:{

    }
})

Vue.component('popup',{
    template: `<div class="popup" :style="{backgroundColor: bgColor}"><slot></slot></div>`,
    props:{
        bgColor: {
            type: String,
            default: '#ffffff'
        }
    },
    data: function(){
        return {

        }
    }
})

Vue.component('emptyShow',{
    template: `<div class="empty-box"><i class="iconfont">&#xe60d;</i><p>{{tip}}</p></div>`,
    props:{
        tip: {
            type: String,
            default: '暂无数据'
        }
    }
})

Vue.component('blockList',{
    template: `<ul class="block-item-list">
            <li class="block-item-list-li" v-if="dataList" v-for="item in dataList">
                <a href="">
                    <div class="left"><img :src="item.img" alt=""></div>
                    <div class="right">
                        <p>{{item.name}}</p>
                        <p>{{item.desc}}</p>
                        <p>{{item.beginDate}}&nbsp;开始</p>
                        <p>{{item.expiryDate}}&nbsp;报名截止</p>
                    </div>
                </a>
                <div>马上报名</div>
            </li>
            <li style="height: .5rem;"></li>
        </ul>`,
    props: {
        dataList:{
            type: Array,
            default: []
        }
    }
})