let count1 = 500;
let count2 = 300;
let count3 = 95;

function followersCountFn() {
  count1 += 1;
  document.getElementById("followersCount").innerText = count1;
}
const timeElem = document.querySelector('[data-testid= "test-user-time"]');
function updateTime() {
    timeElem.textContent = `Current Time(Ms): ${Date.now()}`
}
updateTime();
setInterval(updateTime, 1000);


const Avatar = document.getElementById("user-avatar");
const avatarUrl = "https://i.postimg.cc/rm76jjjv/1000975247.jpg";
Avatar.src = avatarUrl;


