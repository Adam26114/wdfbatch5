//UI

const minnum = document.querySelector('.mininumber'),
	maxnum = document.querySelector('.maxnumber'),
	getinput = document.querySelector('#guessnumber'),
	getbtn = document.querySelector('#btn'),
	message1 = document.querySelector('.message1'),
	message2 = document.querySelector('.message2'),
	getgame = document.querySelector('#game');

let min = 1,
	max = 10,
	gameleft = 3,
	winningnum = randomnum(min,max);

// console.log(winningnum);

minnum.textContent = min;
maxnum.innerText = max;

getbtn.addEventListener('click', function () {
	// console.log("hay");

	let guess = parseInt(getinput.value);
	// console.log(guess);
	// console.log(typeof guess);

	if (guess < min || guess > max || isNaN(guess)) {
		message2.textContent = `Please enter a number between ${min} to ${max}`;

		setmessage2(`Please Enter a number ${min} to ${max}`, "red");
	}

	if (guess === winningnum) {
		// Gameover WIN

		//disable getinput
		// getinput.disable = true;

		// getinput border color to green
		// getinput.style.borderColor = 'green';

		// message1
		// message1.textContent = `${winningnum} is correct !!!,You Won`;
		// message1.style.color = 'green';
		// setmessage1(`${winningnum} is correct!!!, You Won`,"green");

		// play again?
		// btn.value = 'Play Again';

		gameover(true,`${winningnum} is correct!!!, You Won`)

	} else {

		// Wrong number

		// gameleft--;
		gameleft -= 1;
		// console.log(gameleft);

		// Game over

		if (gameleft === 0) {
			// Gameover LOSE

            //console.log('Game Over');

            //disable getinput
			// getinput.disable = true;

			//getinput border color to red
			// getinput.style.borderColor = 'red';

            //message 2
			// message2.textContent = `Game Over,You Lost, The correct number is ${winningnum}`
			// message2.style.color = 'red';

			// setmessage1(`Game Over , You Lost ,The correct number is ${winningnum}`,"red")


            //play again ?
			// getbtn.value = 'Play Again';

			gameover(false,`Game Over , You Lost ,The correct number is ${winningnum}`)

		} else {
			// Game CONTINUE

			// getinput border color to red
			getinput.style.borderColor = 'red';

			// clear getinput vale
			getinput.value = '';

			//message2
			// message2.innerText = `${guess} is not correct , ${gameleft} guess left`;
			// message2.style.color = 'green';

			setmessage1(`${guess} is not correct , ${gameleft} guess left `," blue");
		}
	}
});

// Message 

function setmessage1(msg,color){
	message1.textContent = msg;
	message1.style.color = color;
}

function setmessage2(msg,color){
	message2.innerText = msg;
	message2.style.color = color;

	setTimeout(function () {
        message2.textContent = "";
    }, 2000);
}

// Gameover
function gameover(won,msg){

	let color;

	won === true ? color = 'green' : color = 'red';

	// getinput border color to green to red
	getinput.style.borderColor = color;

	// message1
	setmessage1(msg,color)

	// playagin ?
	getbtn.value = 'Play Again';

	// getbtn.className = 'btn playagin';
	getbtn.classList.add('playagain');
}

getgame.addEventListener('mouseup',(e)=>{

	// console.log(e.target);

	if(e.target.className === 'btn playagain'){
		// console.log('i am playagain');
		window.location.reload();
	}

});

function randomnum(minnum,maxnum){
											// 10 - 1  + 1
	let getrdm = Math.floor(Math.random() * (maxnum-maxnum) + 1);

	return getrdm;

}