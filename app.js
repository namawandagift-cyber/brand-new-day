const studentName = "Brian";

const unitPrice = 4000;

const quantity = 3;
const payment = 20000;

const totalCost = unitPrice * quantity;
const balance = payment - totalCost;
const paymentCoversCost = payment >= totalCost;
console.log("----------Receipt----------");
console.log("Student Name:", studentName);
console.log("Quantity:", quantity, "UGX");
console.log("Unit Price:", unitPrice, "UGX");
console.log("Total Cost:", totalCost, "UGX");
console.log("Payment:", payment, "UGX");
console.log("Balance:", balance, "UGX");
console.log("Payment Covers Cost:", paymentCoversCost);

console.log("Type of totalCost:", typeof totalCost);
console.log("Type of studentName:", typeof studentName);
console.log("Type of paymentcheck:", typeof paymentCoversCost);

console .log("Quantity at leaest 2 AND payment covers cost:", quantity >= 2 && paymentCoversCost);

            for(let number = 1; number <= 10; number++) {
                console.log(number);
            }
            for(let number = 3; number <= 12; number += 3) {
                console.log(number);
                for(let countdown = 3; countdown >= 1; countdown--) {
                    console.log(countdown);
                }
                console.log("Finished");
              
                for(let number = 1; number <= 6; number++) {
                    if(number < 4) {
                        console.log("Small: " + number);
                    } else {
                        console.log("Large: " + number);
                    }
                }
            }

            for(let multiplier = 1; multiplier <= 10; multiplier++) {
            let result = 5 * multiplier;
            console.log("5 x " + multiplier + " = " + result);
            if(result >= 25) {
                console.log("5 x " + multiplier + " = " + result + " is at least 25!");
            }
         }
         function calculateTotalCost(unitPrice, quantity) {
        console.log(unitPrice * quantity);
         }
         calculateTotalCost(4000, 3);
        
        const prices = [2000, 3500, 1000, 5000];
        console.log(prices[0]); 
        console.log(prices[3]);
        console.log(prices.length);
        prices[1] = 4000; // Change 3500 to 4000
        console.log(prices[1]); 
1. Create products with Book, Pen and Ruler. Print the first and last products.
2. Add Bag with push, replace Pen with Pencil, then remove the last item using pop. Print the removed value and final array.
3. For prices = [2000, 3500, 1000, 5000], calculate the total with a loop.
4. Count prices that are at least 3000.
5. Change the project marks to [45, 50, 90, 35]. Predict its total, average and pass count before running it.
  
const products = ["Book", "Pen", "Ruler"];
console.log(products[0]); // Book
console.log(products[2]); // Ruler
products.push("Bag");
products[1] = "Pencil";

const removedItem = products.pop();
console.log("Removed Item:", removedItem);
console.log("Final Products Array:", products);



 
const prices = [2000, 3500, 1000, 5000];
let totalPrice = 0;
for(let i = 0; i < prices.length; i++) {
    totalPrice += prices[i];
}



console.log("Total Price:", totalPrice);

let count = 0;
for(let i = 0; i < prices.length; i++) {
    if(prices[i] >= 3000) {
        count++;
    }
}
console.log("Count of Prices >= 3000:", count);

const projectMarks = [45, 50, 90, 35];
let total = 0;
let passCount = 0;
for(let i = 0; i < projectMarks.length; i++) {
    total += projectMarks[i];
    if(projectMarks[i] >= 50) {
        passCount++;
    }
}
const average = total / projectMarks.length;
console.log("Total:", total);
console.log("Average:", average);
console.log("Pass Count:", passCount);


function countFullyPaid(payments, fee) {
    let count = 0;
    for(let i = 0; i < payments.length; i++) {
        if(payments[i] >= fee) {
            count++;
        }
    }
    return count;
}

// Test cases
console.log(countFullyPaid([500000, 350000, 650000, 0], 500000)); // Expected: 2
console.log(countFullyPaid([], 500000)); // Expected: 0

// Explanation:
// Counting involves determining how many items in a dataset meet a specific criterion.
// Summing involves adding up the values of items in a dataset.
// In this case, counting fully paid payments means counting how many payments are greater than or equal to the fee,
// while summing would involve adding up the actual payment amounts.