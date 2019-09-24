class BankAccount {
    constructor(accountName,username,initialDeposit,open,balance) {
        this.accountName = accountName;
        this.userame = username;
        this.intialDeposit = initialDeposit;
        this.open = open;
        this.balance = balance
        //this.currentDeposit = currentDeposit
    }
    



    getBalance() {
        //var = getAccount(username,accounts);
        //if (foundUser) {
           return "Your account currently has shs"+ this.intialDeposit ;
            
        }
         open() {
             this.open = true
             return " You account is accessible"
            // your code here
        }
    
        deposit(x) {
            this.balance = this.intialDeposit + x
            return "You have made a deposit of " + x
                // your code here
        }
    
        withdraw() {
            // your code here
        }
    
        close(){
    this.open = false
    return " Your account is closed"
        }
    }
    
      
    myaccount = new BankAccount("Mpumbya","rozze",25000,true,25000);
    document.getElementById("demo").innerHTML = myaccount.deposit(10000);   
