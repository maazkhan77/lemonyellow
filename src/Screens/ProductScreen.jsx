import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";
import productData from "../products.json";
import Form from "react-bootstrap/Form";
import RadioButtonGroup from "../Components/RadioButton";

let { products } = productData;

const ProductScreen = () => {
  const [data, setData] = useState(products);
  const [category, setCategory] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const makeCategoryOptions = () => {
    let categoryOptions = [];
    categoryOptions.push("all");
    products.forEach((item) => {
      if (!categoryOptions.includes(item.category)) {
        categoryOptions.push(item.category);
      }
    });
    setCategoryOptions(categoryOptions);
    setCategory(categoryOptions[0]);
  };

  useEffect(() => {
    makeCategoryOptions();
  }, []);

  const handleCategory = (value) => {
    if (value === "all") {
      setCategory(value);
      setData(products);
      return;
    }
    let filteredData = products.filter((product) => product.category === value);
    setData(filteredData);
    setCategory(value);
  };

  const handleOptionChange = (event) => {
    let value = event.target.value;
    setSelectedOption(value);
    let sortedData = data.sort((a, b) =>
      value === "low" ? a.price - b.price : b.price - a.price
    );
    setData(sortedData);
  };

  const radioOptions = [
    { label: "Low to High", value: "low" },
    { label: "High to Low", value: "High" },
  ];

  return (
    <Container>
      <h2 style={{ textAlign: "center", marginTop: "15px" }}>Product List</h2>
      <div className="d-flex flex-column">
        <div className="d-flex" style={{ gap: "30px" }}>
          <Form.Label>Category</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={category}
            onChange={(e) => handleCategory(e.target.value)}
            className="w-auto"
          >
            {categoryOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="d-flex gap-5">
          <span>Price - </span>
          <RadioButtonGroup
            options={radioOptions}
            selectedOption={selectedOption}
            onChange={handleOptionChange}
          />
        </div>
      </div>
      <Row>
        {data.map((product) => (
          <Col sm={1} md={4} key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductScreen;
