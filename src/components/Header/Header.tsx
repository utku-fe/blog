import { FC } from "react";
import { StyledHeaderContainer } from "./Header.styled";

const Header: FC = () => {
  return (
    <StyledHeaderContainer>
      <h1>header</h1>
        <ul>
            <li>utku</li>
            <li>Writings</li>
            <li>LinkedIn</li>
            <li>Github</li>
            <li>email</li>
        </ul>
    </StyledHeaderContainer>
  );
};
export default Header;
