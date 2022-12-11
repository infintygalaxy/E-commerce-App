import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI04Sxk57-BYD59gjAuwMH-ayxDnWki1l-yw&usqp=CAU"} alt="my logo img" />
      </NavLink>
      <NavBar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;
export default Header;