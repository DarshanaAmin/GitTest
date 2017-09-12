({
    doInit : function(component,event, helper) {
        /*Call to helper method*/
        helper.getContact(component);
    },
    
    searchKeyChange: function(component, event) {
        /*Fetch the parameter from event*/
        var searchKey = event.getParam("searchKey");
        /*Call to Server method*/
        var action = component.get("c.findByName");
        action.setParams({
            "searchKey": searchKey
        });
        /*Action CallBack*/
        action.setCallback(this, function(a) {
            component.set("v.contacts", a.getReturnValue());
        });
        $A.enqueueAction(action);
    }
    
 })