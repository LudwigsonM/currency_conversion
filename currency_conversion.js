const usd = 1000    
const conversionRate = 128.73

function calculateConvert (currency, conversionRate) {
    const convert = currency * conversionRate;
    return convert
}

console.log(calculateConvert(usd, conversionRate))
const result = calculateConvert(usd, conversionRate)
console.log(`${usd.toFixed(2)} in USD is $${result.toFixed(2)} JPN YEN`)

console.log('                                                      ')
const Rate = calculateConvert(usd, conversionRate)

// const Pound = calculatePound(usd, Rate)

console.log('USD:                  ', usd.toFixed(0));
console.log('Rate'                  ,              conversionRate)
console.log('____________________________________________________',)
console.log('Conversion:             ',Rate.toFixed(0))
// console.log('Pound:                ',Pound.toFixed(5))
