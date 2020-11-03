import React from 'react';
import { FiX } from 'react-icons/fi';
import Button from '../Button';
import { Card } from './styles';

interface toolsProps {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: [prop: string];
}

interface ToolsCardProps {
  toolDetail: toolsProps;
}

const ToolsCard: React.FC<ToolsCardProps> = ({ toolDetail }) => (
  <Card key={toolDetail.id}>
    <header>
      <a href="/">
        <h3>{toolDetail.title}</h3>
      </a>
      <Button type="submit" className="remove">
        <FiX size={20} />
        remove
      </Button>
    </header>
    <p>{toolDetail.description}</p>
    <strong>{toolDetail.tags}</strong>
  </Card>
);

export default ToolsCard;
