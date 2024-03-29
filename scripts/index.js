// const Selection = {
//     "selection" : [
//         {"name": "Search","type":"dropdown", "items": [
//             "Linear Search",
//             "Binary Search"
//         ]},
//         {"name": "Sort", "type":"dropdown", "items": [
//             "Bubble Sort",
//             "Insertion Sort",
//             "Selection Sort",
//             "Merge Sort"
//         ]}
//     ]
// }

const Selection = {
  selection: [
    { name: "Search", website: "./Search/index.html" },
    { name: "Sort", website: "./Sort/index.html" },
  ],
};

function selectionSetup() {
  // const SelectionDOM = document.getElementById("selection")
  // for(let i in Selection.selection){
  //     console.log(Selection.selection[i])
  //     const SelectionIndexDOM = document.createElement('button')
  //     SelectionIndexDOM.textContent = Selection.selection[i].name
  //     SelectionIndexDOM.id = `selection-choice-${Selection.selection[i].name}`
  //     SelectionIndexDOM.className = 'selection-dropdown'
  //     SelectionIndexDOM.addEventListener('click', function() {
  //         window.open(`${Selection.selection[i].website}`, "_self") //"_self" opens the site in the same tab
  //         // window.open(`${Selection.selection[i].website}`, "_self")
  //     })
  //     SelectionDOM.appendChild(SelectionIndexDOM)
  // }

  const SelectionDiv = document.getElementById("selection");
  for (let i in Selection.selection) {
    console.log(Selection.selection[i]);
    const SelectionIndexDOM = document.createElement("div");
    SelectionIndexDOM.id = `selection-div-${Selection.selection[i].name}`;
    SelectionIndexDOM.className = "selection-choice";
    SelectionIndexDOM.addEventListener("click", function () {
      window.open(`${Selection.selection[i].website}`, "_self");
    });

    const SelectionTextDOM = document.createElement("p");
    SelectionTextDOM.id = `selection-text-${Selection.selection[i].name}`;
    SelectionTextDOM.className = "selection-choice-text";
    SelectionTextDOM.textContent = Selection.selection[i].name;
    SelectionIndexDOM.appendChild(SelectionTextDOM);

    SelectionDiv.appendChild(SelectionIndexDOM);
  }
}

selectionSetup();
