// promise의 비동기처리
const after1 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
const after2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));
const after3 = new Promise(resolve => setTimeout(() => resolve(3), 3000));

const main = async () => {
  const tasks = [after3, after2, after1]; // promise가 배열로 표현한 형태

  // 잘못된 예제(절대 금지)
  // 하나의 반복문은 await을 기다리지 않고 돈다.
  // 비동기 프로세스에 for.Each을 돌리면 안된다.
  tasks.forEach(async task => console.log(await task));

  // 올바른 예제
  // for ... of - tasks는 배열 task는 변수
  // 첫번째 반복문이 완료 되고 두번째 반복문이 도는 식....
  for (const task of tasks) {
    console.log(await task);
  }
};

main();