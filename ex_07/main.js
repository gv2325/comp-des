let form = document.querySelector('form');
let tweetInput = document.querySelector('input');
let submitTweetButton = document.querySelector('button');
let tweetContainer = document.querySelector('ul');
let tweetCount = document.querySelector('.tweet_count');

let count = 30;
tweetCount.innerText = count;

let tweets = {
    "tweetList": []
}

window.addEventListener('load', pageLoadFn)
submitTweetButton.addEventListener('click', addTweet);
tweetInput.addEventListener('keyup', updateTweetCount);

/*setTimeout(() => {
    localStorage.removeItem('tweets')
    console.log('localStorage cleared')*/

function pageLoadFn(event){
    if(localStorage.getItem('tweets') === null){
        return
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'))
        tweets.tweetList.forEach(displayTweet)
    }
}

function updateTweetCount(event){
    if(event.code == 'Backspace'){
        console.log('delete key pressed', event.code)
        count = count + 1
        tweetCount.innerText = count
    } else {
        count = count - 1
        tweetCount.innerText = count
    }

    if(count <= 5){
        tweetCount.style.color = 'red';
        tweetCount.style.fontWeight = 'bold';
    } else {
        tweetCount.style.color = 'black';
        tweetCount.style.fontWeight = 'normal';
    }
}

function addTweet(event){
    event.preventDefault();

    console.log('this works');
    let newTweet = tweetInput.value;

    tweetObject = {
        name : newTweet
    }

    let count = 30;
    tweetCount.innerText = 30;

    displayTweet(tweetObject);
    //tweet object to the array
    tweets.tweetList.push(tweetObject);
    // add tweet to local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));

}

function displayTweet(tweet){
    console.log(tweet.name)

    if(tweet == "") return null

    let account_name = 'Celeste Layne';
    let twitter_handle = '@Celbot';

    let newListItem = document.createElement('li');

    newListItem.textContent = `${account_name} ${twitter_handle} ${tweet.name}`;

    if(tweet.length > count){
        console.log('more than 30 characters')
    } else {
        tweetContainer.appendChild(newListItem);
    }

    form.reset();
}