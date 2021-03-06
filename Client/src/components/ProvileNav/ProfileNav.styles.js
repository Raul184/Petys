import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideNav = styled.ul`
  list-style: none;
`;

export const List = styled.li`
  margin: 1rem 0;
  border-left: 0 solid #fff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  :hover {
    border-left: 4px solid #fff !important;
  }
`;

export const Links = styled(Link)`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1.3rem;
  text-decoration: none;
  border-bottom: 1px solid #fff;
  padding-bottom: 1rem;
  margin: 2rem 2rem 0rem 2rem;
  svg {
    height: 2rem;
    width: 2rem;
    fill: #f7f7f7;
    margin-right: 2rem;
  }
  :visited {
    padding: 1rem 4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 400;
    text-decoration: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  :hover {
    -webkit-transform: translateX(3px);
    transform: translateX(3px);
  }
`;
