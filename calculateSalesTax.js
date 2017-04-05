var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

//function to add two values
function add(a, b){
  return a + b;
}

// calculate the sales tax.
function salesTax(sum, rate){
  return sum * rate;
}
//obtain appropriate tax rate from a tax object and data object as parameters
function getTaxRate (data, taxData) {
  for(prop in taxData){
    if (prop === data.province)
      return taxData[prop];
  }
}

function calculateSalesTax (salesData, taxRates){
  //create empty resulting object
  var resultObj = {};
  //loop through each object in salesData array
  for(var obj of salesData){
    var companyName = obj['name'];
    //define name to be the name of the value of 'name' property in looped object
    var salesTotal, taxTotal;
    //create variable for properties of resulting object
    salesTotal = obj.sales.reduce(add,0);
    //calculate total sales of the object
    var regionTaxRate = getTaxRate(obj, taxRates);
    //obtain tax rate for the object looped
    taxTotal = salesTax(salesTotal, regionTaxRate);
    //calculate total sales tax for the object

    //if company does not exist in our resultObj,
    // create a new object with required return properties starting with value 0
    if(!resultObj[companyName]){
      resultObj[companyName] = {
        totalSales: 0,
        totalTaxes: 0
      }
    }
    //add the sales and tax totals to the object
    resultObj[companyName].totalSales += salesTotal;
    resultObj[companyName].totalTaxes += taxTotal;
  }
  return resultObj;
}
console.log(calculateSalesTax(companySalesData, salesTaxRates));



