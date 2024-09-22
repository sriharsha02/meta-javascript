function calculatePrices(includeTax) {
  const dishes = [
    { dish: "Italian pasta", price: 9.55 },
    { dish: "Rice with veggies", price: 8.65 },
    { dish: "Chicken with potatoes", price: 15.55 },
    { dish: "Vegetarian Pizza Price", price: 6.45 },
  ];
  let taxRate = 1.2;
  dishes.forEach((item) => {
    let finalPrice = includeTax ? item.price : item.price / taxRate;
    console.log(`${item.dish}, ${finalPrice.toFixed(2)}`);
  });
}
calculatePrices(true);
calculatePrices(false);
