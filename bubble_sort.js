const container =
document.querySelector(".data-container");

// Function to generate the array of blocks
function generateArray() {
	for (var i = 0; i < 20; i++) {
		// Return a value from 1 to 100 (both inclusive)
		var value = Math.ceil(Math.random() * 100);

		// Creating element div
		var arrayEle = document.createElement("div");

		// Adding class 'block' to div
		arrayEle.classList.add("block");

		// Adding style to div
		arrayEle.style.height = `${value * 3}px`;
		arrayEle.style.transform = `translate(${i * 30}px)`;

		// Creating label element for displaying
		// size of a particular block
		var arrayEleLabel = document.createElement("label");
		arrayEleLabel.classList.add("block_id");
		arrayEleLabel.innerText = value;

		// Appending created elements to index.html
		arrayEle.appendChild(arrayEleLabel);
		container.appendChild(arrayEle);
	}
}

// Promise to swap two blocks
function swap(el1, el2) {
	return new Promise((resolve) => {
		// For exchanging styles of two blocks
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function () {
			// For waiting for .25 sec
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 250);
		});
	});
}

// Asynchronous BubbleSort function
async function bubbleSort(delay = 600) {
	var blocks = document.querySelectorAll(".block");

	// BubbleSort Algorithm
	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {
			// To change the background-color of the blocks to be compared
			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";

			// To wait for .1 sec
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);

			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1].childNodes[0].innerHTML);

			// To compare the value of two blocks
			if (value1 > value2) {
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".block");
			}

			// Changing the color to the previous one
			blocks[j].style.backgroundColor = "#6b5b95";
			blocks[j + 1].style.backgroundColor = "#6b5b95";
		}

		// Changing the color of the greatest element found in the above traversal
		blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
	}
	barval.innerHTML="<h3>Sorted!!!</h3>";
	
// To enable the button
// "Generate New Array" after final(sorted)
document.getElementById("Button1")
.disabled = false;
document.getElementById("Button1")
.style.backgroundColor = "#6f459e";

// To enable the button
// "Insertion Sort" after final(sorted)
document.getElementById("Button2")
.disabled = false;
document.getElementById("Button2")
.style.backgroundColor = "#6f459e";
}

// Call "generatebars()" function
generateArray();

// Function to generate new random array
function generate()
{
window.location.reload();
}

// Function to disable the button
function disable()
{
// To disable the button "Generate New Array"
document.getElementById("Button1")
.disabled = true;
document.getElementById("Button1")
.style.backgroundColor = "#d8b6ff";

// To disable the button "Insertion Sort"
document.getElementById("Button2")
.disabled = true;
document.getElementById("Button2")
.style.backgroundColor = "#d8b6ff";
}
