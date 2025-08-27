let item = "dress" , itemPrice = 700 , itemQty = 8;

let totalRate = itemPrice * itemQty ;
let discount;

if(totalRate >= 8000){
    discount = 0.20;
    console.log(`Total discount rate is : ${discount}`);
}

else if(totalRate >= 5000){
    discount = 0.15;
    console.log(`Total discount rate is : ${discount}`);
}

else if(totalRate >= 2000){
    discount = 0.05;
    console.log(`Total discount rate is : ${discount}`);
}
else {
    discount = 0;
    console.log(`Total discount rate is : ${discount}`);
}

let disPrice = totalRate * discount;





console.log(`Total price for your Purchase : ${totalRate}`);

console.log(`Discounted price for your purchase is : ${disPrice}`);

let netPrice = totalRate - disPrice ;

console.log(`Price after applying Discount : ${netPrice}`);



