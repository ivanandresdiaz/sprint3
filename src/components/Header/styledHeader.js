import styled from 'styled-components';

export const DivContainerHeader = styled.div`
display: flex;
justify-content:space-around;
width:100%;
height:60px;
color: blue;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

`;
export const HeaderNav = styled.header`
display: flex;
justify-content:space-around;
align-items:center;
width: 100%;
height: 60px;
position: fixed;
top: 0;
left: 0;
z-index: 1000;
background-color:#262335;

a{ 
  color:#615F67;
  text-decoration:none;
  font-size:2.5rem
}
a:hover{
  color:white;
}
`;
export const DivItemNav = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
 p{ 
  color:#615F67;
  text-decoration:none;
  font-size:2.5rem
}
p:hover{
  color:white;
}
`;
