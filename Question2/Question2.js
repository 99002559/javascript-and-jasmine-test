describe('Suite  to test classses',()=> {
    let emp=null;
    


    it('should set Name',()=>{
       const emp = new employee("Dinesh","K@D")
       const b=emp.validateName(emp);
        expect(true).toBe(b)
    })
    
     it('should set Phone',()=>{
        const emp = new employee("dinesh","amg","8903669826",)
        const p=emp.validatePhone(emp);
         expect(true).toBe(p)
     })

     it('should set Bill',()=>{
        const emp = new employee("dinesh","amg","8903669826",600)
        const a=emp.validateBillAmount(emp);
         expect(true).toBe(a)
     })
     
    
})
