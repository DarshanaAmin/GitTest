({
	getContact : function(component) {
        /*Call to Server method*/
		var action = component.get("c.findAll");
        /*Action CallBack*/
        action.setCallback(this, function(a) {
            component.set("v.contacts", a.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})