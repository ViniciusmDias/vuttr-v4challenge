import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import Loading from '../../components/Loading';
import ToolsCard from '../../components/ToolsCard';
import api from '../../services/api';

import { Container, Header, SearchBar, ListTools } from './styles';

interface toolsProps {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: [prop: string];
}

const Home: React.FC = () => {
  const [toolsData, setToolsData] = useState<toolsProps[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get('/tools').then((response) => {
      setToolsData(response.data);
    });
    setLoading(false);
  }, []);

  return (
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
        {loading ? (
          <Loading />
        ) : (
          toolsData.map((tool) => <ToolsCard toolDetail={tool} />)
        )}
      </ListTools>
    </Container>
  );
};
export default Home;
