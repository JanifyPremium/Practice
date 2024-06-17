/*var arrTemp = [38,34,23,34,12,22];



function calculateAverage(array) {
    var total = 0;
    var count = 0;

    array.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}

console.log(calculateAverage(arrTemp));
*/
const init = () => {
	const luckyDipBtn = document.querySelector("#go");
	const saveBtn = document.querySelector("#saveBalls");
	const balls = document.querySelectorAll(".ball");
	let numbers = [];
	let lotto = [];
	const maxNum = 59;
	const totalBalls = 6;

	//Fill numbers array with numbers from 1 to 59
	for (i = 1; i < maxNum + 1; i++) {
		numbers = [...numbers, i];
	}

	saveBtn.addEventListener("click", () => {
		if (lotto.length > 0) downloadToFile(lotto);
	});

	luckyDipBtn.addEventListener("click", () => {
		luckyDipBtn.classList.add("hidden");
		saveBtn.classList.add("hidden");
		lotto = [];

		//Fill lotto array with unique numbers
		for (let i = 0; i < totalBalls; i++) {
			const number = numbers[Math.floor(Math.random() * numbers.length)];
			const numberExists = lotto.find((o) => o.number === number);

			if (!numberExists) {
				//Set colour based on the number range
				let colour = "";

				switch (true) {
					case number < 10:
						colour = "#F1F1F2";
						break;
					case number < 20:
						colour = "#2EAFFD";
						break;
					case number < 30:
						colour = "#EA6CE9";
						break;
					case number < 40:
						colour = "#6DCB56";
						break;
					case number < 50:
						colour = "#F3EF80";
						break;
					default:
						colour = "#BC84ED";
				}

				// fill lotto array with number and colour
				lotto = [...lotto, { number, colour }];
			} else {
				i--;
			}
		}
		lotto = lotto.sort((a, b) => a.number - b.number);
		displayResult(lotto, balls);
	});

	//Display 6 numbers with correct colours from lotto and colours array
	const displayResult = (lotto, balls) => {
		for (let i = 0; i < balls.length; i++) {
			balls[i].classList.remove("show");

			setTimeout(() => {
				balls[i].style.backgroundColor = lotto[i].colour;
				balls[i].querySelector("span").innerHTML = lotto[i].number;
				balls[i].classList.add("show");
			}, 500 * (i + 1));
		}

		setTimeout(() => {
			luckyDipBtn.classList.remove("hidden");
			saveBtn.classList.remove("hidden");
		}, 7000);
	};

	const downloadToFile = (lottoData) => {
		const a = document.createElement("a");
		let numbersArr = [];

		for (let data of lottoData) {
			numbersArr.push(data.number);
		}

		const numbersString = numbersArr.toString();
		const file = new Blob([numbersString], { type: "text/plain" });

		a.href = URL.createObjectURL(file);
		a.download = "Lotto Numbers";
		a.click();

		URL.revokeObjectURL(a.href);
	};
};

document.addEventListener("DOMContentLoaded", () => {
	init();
});
