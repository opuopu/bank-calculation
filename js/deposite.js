// deposite
document.getElementById("d-submit").addEventListener("click",function(){
// input deposite money
    const deposite = document.getElementById("d-input");

    const totalDeposite = deposite.value;
    

    //  add money from deposite section
    const depositeBalance = document.getElementById('d-balance');
//  
const oldBalance =  depositeBalance.innerText
//    depositeBalance.innerText = totalDeposite;
   const newbalance = parseFloat(oldBalance) + parseFloat(totalDeposite);
   depositeBalance.innerText =    newbalance;


//  update balance 


const totalamounts= document.getElementById("total-a");

const totalAmount = totalamounts.innerText;

const restammount = parseFloat(totalAmount) + newbalance;
totalamounts.innerText = restammount;

// clear deposite field using emplty string

deposite.value = '';
})

//  withdraw section----------------------------
document.getElementById('w-submit').addEventListener("click",function(){
    const withdrawInput = document.getElementById("w-input");
    const totalWithdraw = withdrawInput.value
    // set  value to withdraw field

    const withdrawfield = document.getElementById("w-balance")
        const withdrawText = withdrawfield.innerText;

        const newwithdraw = parseFloat(withdrawText) + parseFloat(totalWithdraw)

        withdrawfield.innerText = newwithdraw;

        //  decrease balance 
        const totalamounts= document.getElementById("total-a");

        const totalAmount = totalamounts.innerText;

        const lastamount = parseFloat(totalAmount) - newwithdraw;

        totalamounts.innerText = lastamount
    


        // clear
        withdrawInput.value = "";
     
})
