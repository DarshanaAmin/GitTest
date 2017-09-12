public with sharing class ContactSearchController {

  
  private String query {get;set;}
  
  public List<Contact> contacts {get;set;}
   public String detail {get;set;}
 public String detailquery {get;set;}
 public List<Contact> contactDetails {get;set;}
   public boolean showDetailsSection {get;set;}
 

  


  public ContactSearchController() {
    query = 'select firstname, lastname, account.name from contact ';
      showDetailsSection = false;
    runQuery();
  }

  

  // runs the actual query
  public void runQuery() {

    try {
      contacts = Database.query(query +  ' limit 20');
    } catch (Exception e) {
      ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'Ooops!'+ e.getMessage()));
    }

  }
 public void runSearch() {

    String firstName = Apexpages.currentPage().getParameters().get('firstname');
   	query = 'select firstname, lastname, account.name from contact  ';
    if (!firstName.equals(''))
    {
      query += ' where firstname LIKE \''+String.escapeSingleQuotes(firstName)+'%\'';
    }
    runQuery();

   
  }
 
 public void showDetails() {

    try {
        showDetailsSection = true;
        detailquery = 'select firstname, lastname, account.name from contact where firstname = \''+ detail+ '\'';
      contactDetails = Database.query(detailquery);
    } catch (Exception e) {
      ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'Ooops!'+ e.getMessage()));
    }

  }
}