const addLeadingZero = (number: number | string): string => {
	const numberString: string =
		typeof number === 'number' && number < 10 ? `0${number.toString()}` : number.toString();

	return numberString;
};

const adjustTime = (time: Date): string => {
	let date: string;

	let today: Date = new Date();
	const yesterday: Date = new Date();
	const tomorrow: Date = new Date();
	yesterday.setDate(yesterday.getDate() - 1);
	tomorrow.setDate(tomorrow.getDate() + 1);

	// determine the time offset
	const utcOffset: number = (-1 * time.getTimezoneOffset()) / 60;
	const utcOffsetToString: string = utcOffset >= 0 ? `+${utcOffset}` : `−${Math.abs(utcOffset)}`;

	// set the date bits to output
	const year: number = time.getFullYear();
	const month: string = addLeadingZero(time.getMonth() + 1);
	const day: number = time.getDate();
	const hour: number = Number.parseInt(time.getHours().toString(), 10);
	const minute: string = addLeadingZero(time.getMinutes());

	// return 'today' or 'yesterday' if that is the case
	if (year === today.getFullYear() && month === addLeadingZero(today.getMonth() + 1) && day === today.getDate()) {
		date = '今天';
	} else if (
		year === yesterday.getFullYear() &&
		month === addLeadingZero(yesterday.getMonth() + 1) &&
		day === yesterday.getDate()
	) {
		date = '昨天';
	} else if (
		year === tomorrow.getFullYear() &&
		month === addLeadingZero(tomorrow.getMonth() + 1) &&
		day === tomorrow.getDate()
	) {
		date = '明天';
	} else {
		today = new Date(today.getFullYear(), today.getMonth(), today.getDate());
		time = new Date(time.getFullYear(), time.getMonth(), time.getDate());
		date = `${year}年${addLeadingZero(month)}月${addLeadingZero(day)}日`;
	}

	const hourMinute: string = `${addLeadingZero(hour)}:${minute} `;

	return `${date}, ${hourMinute} (UTC${utcOffsetToString})`;
};

export {adjustTime};
