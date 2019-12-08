// high order function
const getPrice = percent => price => (1 - percent) * price;
const tenpercentOff = getPrice(0.1);
const twentyOff = getPrice(0.2); // price 매개변수를 받지 않는 getPrice를 갖는다.

const price = tenpercentOff(10000);
const price2 = twentyOff(10000);

// 함수를 2번쓰는데 첫번째 함수를 호출시 percent로 매개변수가 들어가고 2번째 호출시에는 인수가 price로 들어가며 호출시킨다.