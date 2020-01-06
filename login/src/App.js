import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SignOut from './SignOut';
import User from './User';
import { useAuthed } from './lib/hooks';

function AuthedRoute({ component: Component, ...rest }) {
  const isAuthed = useAuthed(); // 커스텀 훅
  // AuthedRoute 자체가 이미 path에 걸려서 들어온거기 때문에 따로 path를 검출해줄 필요가 없다
  // 리액트에서 component는 대문자로 받아야되기 때문에 리네이밍해준다.
  // ...rest는 기본적인 라우트에 설정된 값을 받아오기 위해 사용
  return (
    <Route
      {...rest}
      // 선택적 렌더링하기 위한 Route의 내장되어있는 메소드
      // 해당 props는 AuthedRoute가 가지고 있는 props이다.
      render={props =>
        isAuthed ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
        )
      }
    />
  );
}

function AuthedRedirect({ component: Component, ...rest }) {
  const isAuthed = useAuthed(); // 커스텀 훅
  // AuthedRoute 자체가 이미 path에 걸려서 들어온거기 때문에 따로 path를 검출해줄 필요가 없다
  // 리액트에서 component는 대문자로 받아야되기 때문에 리네이밍해준다.
  // ...rest는 기본적인 라우트에 설정된 값을 받아오기 위해 사용
  return (
    <Route
      {...rest}
      // 선택적 렌더링하기 위한 Route의 내장되어있는 메소드
      // 해당 props는 AuthedRoute가 가지고 있는 props이다.
      render={props =>
        isAuthed ? (
          // from은 이동된 페이지에서 뒤로가기시 현재 path로 이동하기 위해 사용
          <Redirect to={{ pathname: '/user', state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

function App() {
  // 최초 앱 실행시만 반영, 즉 쿠키값이 없데이트 되는지 알 수 없다.
  return (
    <Router>
      <Switch>
        <AuthedRedirect path="/signin" component={SignIn} />
        <AuthedRedirect path="/signup" component={SignUp} />
        <Route path="/signout" component={SignOut} />
        {/* 만약 리뉴얼되기 전 페이지로 들어올 때 리다이렉션
          <Redirect path="/old" to={{ pathname: '/new' }} />
        */}
        <AuthedRoute path="/user" component={User} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
