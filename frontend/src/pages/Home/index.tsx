import React, { FormEvent, useEffect, useState, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import Loading from '../../components/Loading';
import ToolsCard from '../../components/ToolsCard';
import api from '../../services/api';
import Button from '../../components/Button';

import {
  Container,
  Header,
  SearchBar,
  ListTools,
  Modal,
  Form,
  Error,
} from './styles';

interface toolsProps {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: [prop: string];
}

const Home: React.FC = () => {
  const [toolsData, setToolsData] = useState<toolsProps[]>([]);
  const [checkboxSelected, setCheckboxSelected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(false);

  // modal
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [inputError, setInputError] = useState('');
  const [tools, setTools] = useState<toolsProps[]>([]);
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

  async function handleToggleForm(event: any) {
    event.preventDefault();
    if (!form) {
      containerRef.current.style.opacity = '1';
      containerRef.current.style.visibility = 'visible';
      return setForm(!form);
    }
    containerRef.current.style.opacity = '0';
    containerRef.current.style.visibility = 'hidden';

    return setForm(!form);
  }

  // modal
  async function handleAddTool(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!title || !link || !tags) {
      setInputError('Fill the required values');
      return;
    }

    const tagsArray = tags.split(' ');

    try {
      const response = await api.post<toolsProps>('tools', {
        title,
        link,
        description,
        tags: tagsArray,
      });

      const responsetool = response.data;

      setTools([...tools, responsetool]);
      setTitle('');
      setLink('');
      setDescription('');
      setTags('');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Modal ref={containerRef}>
        <Form hasError={!!inputError} onSubmit={handleAddTool}>
          <div>
            <MdAdd size={24} color="#000" />
            <h3>Add new tool</h3>
          </div>

          <label htmlFor="name">
            Tool Name (*required)
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              name="name"
            />
          </label>
          <label htmlFor="link">
            Tool Link (*required)
            <input
              name="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </label>
          <label htmlFor="description">
            Tool Description
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </label>
          <label htmlFor="tags">
            Tags (*required)
            <input
              name="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              type="text"
            />
          </label>
          {inputError && <Error>{inputError}</Error>}

          <div className="buttons">
            <Button type="submit" test-id="submit-button">
              Add tool
            </Button>
            <Button onClick={handleToggleForm}>Cancel</Button>
          </div>
        </Form>
      </Modal>
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
          <button type="button" onClick={handleToggleForm}>
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
    </>
  );
};
export default Home;
