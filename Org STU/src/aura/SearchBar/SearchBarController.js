({
    searchKeyChange: function(component, event, helper) {
        /* fetch event, set param and fire it*/
        var myEvent = $A.get("e.c:SearchKeyChange");
        myEvent.setParams({"searchKey": event.target.value});
        myEvent.fire();
    }
})