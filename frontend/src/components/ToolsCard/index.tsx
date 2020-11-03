import React from 'react';
import { FiX } from 'react-icons/fi';
import Button from '../Button';
import { Card } from './styles';

const ToolsCard: React.FC = () => (
  <Card>
    <header>
      <a href="/">
        <h3>Notion</h3>
      </a>
      <Button type="submit" className="remove">
        <FiX size={20} />
        remove
      </Button>
    </header>
    <p>
      All in one tool to organize teams and ideas. Write, plan, collaborate, and
      get organized.
    </p>
    <strong>#organization #planning #collaboration #writing #calendar</strong>
  </Card>
);

export default ToolsCard;
