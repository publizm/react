import React, { useState, useEffect } from 'react';

export const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);

  const uptageTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };

  useEffect(() => {
    uptageTitle();
  }, [title]);

  return setTitle;
};

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// index
// export default function Custom() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/pages" component={Page} />
//         <Route path="/" component={Home} />
//       </Switch>
//     </Router>
//   );
// }

// Home.jsx
// import React from 'react';
// import { useTitle } from './CustomTitle';

// export default function Home() {
//   const titleUpdater = useTitle("Loading...");
//   setTimeout(() => titleUpdater("home"), 1000);

//   return (
//     <>
//       <div>홈입니다.</div>
//     </>
//   );
// }

// Page.jsx
// import React from 'react';
// import { useTitle } from './CustomTitle';

// export default function Page() {
//   const titleUpdater = useTitle("Loading...");
//   setTimeout(() => titleUpdater("page"), 1000);

//   return (
//     <>
//       <div>페이지입니다.</div>
//     </>
//   );
// }
