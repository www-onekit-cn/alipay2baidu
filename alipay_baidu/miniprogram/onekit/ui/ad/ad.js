Component({
options: {     virtualHost: true,
        addGlobalClass: true,
    },
    properties: {    
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    onekitId:{type:String,value:""},
    "ad-type":{
    type: String,
    value: 'banner', 
    }
    },

    data: {}, // 私有数据，可用于模版渲染

    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {},

    detached: function () {},

    methods: {
       
    }
});