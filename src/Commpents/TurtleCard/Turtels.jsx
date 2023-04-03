import { useState } from 'react';
import styled from 'styled-components';
import getData from '../data';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Card = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 4px;
  background-color:grey;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const ToppingsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ToppingButton = styled.button`
  background-color: #black;
  border: none;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #bbb;
  }
  &:disabled {
    background-color: #ddd;
    cursor: not-allowed;
  }
`;

const ToppingImg = styled.img`
  width: 50px;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

const Message = styled.p`
  color: #ff0000;
`;

const data = getData();

const Turtels = () => {
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleToppingClick = (topping) => {
    if (selectedToppings.includes(topping)) {
      alert(`You've already selected ${topping}!`);
    } else if (selectedToppings.length >= 5) {
      alert('You have reached the maximum number of toppings!');
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  return (
    <>
      <Wrapper>
        <CardsContainer>
          {data && data.map((turtle) => (
            <Card key={turtle.name}>
              <Image src={turtle.img} alt={turtle.name} />
              <Title>{turtle.name}</Title>
              <ToppingsWrapper>
                {turtle.pizzaToppings.map((topping) => (
                  <ToppingButton
                    key={topping.name}
                    onClick={() => handleToppingClick(topping.img)}
                    disabled={selectedToppings.includes(topping.img)}
                  >
                    {topping.name}
                  </ToppingButton>
                ))}
              </ToppingsWrapper>
            </Card>
          ))}
        </CardsContainer>
      </Wrapper>
      {selectedToppings.length > 0 && (
        <Wrapper>
          <Card>
            <Title>Your Pizza Order</Title>
            <ToppingsWrapper>
              {selectedToppings.map((topping) => (
                <ToppingImg key={topping} src ={topping}>
                </ToppingImg>
              ))}
            </ToppingsWrapper>
            {selectedToppings.length === 5 && (
              <Message>You have reached the maximum number of toppings!</Message>
            )}
          </Card>
        </Wrapper>
      )}
    </>
  );
};

export default Turtels;
