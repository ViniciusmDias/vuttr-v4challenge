import React from 'react';
import { FiX } from 'react-icons/fi';
import { MdAdd } from 'react-icons/md';
import Button from '../../components/Button';

import { Container, Title, Description, Search, Tools, Item } from './styles';

const Home: React.FC = () => (
  <Container>
    <Title>VUTTR</Title>
    <Description>Very Useful Tools to Remember</Description>

    <Search>
      <input name="search" type="text" placeholder="search" />
      <input name="check" id="check" type="checkbox" />
      <label htmlFor="check">search in tags only</label>
      <button type="button">
        <MdAdd size={28} color="#ffffff" />
        Add
      </button>
    </Search>

    <Tools data-testid="testtools">
      <Item>
        <a href="/">
          <h3>Notion</h3>
        </a>
        <Button type="submit" className="remove">
          <FiX size={20} />
          remove
        </Button>
        <div>
          <p>
            All in one tool to organize teams and ideas. Write, plan,
            collaborate, and get organized.
          </p>
          <strong>
            #organization #planning #collaboration #writing #calendar
          </strong>
        </div>
      </Item>
      <Item>
        <a href="/">
          <h3>Notion</h3>
        </a>
        <Button type="submit" className="remove">
          <FiX size={20} />
          remove
        </Button>
        <div>
          <p>
            All in one tool to organize teams and ideas. Write, plan,
            collaborate, and get organized.
          </p>
          <strong>
            #organization #planning #collaboration #writing #calendar
          </strong>
        </div>
      </Item>
      <Item>
        <a href="/">
          <h3>Notion</h3>
        </a>
        <Button type="submit" className="remove">
          <FiX size={20} />
          remove
        </Button>
        <div>
          <p>
            All in one tool to organize teams and ideas. Write, plan,
            collaborate, and get organized.
          </p>
          <strong>
            #organization #planning #collaboration #writing #calendar
          </strong>
        </div>
      </Item>
      <Item>
        <a href="/">
          <h3>Notion</h3>
        </a>
        <Button type="submit" className="remove">
          <FiX size={20} />
          remove
        </Button>
        <div>
          <p>
            All in one tool to organize teams and ideas. Write, plan,
            collaborate, and get organized.
          </p>
          <strong>
            #organization #planning #collaboration #writing #calendar
          </strong>
        </div>
      </Item>
    </Tools>
  </Container>
);

export default Home;
