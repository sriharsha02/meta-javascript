const target = document.querySelector("body");

function handleClick() {
  console.log("body clicked");
}

target.addEventListener("click", handleClick);

//adding event in html file

/*

<h1 onclick="handleClick2()">Example Domain</h1>

*/
function handleclick2() {
  console.log("heading clicked");
}

const target2 = addEventListener("click", handleclick2);
