import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Item from "./Item";
import Pages from "./Pages";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products?limit=100");
    const data = await response.json();
    setProducts(data.products);
    console.log(data.products);
  };

  useEffect(() => {
    setFilteredProducts(
      products.slice(
        itemsPerPage * currentPage - itemsPerPage,
        currentPage * itemsPerPage
      )
    );
  }, [currentPage, products]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col text-center mb-5">
      <h1 className="text-4xl text-blue-400 my-9">PAGINATION</h1>
      <div className="p-2 flex flex-wrap gap-5 justify-center">
        {filteredProducts.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>

      <Pages
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        length={products.length}
      />
    </div>
  );
}
export default App;
