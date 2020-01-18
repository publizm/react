import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from './StyledButtons';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(200px);
  }
`;

const Dim = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${fadeOut};
    `}
`;

const DialogBlock = styled.div`
  width: 350px;
  padding: 1.5rem;
  background: #fff;
  border-radius: 2px;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;

  ${props =>
    props.disappear &&
    css`
      animation-name: ${slideDown};
    `}

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: flex-end;
`;

const Dialog = ({
  title,
  children,
  confirmText,
  cancelText,
  visible,
  onCancel,
  onConfirm,
}) => {
  const [animate, setAnimate] = useState(false);
  const [localVisible, setLocalVisible] = useState(visible); // true에서 false를 전환하는 시점을 체크하기 위해서 만든 상태

  useEffect(() => {
    if (localVisible && !visible) {
      // 닫힐때
      setAnimate(true);
      // 초기화
      setTimeout(() => setAnimate(false), 250);
    }
    // 초기화
    setLocalVisible(visible);
  }, [localVisible, visible]);

  if (!localVisible && !animate) return null;

  return (
    <Dim disappear={!visible}>
      <DialogBlock disappear={!visible}>
        <h3>{title}</h3>
        <p>{children}</p>
        <ButtonGroup>
          <Button color="gray" onClick={onCancel}>
            {cancelText}
          </Button>
          <Button color="pink" onClick={onConfirm}>
            {confirmText}
          </Button>
        </ButtonGroup>
      </DialogBlock>
    </Dim>
  );
};

Dialog.defaultProps = {
  cancelText: '취소',
  confirmText: '확인',
};

export default Dialog;
