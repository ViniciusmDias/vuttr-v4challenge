import React, { FormEvent, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import api from '../../services/api';
import Button from '../Button';
import Tooltip from '../Tooltip';
import { toolsProps } from '../ToolsCard';
import { ModalContainer, Form, Error } from './styles';
import { useToast } from '../../hooks/toast';

interface modalProps {
  handleToggleForm: Function;
  toolsData: toolsProps[];
  setToolsData: Function;
  containerRef?: React.MutableRefObject<HTMLDivElement>;
}

const Modal: React.FC<modalProps> = ({
  handleToggleForm,
  toolsData,
  setToolsData,
  containerRef,
}) => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [inputError, setInputError] = useState('');
  const { addToast } = useToast();

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

      const toolAdded = response.data;

      setToolsData([...toolsData, toolAdded]);
      setTitle('');
      setLink('');
      setDescription('');
      setTags('');
      handleToggleForm();

      addToast({
        type: 'success',
        title: 'Tool added',
        description:
          'You added a new tool and it moved to the bottom of the list',
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ModalContainer ref={containerRef} data-testid="modal-container">
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
            required
          />
        </label>
        <label htmlFor="link">
          Tool Link (*required)
          <input
            type="url"
            name="link"
            pattern="https://.*"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
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
          <Tooltip title="Each tag must be separated by space" />
          <input
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            type="text"
            required
          />
        </label>
        {inputError && <Error>{inputError}</Error>}

        <div className="buttons">
          <Button type="submit">Add tool</Button>
          <Button onClick={() => handleToggleForm()}>Cancel</Button>
        </div>
      </Form>
    </ModalContainer>
  );
};
export default Modal;
