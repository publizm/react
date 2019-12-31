import React, { useState } from 'react';

export const useTabs = (initailTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initailTab);

  if (!allTabs || !Array.isArray(allTabs)) return;

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

// 사용예시
// const content = [
//   {
//     tab: 'Section 1',
//     content: "I'm the content of the Section 1",
//   },
//   {
//     tab: 'Section 2',
//     content: "I'm the content of the Section 2",
//   },
//   {
//     tab: 'Section 3',
//     content: "I'm the content of the Section 3",
//   },
// ];
// export default function Custom() {
//   const { currentItem, changeItem } = useTabs(0, content);
//   return (
//     <>
//       <div>
//         {content.map((section, index) => <button key={uuid.v4()} onClick={() => changeItem(index)}>{section.tab}</button>)}
//       </div>
//       <div>
//         {currentItem.content}
//       </div>
//     </>
//   );
// }
