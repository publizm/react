const listeners = document.querySelectorAll('[data-model]');

listeners.forEach(listener => {
  const name = listener.dataset.model; // dataset은 문법. 뒤에 model은 커스텀 data-이름
  listener.addEventListener('keyup', event => {
    state[name] = listener.value; // 변경될때마다 set 메소드가 실행된다.
  });
});

const render = () => {

}

const createState = state => {
  return new Proxy(state, { // new Proxy는 객체를 반환한다. 이때 state는 초기값
    set (target, property, value) {
      target[property] = value; // 변화가 있으면 새로운 value를 담는다.
      return true; // set에만 해당 return true가 없다면 proxy가 동작을 안한다. 해당하는 코드가 정상적으로 실행됬다는 것을 알리기 위해 콜백으로 return ture를 반환
    }
  })
}

const state = createState({
  name: 'publee',
  email: 'publizm@gmail.com'
});