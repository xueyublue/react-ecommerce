import styled from "styled-components";
import NavBar from "../components/NavBar";
import Announcement from "./../components/Announcement";
import Footer from "./../components/Footer";
import Products from "./../components/Products";
import Newsletter from "./../components/Newsletter";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const Title = styled.h1`
  margin: 20px;
`;

const Filter = styled.div``;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const Select = styled.select`
  padding: 10px;
  margin-left: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <NavBar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Product:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
