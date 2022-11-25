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
    "selection": [
        {"name": "Search", "website": "./Search"},
        {"name": "Sort", "website": "./Sort"}
    ]
}

function selectionSetup() {
    const SelectionDOM = document.getElementById("selection")
    for(let i in Selection.selection){
        console.log(Selection.selection[i])
        const SelectionIndexDOM = document.createElement('button')
        SelectionIndexDOM.textContent = Selection.selection[i].name
        SelectionIndexDOM.id = `selection-choice-${Selection.selection[i].name}`
        SelectionIndexDOM.className = 'selection-dropdown'
        SelectionIndexDOM.addEventListener('click', function() {
            
        })
        SelectionDOM.appendChild(SelectionIndexDOM)
    }
}

selectionSetup()