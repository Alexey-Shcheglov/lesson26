const getData = () => {
	const user = fetch('db.json');
	user
		 .then(response => response.json())
		 .then(data => {
			  console.log(data);
			  sendData(data);
		 })
		 .catch((e) => {
			  console.log(e);
			  console.log("Ошибка, данные не были получены");
		 });
};

const sendData = (user) => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		 method: 'POST',
		 body: JSON.stringify(user)
	})
		 .then(response => {
			  console.log("Данные успешно отправлены");
		 })
		 .catch((e) => {
			  console.log(e);
			  console.log("Ошибка, данные не отправлены");
		 });
};

getData();