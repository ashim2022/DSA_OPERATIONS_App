document.getElementById("check").addEventListener("click", handleClick);
function handleClick() {
  let n = document.getElementById("iV").value;
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    let rem = temp % 10;
    sum += rem ** 3;
    temp = parseInt(temp / 10);
  }
  if (sum == n) {
    console.log("true");
    let li = document.createElement("h1");
    let liTN = document.createTextNode(`${n} is an amstrong number`);
    li.appendChild(liTN);
    document.getElementById("list").appendChild(li);
  } else {
    console.log("false");
    let li = document.createElement("h4");
    let liTN = document.createTextNode(`${n} is not an amstrong number`);
    li.appendChild(liTN);
    document.getElementById("list").appendChild(li);
  }
}

document
  .getElementById("check4SumOfAllDigits")
  .addEventListener("click", handleClick2);
function handleClick2() {
  let n = document.getElementById("iV4SumOfAllDigits").value;
  let temp = n;
  let sum = 0;
  while (temp > 0) {
    let rem = temp % 10;
    sum += rem;
    temp = parseInt(temp / 10);
  }
  console.log(sum);
  //   let str = `<h1>individual sum of digits of ${n} is ${sum}</h1>`;
  //   document.getElementById("list4SumOfAllDigits").innerHTML = str;
  let li2 = document.createElement("h1");
  let li2TN = document.createTextNode(
    `individual sum of digits of ${n} is ${sum}`
  );
  li2.appendChild(li2TN);
  document.getElementById("list4SumOfAllDigits").appendChild(li2);
}
