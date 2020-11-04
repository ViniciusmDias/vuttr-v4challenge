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

const config = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': true,
    'Access-Control-Allow-Credentials': true,
    crossDomain: true,
  },
};

const Home: React.FC = () => {
  const [toolsData, setToolsData] = useState<toolsProps[]>([]);
  const [checkboxSelected, setCheckboxSelected] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get('/tools', config).then((response) => {
      setToolsData(response.data);
    });
    setLoading(false);
  }, []);

  async function handleSearchTool(value: string): Promise<void> {
    if (checkboxSelected) {
      try {
        const response = await api.get(`/tools/?tags_like=${value}`);

        setToolsData(response.data);
      } catch (err) {
        alert('Nenhuma ferramenta encontrada com essa tag, tente novamente.');
      }
    } else {
      try {
        const response = await api.get(`/tools/?q=${value}`);

        setToolsData(response.data);
      } catch (err) {
        alert('Nenhuma ferramenta encontrada nessa pesquisa, tente novamente.');
      }
    }
  }

  return (
    <Container>
      <Header>
        <h1>VUTTR</h1>
        <h2>Very Useful Tools to Remember</h2>
        <SearchBar>
          <input
            name="search"
            type="text"
            onChange={(event) => handleSearchTool(event.target.value)}
            placeholder="search"
          />
          <label htmlFor="check">
            search in tags only
            <input
              name="check"
              id="check"
              type="checkbox"
              onChange={() => setCheckboxSelected(!checkboxSelected)}
            />
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
