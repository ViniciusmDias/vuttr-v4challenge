import React, { useEffect, useState, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import Loading from '../../components/Loading';
import ToolsCard, { toolsProps } from '../../components/ToolsCard';
import Button from '../../components/Button';
import api from '../../services/api';
import Modal from '../../components/Modal';

import { Container, Header, SearchBar, ListTools } from './styles';

const Home: React.FC = () => {
  const [toolsData, setToolsData] = useState<toolsProps[]>([]);
  const [checkboxSelected, setCheckboxSelected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [addFormIsOpen, setAddFormIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null as any);

  useEffect(() => {
    setLoading(true);
    api.get('/tools').then((response) => {
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

  function handleToggleForm() {
    if (!addFormIsOpen) {
      containerRef.current.style.opacity = '1';
      containerRef.current.style.visibility = 'visible';
      return setAddFormIsOpen(!addFormIsOpen);
    }
    containerRef.current.style.opacity = '0';
    containerRef.current.style.visibility = 'hidden';

    return setAddFormIsOpen(!addFormIsOpen);
  }

  return (
    <>
      <Modal
        handleToggleForm={handleToggleForm}
        toolsData={toolsData}
        setToolsData={setToolsData}
        containerRef={containerRef}
      />
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
          <Button type="button" onClick={handleToggleForm}>
            <MdAdd size={28} />
            Add
          </Button>
        </Header>
        <ListTools>
          {toolsData.length === 0 && (
            <p>Nenhuma nenhuma ferramenta cadastrada</p>
          )}
          {loading ? (
            <Loading />
          ) : (
            toolsData.map((tool) => (
              <ToolsCard
                key={tool.id}
                toolDetail={tool}
                toolsData={toolsData}
                setToolsData={setToolsData}
              />
            ))
          )}
        </ListTools>
      </Container>
    </>
  );
};
export default Home;
