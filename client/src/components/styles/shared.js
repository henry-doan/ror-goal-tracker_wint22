import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  height: 2.5rem; 
  text-align: center;
  background: #260101;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
`

export const MainButton = styled.button`
  border: 2px solid #88F2E8;
  background: none;
  font-size: 1rem;
  padding: 20px 30px;
  color: #88F2E8;
  margin: 20px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background: #88F2E8;
    color: white;
  }
`

export const HomeHeader = styled.div`
  background-image: linear-gradient(rgba(39, 89, 80, 0.85), rgba(38, 0, 0, 0.85)), url("https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80");
  height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

export const HomeHeaderTxt = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`


/* Color Theme Swatches in RGBA */
// .The-Black-and-Red-1-rgba { color: rgba(42, 140, 130, 1); }
// .The-Black-and-Red-2-rgba { color: rgba(65, 191, 178, 1); }
// .The-Black-and-Red-3-rgba { color: rgba(135, 242, 231, 1); }
// .The-Black-and-Red-4-rgba { color: rgba(39, 89, 80, 1); }
// .The-Black-and-Red-5-rgba { color: rgba(38, 0, 0, 1); }

export const MainCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
  height: 400px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    cursor: pointer;
    border: 5px solid #41BFB3;
  }
`

export const MainCardContainer = styled.div`
  padding: 2px 16px;
  text-align: center;
  color: #41BFB3;
`

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const CardCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 30%;
`

export const MainContainer = styled.div`
  padding: 100px 50px;
  margin-bottom: 100px;
`

export const CardImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const MainNavUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #275950;
  display: flex;
  flex-direction: row;
`

export const MainNavLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 40px 16px;
  text-decoration: none;
`

export const MainTable = styled.table`
  width: 100%;
  background: linear-gradient(to right, rgba(42, 140, 130, 1), rgba(38, 0, 0, 1));
  color: white;
`

export const MainTd = styled.td`
  padding: 8px;
  text-align: center;
  border-bottom: solid 1px rgba(255,255,255,0.1);
`

export const MainTh = styled.th`
  padding: 8px;
  font-size: 30px;
  background-color: rgba(38, 0, 0, 1);
`