import React from 'react';
import { MdAdd } from 'react-icons/md';
import ToolsCard from '../../components/ToolsCard';

import { Container, Header, SearchBar, ListTools } from './styles';

const Home: React.FC = () => (
  <Container>
    <Header>
      <h1>VUTTR</h1>
      <h2>Very Useful Tools to Remember</h2>
      <SearchBar>
        <input name="search" type="text" placeholder="search" />
        <label htmlFor="check">
          search in tags only
          <input name="check" id="check" type="checkbox" />
        </label>
      </SearchBar>
      <button type="button">
        <MdAdd size={28} color="#ffffff" />
        Add
      </button>
    </Header>
    <ListTools>
      <ToolsCard />
      <ToolsCard />
      <ToolsCard />
      <ToolsCard />
      <ToolsCard />
    </ListTools>
  </Container>
);

export default Home;
