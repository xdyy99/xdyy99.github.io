export default function clock() {
	const clock = document.querySelector('.clockJS');
	if (clock) {
		function updateClock() {
			let date = new Date();
			let time = date.toLocaleString('en-US', {
				timeZone: 'Asia/Ho_Chi_Minh',
				hour: 'numeric',
				minute: 'numeric',
				hour12: true,
				timeZoneName: 'short',
			});
			clock.innerHTML = time;
		}
		updateClock();
		let updateEachMin = setInterval(updateClock, 60000);
	}
}
