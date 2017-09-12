({
    doInit : function(component,event, helper) {
        helper.getContact(component);
    },

    searchKeyChange: function(component, event) {
    	var searchKey = event.getParam("searchKey");
    	var action = component.get("c.findByName");
    	action.setParams({
        	"searchKey": searchKey
    	});
    	action.setCallback(this, function(a) {
        	component.set("v.contacts", a.getReturnValue());
    	});
    	$A.enqueueAction(action);
	},
    
    redirectContactDetail: function(component,event,helper){
        
        var evt = $A.get("e.c:NavigateToContactDetail");
        var index = event.target.dataset.index;
        alert('evt-->' + evt + '--' + component.get("v.contacts")[index]);
        evt.setParams({ "ContactRec": component.get("v.contacts")[index]});
        evt.fire(); 
    },
})