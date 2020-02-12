import React, { useEffect } from "react";
import styled from "styled-components";
import { api } from "./api";
import { GlobalStyle } from "./styles/global-styles";
import SearchView from "./components/SearchView";

const HeaderTitle = styled.div`
  margin-top: 30vh;
  font-size: 4rem;
  text-align: center;
`;

const SearchContent = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
`;

const App = () => {
  useEffect(() => {
    getSummonerByName("상산조자룡이다");
  }, []);

  const getSummonerByName = async (summonerName: string) => {
    const res = await api.getSummonerByName(summonerName);
    console.log(res);
  };

  return (
    <>
      <GlobalStyle />
      <HeaderTitle>DEATH NOTE . GG</HeaderTitle>
      <SearchContent>
        <SearchView />
      </SearchContent>
    </>
  );
};

export default App;
