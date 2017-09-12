({
    locationChange : function(component, event, helper) {
        /*Fetch the parameter from event*/
        var token = event.getParam("token");
        if (typeof token != "undefined" && token.indexOf('contact/') === 0){
            var contactId = token.substr(token.indexOf('/') + 1);
            /*Call to Server method*/
            var action = component.get("c.findById");
            action.setParams({
                "contactId": contactId
            });
            /*Action CallBack*/
            action.setCallback(this, function(a) {
                component.set("v.contact", a.getReturnValue());
            });
            $A.enqueueAction(action);
            
        }
    }
})