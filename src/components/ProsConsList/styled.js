import styled from "styled-components";

const ItemsWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
`;

const Items = styled.div`
  width: 45%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &:first-child {
    border-right: 1px solid #858585;
  }
`;

const Input = styled.input`
  padding: 4px 12px;
  border-radius: 6px;
  margin-left: 6px;
  transition: all 0.1s linear;
  border: none;
  width: 90%;
  display: block;
  box-sizing: border-box;
  &:focus {
    outline: none;
    box-shadow: 0px 2px 5px 2px rgba(0, 0, 0, 0.1);
  }
`;

const Ol = styled.ol`
  margin: 30px 6px 30px 0;
  font-weight: 600;
  max-height: 400px;
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.3);
    background-color: #858585;
  }
`;

const Li = styled.li`
  margin: 5px 0 5px 0;
`;

const Title = styled.p`
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid #858585;
  font-weight: 600;
`;

export default { ItemsWrapper, Input, Items, Ol, Li, Title };
