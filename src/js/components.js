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
    template: `<div class="popup" :style="{backgroundColor: bgColor}" v-show="showFlag"><slot></slot></div>`,
    props:{
        showFlag: {
            type: Boolean,
            default: false
        },
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

Vue.component('dialogAlert',{
    template:`<popup bgColor="rgba(0,0,0,.6)" :showFlag="show"><div class="dia-box"><p>{{alertText}}</p></div></popup>`,
    props:{
        alertText: {
            type: String,
            default: '已知'
        },
        show:{
            type: Boolean,
            default: false
        }
    }
})

Vue.mixin({
    methods:{
        $creatDialog() {
            console.log('mixin', this)
        }
    }
})