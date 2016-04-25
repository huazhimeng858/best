/**
 * Created by Administrator on 2016-04-22.
 */
spa.chat=(function(){
    var configMap={
        main_html:String()+'<div style="padding:1em;color:#fff;">'+'Say hello to chat'+'</div>',
        settable_map:{}
        },
        stateMap={$container:null},
        jqueryMap={},
        setJqueryMap,configModule,initModule;
    setJqueryMap=function(){
        var $container=stateMap.$container;
        jqueryMap={$container:$container};
    };
}());