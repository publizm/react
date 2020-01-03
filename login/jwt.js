const jwt = require('jsonwebtoken');
const token = jwt.sign({ name: 'react' }, 'key'); // 토큰을 만든다.
try {
  const decoded = jwt.verify(token, 'key');
  console.log(decoded);
} catch (err) {
  // err
  console.error(err);
}
