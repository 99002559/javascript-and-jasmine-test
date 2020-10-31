class employee{
    constructor(name,email,phone,amount){
        this.name=name;
        
        this.phone=phone;
        this.amount=amount;
        
        
    }


    validateName(emp){
        name=emp.name;
        var letters = /^[A-Za-z]+$/;
        var len=name.length;
       
        if(name.match(letters) && (len>=5) )
        {
            return true;
           }
         else
           {
           alert("messages");
           return false;
           }
    }

    
        validatePhone(emp){
       var phone=emp.phone;
        var phoneFor=/^\d{10}$/;
          if (phone.match(phoneFor))
           {
             return true
            }
             return (false)

            }
        
            

}
