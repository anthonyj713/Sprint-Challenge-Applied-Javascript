// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
let info = {
    'date': 'SMARCH 28, 2019',
    'temp': '98°'
};


function Header(info) {
    let headerDiv = document.createElement('div');
    let date = document.createElement('span');
    let title = document.createElement('h1');
    let temp = document.createElement('span');

    headerDiv.append(date);
    headerDiv.append(title);
    headerDiv.append(temp);

    headerDiv.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = `SMARCH 28, 2019`;
    temp.textContent = `98°`;

    return headerDiv;
}

let headerComponent = document.querySelector('.header-container');
    headerComponent.append(Header(info));
