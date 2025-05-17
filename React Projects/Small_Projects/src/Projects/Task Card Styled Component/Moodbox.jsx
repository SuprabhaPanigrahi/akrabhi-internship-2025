import styled from "styled-components";

export const MoodBox = styled.div`
  margin: auto;
  padding: 30px;
  width: 250px;
  border-radius: 10px;
  background-color: ${props => props.bgColor || "#eee"};
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;
