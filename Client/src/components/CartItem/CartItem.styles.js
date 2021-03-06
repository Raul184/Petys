import styled from 'styled-components';

export const Cont = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  color: #fff;
`;

export const Product = styled.section`
  flex: 4;
  display: flex;
  align-items: center;
`;
export const ContImg = styled.div`
  width: 60%;
  margin-right: 1rem;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border: 1px solid #fff;
  border-radius: 10px;
`;

export const ImgSeller = styled.img`
  width: 30%;
  height: auto;
  border-radius: 50%;
  border: 1px solid #fff;
`;

export const Desc = styled.section`
  width: 40%;
  text-align: center;
`;

export const Text = styled.p`
  text-align: center;
  font-size; 1rem;
  margin-top: 0;
`;

export const Price = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Remove = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
