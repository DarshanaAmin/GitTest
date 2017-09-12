({
	NavigateToContactDetail : function(component, event, helper) {
        alert('Entering NavigateToDVSDetail' );
        alert('event-->' + event.getParam("ContactRec"));
        $A.createComponent(
            "c:ContactDetails1",
            {
                "contact":event.getParam("ContactRec")
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