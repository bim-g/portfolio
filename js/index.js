(function(){
    w3.getHttpObject("./js/data.json",(res)=>{        
        w3.displayObject("curriculum", res);
    });
})();