const products = [
  { id: 1, name: "Product A", price: 20, category: "Electronics" },
  { id: 2, name: "Product B", price: 30, category: "Clothing" },
  { id: 3, name: "Product C", price: 15, category: "Electronics" },
  { id: 4, name: "Product D", price: 25, category: "Clothing" },
  { id: 5, name: "Product E", price: 50, category: "Electronics" },
  { id: 6, name: "Product F", price: 40, category: "Electronics" },
];

const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];
function App() {
  return (
    <div>
      <h2>Rendering Lists and conditional operators</h2>
      <h5>
        Question 1: How does the map function work in React for rendering lists?
        Can you provide an example?
      </h5>
      {/*
        - Commonly used to iterate through an array and render components dynamically.
        - It allows you to create a new array of React elements based on the original array. 
        */}
      <ul>
        {products.map((product) => {
          return (
            <div>
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price} - Category:{" "}
                {product.category}
              </li>
            </div>
          );
        })}
      </ul>
      <h5>Question 2:How can you filter products with a specific category?</h5>
      <ul>
        {products
          .filter((product) => product.category === "Electronics")
          .map((product) => {
            return (
              <div>
                <li>
                  <strong>{product.name}</strong> - ${product.price} - Category:{" "}
                  {product.category}
                </li>
              </div>
            );
          })}
      </ul>
      <h5>
        Question 3:How can you render a summary of total prices for products?
      </h5>
      <div>
        <p>
          Total Price Summary: $
          {products.reduce((acc, product) => {
            return acc + product.price;
          }, 0)}
        </p>
      </div>
      <h5>
        Question 4: Add discountedPrice key with 10% discount to all the
        products with price more than $20 and render it.
      </h5>
      {products
        .filter((product) => {
          return product.price > 20;
        })
        .map((product) => {
          return {
            ...product,
            discountedPrice: product.price * 0.1,
          };
        })
        .map((product) => {
          return (
            <div>
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.discountedPrice} -
                Discounted from:
                {product.price}
              </li>
            </div>
          );
        })}

      <h5>
        Question 5: How can you filter and render unique elements from an array
        using filter in React?
      </h5>
      {names
        .filter((name, index) => {
          return names.indexOf(name) === index;
        })
        .map((name) => {
          return <li>{name}</li>;
        })}
      {/* Conditional Operators */}

      <h5>Difference between && vs ||</h5>
      <LogicalAnd />
      <LogicalOr />

      <h5>Difference between .? and ??</h5>
      <OptionalChaining />
      <NullishCoalescing />
    </div>
  );
}

const LogicalAnd = () => {
  let x = 10;
  let y = 5;
  if (x > 0 && y > 0) {
    return <span>Both are greater than 0 </span>;
  } else {
    return <></>;
  }
};

const LogicalOr = () => {
  let isSunny = true;
  let isRaining = false;
  if (isRaining || isSunny) {
    return <span>It's either raining or sunny or both</span>;
  } else {
    return <></>;
  }
};

const OptionalChaining = () => {
  const user = {
    name: "Sri Harsha",
    address: {
      city: " Railway Koduru",
    },
  };
  return <p>{user?.address?.city}</p>;
};

const NullishCoalescing = () => {
  let userInput = null;
  let defaultValue = "Hello, Default value!";

  return <p>{userInput ?? defaultValue}</p>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
