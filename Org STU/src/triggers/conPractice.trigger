trigger conPractice on Contact (before insert) {
    Account acc = [Select Id, name from Account where name = 'Acme11'];
    for(Contact con : trigger.new){
        con.AccountId = acc.Id;
    }
    //insert con;
}