import React, { useState } from 'react';
// import Button from './components/Button';
import Button2 from './components/Button2';
import { StyledButton, PrimaryStyledButton } from './components/StyledButton';
import './App.scss';
import { DatePicker, Button, Row, Col } from 'antd';

const colStyle = () => ({
  height: 50,
  backgroundColor: 'red',
  opacity: Math.round(Math.random() * 10) / 10,
});

function App() {
  const [active, setActive] = useState(false);

  return (
    <>
      <DatePicker />
      <span>span</span>
      <Button2 size="small" active={active} onActive={() => setActive(!active)}>
        hello world
      </Button2>
      <span>span</span>
      <Button2>hello world</Button2>
      <span>span</span>
      <Button2>hello world</Button2>
      <span>span</span>
      <Button2 size="large">hello world</Button2>

      <div className="App">
        <Row>
          <Col span={12} style={colStyle()} />
          <Col span={12} style={colStyle()} />
        </Row>
        <Row>
          <Col span={8} style={colStyle()} />
          <Col span={8} style={colStyle()} />
          <Col span={8} style={colStyle()} />
        </Row>
        <Row>
          <Col span={6} style={colStyle()} />
          <Col span={6} style={colStyle()} />
          <Col span={6} style={colStyle()} />
          <Col span={6} style={colStyle()} />
        </Row>
      </div>
    </>
    // <div className="App">
    //   <StyledButton as="a" href="/">
    //     버튼
    //   </StyledButton>
    //   <StyledButton primary>버튼</StyledButton>
    //   <PrimaryStyledButton>버튼</PrimaryStyledButton>
    // </div>
  );
}

export default App;
