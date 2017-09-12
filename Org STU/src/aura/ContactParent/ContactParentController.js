({
	doInit : function(component,event, helper) {
        $A.createComponent(
            "c:ContactInnerParent",
            {
                
            },
            function(newCmp){
                if (component.isValid()) {
                    alert('is valid');
                    var body = component.get("v.body");
                    alert('body' + body.length );
                    body.length = 0;
                    body.push(newCmp);
                    alert(body.push(newCmp));
                    component.set("v.body", body);
                    alert(body[0]);
                }
            }
        );   
    }
})