import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; 
  text-align: center;
  background: #260101;
  color: white;
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
