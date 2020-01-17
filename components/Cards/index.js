// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(res => console.log(res))
.catch(error => console.log(error));

let cardCon = document.querySelector('.cards-container')
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(res => cardCon.append(articleFunction(res.data.articles.javascript[0])))
.catch(error => console.log(error));



function articleFunction(createArticle){
    let mainCard = document.createElement('div');
    let title = document.createElement('div');
    let writer = document.createElement('div');
    let picContainer = document.createElement('div');
    let picture = document.createElement('img');
    let name = document.createElement('span');

    mainCard.append(title);
    mainCard.append(writer);
    writer.append(picContainer);
    picContainer.append(picture);
    picContainer.append(name);

    mainCard.classList.add('card');
    title.classList.add('headline');
    writer.classList.add('author');
    picContainer.classList.add('img-container');

    title.textContent = createArticle.headline;
    // writer.textContent = createArticle.authorName;
    picture.src = createArticle.authorPhoto;
    name.textContent = createArticle.authorName;

    return mainCard;
}
