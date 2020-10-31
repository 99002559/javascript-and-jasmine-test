let user = function(name, emailaddress,telephonenumber,billingdate,billingamount ); 
{
    this.name = name;
    this.emailaddress = emailaddress;
    this.telephonenumber = telephonenumber;
    this.billingdate = billingdate;
    this.billingamount = billingamount;


    this.display = function()
    {
    console.log("Name:" + this.name);
    console.log("email address:" + this.emailaddress);
    console.log("telephone number" + this.telephonenumber);
    console.log("billing date:" + this.billingdate);
    console.log("billing amount:" + this.billingamount);

    }
}