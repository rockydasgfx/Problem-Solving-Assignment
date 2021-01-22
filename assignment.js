// KILOMETER TO METER
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}

// END KILOMETER TO METER

// BUDGET CALCULATOR
function budgetCalculator(watchInput, phoneInput, laptopInput) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;
    var watchTotal = watchInput * watchPrice;
    var phoneTotal = phoneInput * phonePrice;
    var laptopTotal = laptopInput * laptopPrice; 
    var total = watchTotal + phoneTotal + laptopTotal;
    return total;
}

// END BUDGET CALCULATOR
// HOTEL COST
function hotelCost(n) {
    var taka;
    if (n <= 10 ) {
        taka = n * 100;
    }
    else if (n <= 20 ) {
        taka = n * 80;
    }
    else if (n => 21 ) {
        taka =n * 50;
    }
    return taka;

}

// END HOTEL COST
// MAGA FRIEND
function magaFriend() {
    
}
// END MAGA FRIEND
