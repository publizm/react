import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/StyledButtons';
import Dialog from './components/Dialog';

// const Circle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background: ${props => props.color};
//   border-radius: 50%;

//   ${props =>
//     props.huge &&
//     css`
//       width: 10rem;
//       height: 10rem;
//     `}
// `;

const AppBlock = styled.div`
  width: 512px;
  margin: 4rem auto 0;
  border: 1px solid black;
  padding: 1rem;
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595',
};

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const App = () => {
  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    console.log('확인');
    setDialog(false);
  };

  const onCancel = () => {
    console.log('취소');
    setDialog(false);
  };

  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        {/* <Circle color="blue" huge /> */}
        <ButtonGroup>
          <Button>버튼</Button>
          <Button color="pink">버튼</Button>
          <Button color="gray">버튼</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button size="large">버튼</Button>
          <Button color="pink">버튼</Button>
          <Button size="small" color="gray">
            버튼
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button outline size="large">
            버튼
          </Button>
          <Button outline color="pink">
            버튼
          </Button>
          <Button outline size="small" color="gray">
            버튼
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button size="large" fullWidth>
            버튼
          </Button>
          <Button color="pink" fullWidth>
            버튼
          </Button>
          <Button size="small" color="gray" fullWidth onClick={onClick}>
            삭제
          </Button>
        </ButtonGroup>
      </AppBlock>
      <Dialog
        title="정말로 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        visible={dialog}
        onConfirm={onConfirm}
        onCancel={onCancel}
      >
        데이터를 정말로 삭제하시겠습니까?
      </Dialog>
    </ThemeProvider>
  );
};

export default App;
