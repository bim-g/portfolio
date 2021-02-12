let social=[];
(function(){
    w3.getHttpObject("./js/data.json",(res)=>{ 
        let contact=res.contact;       
        let identiry = res.identity;       
        let social = res.social;       
        let experience = res.experience;       
        let education = res.education;       
        w3.displayObject("curriculum", res);
    });
    w3.getHttpObject("./js/data.json",(res)=>{ 
        let contact=res.contact;       
        let identiry = res.identity;       
        let social = res.social;       
        let experience = res.experience;       
        let education = res.education;       
        w3.displayObject("socialmedia", res);
    });
})();