import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 260px;
    background: var(--e-global-color-secondary);
    padding: 8px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    position: absolute;
    bottom: calc(100% + 6px);
    left: 60%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: var(--e-global-color-secondary) transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
