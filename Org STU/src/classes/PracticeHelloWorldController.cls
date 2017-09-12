public with sharing class PracticeHelloWorldController {
    @AuraEnabled
    public static User getCurrentUser() {
        return [SELECT Id, FirstName, LastName FROM User WHERE Id = :UserInfo.getUserId()];
    }
    
}