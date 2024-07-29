const imageCard = document.getElementById('imageCard');
const resultCard = document.getElementById('result-card');
const ratingResult = document.getElementById('rating-result');
const alertUpdatingResult = document.getElementById('updating-rating');

let capsRating = null;
alertUpdatingResult.style.display = 'none';

function selectRating(rating) {
   capsRating = rating;    
}

function submitRating() {
    if (capsRating !== null) {
        imageCard.style.display = "none";
        resultCard.style.display = "flex";
        ratingResult.innerHTML = `You selected ${capsRating} out of 5`;
    } else {
        alertUpdatingResult.style.display = 'flex';
        alertUpdatingResult.style.margin ="auto";
        alertUpdatingResult.innerHTML = `You need to rate us!`;
        setTimeout(() => {
            alertUpdatingResult.remove();
        }, 3000);
    }
}