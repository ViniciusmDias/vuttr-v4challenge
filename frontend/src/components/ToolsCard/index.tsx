import React from 'react';
import { FiX } from 'react-icons/fi';
import api from '../../services/api';
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

const ToolsCard: React.FC<ToolsCardProps> = ({ toolDetail }) => {
  async function handleDeleteTool(id: number) {
    try {
      await api.delete(`/tools/${id}`);
    } catch (err) {
      alert('Erro ao deletar a ferramenta, tente novamente.');
    }
  }

  return (
    <Card key={toolDetail.id}>
      <header>
        <a href="/">
          <h3>{toolDetail.title}</h3>
        </a>
        <Button
          type="submit"
          onClick={() => {
            if (window.confirm('Are you sure to remove tool?')) {
              handleDeleteTool(toolDetail.id);
            }
          }}
          className="remove"
        >
          <FiX size={20} />
          remove
        </Button>
      </header>
      <p>{toolDetail.description}</p>
      <strong>{toolDetail.tags}</strong>
    </Card>
  );
};

export default ToolsCard;
