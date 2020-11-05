import React from 'react';
import { FiX } from 'react-icons/fi';
import api from '../../services/api';
import Button from '../Button';
import { Card } from './styles';
import { useToast } from '../../hooks/toast';

export interface toolsProps {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: [prop: string];
}

export interface ToolsCardProps {
  toolDetail: toolsProps;
  tools: toolsProps[];
  setTools: Function;
}

const ToolsCard: React.FC<ToolsCardProps> = ({
  toolDetail,
  tools,
  setTools,
}) => {
  const { addToast } = useToast();

  async function handleDeleteTool(id: number) {
    try {
      await api.delete(`/tools/${id}`);
      setTools(tools.filter((tool) => tool.id !== id));
      addToast({
        type: 'success',
        title: 'Tool deleted',
        description: 'You deleted the tool',
      });
    } catch (err) {
      alert('Erro ao deletar a ferramenta, tente novamente.');
    }
  }

  return (
    <Card data-testid="container-tools-card" key={toolDetail.id}>
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
          datatest-id="remove-tool"
        >
          <FiX size={20} />
          remove
        </Button>
      </header>
      <p>{toolDetail.description}</p>
      <div>
        {toolDetail.tags &&
          toolDetail.tags.map((item) => <strong key={item}>#{item} </strong>)}
      </div>
    </Card>
  );
};

export default ToolsCard;
