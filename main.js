// url_for_token="https://id.twitch.tv/oauth2/token?client_id=wxcizc5kndyng22j25b87gjlmnpzqx&client_secret=9bglnihhn5x3gc2xgmc4wz75k5xzs1&grant_type=client_credentials"
// xhr2 = new XMLHttpRequest()

// xhr2.open('GET', url_for_token)
// 	xhr2.setRequestHeader('client_id', `wxcizc5kndyng22j25b87gjlmnpzqx`);
// 	xhr2.setRequestHeader('client_secret', '9bglnihhn5x3gc2xgmc4wz75k5xzs1');
// 	xhr2.setRequestHeader('grant_type', 'client_credentials');
// 	xhr2.onreadystatechange = () => {
// 		if (xhr2.readyState == 4 && xhr2.status == 200) {
// 			response = JSON.parse(xhr2.responseText)
// 			console.log(response.access_token);
// 		token = response.access_token

			
// 		}
// 	}
// 	xhr2.send()



url = `https://api.twitch.tv/helix/streams?first=40`
xhr = new XMLHttpRequest()
token="vlwveohhow5p32twal1xntmpzgkn4o"



setTimeout(() => {

	xhr.open('GET', url)
	xhr.setRequestHeader('Authorization', `Bearer ${token}`);
	xhr.setRequestHeader('Client-Id', 'wxcizc5kndyng22j25b87gjlmnpzqx');

	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4 && xhr.status == 200) {
			response = JSON.parse(xhr.responseText)
			output = ''
			console.log(response.data);
			for (let i = 0; i < response.data.length; i++) {
				languages = ''
				for (let i = 0; i < response.data[i].tags.length; i++) {
					languages += `<span style="color: gray; background-color: lightgrey; border-radius: 3px; padding: 2px; margin:2px;">${response.data[i].tags[i]}</span>`
				}
				thumb1 = response.data[i].thumbnail_url.replace("{width}", "440")
				thumb2 = thumb1.replace("{height}", "250")
				output += `
                <div style="width: 23%; margin: 9px;" id="vid-${i}" class="vid">
                <img src="${thumb2}" width="100%"><br>
                <span style="font-size:medium;"><b>${response.data[i].title}</b></span><br>
                <span style="color: grey;font-size:medium;">${response.data[i].user_login}</span><br>
                <span>${response.data[i].game_name}</span><br>${languages}
            	</div>
            	`
			}
			document.getElementById('my-div').innerHTML = output

			for (let i = 0; i < response.data.length; i++) {
				document.getElementById(`vid-${i}`).addEventListener('click', () => {
					console.log(document.getElementById(`vid-${i}`));

					woutput = `
                    <iframe src="https://player.twitch.tv/?channel=${response.data[i].user_login}&parent=127.0.0.1" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><br>
					<span style="font-size:medium;"><b>${response.data[i].title}</b></span><br>
					<span style="color: grey;font-size:x-large;">${response.data[i].user_login}</span><br>
					<span> game name: ${response.data[i].game_name}</span><br>
					<p> started at : ${response.data[i].started_at}</p>
					<p> viewer count: ${response.data[i].viewer_count}</p>${languages}
                    `
					document.getElementById('my-div2').setAttribute("style", "width:70%; margin-left:10%")
					document.getElementById('mainpage').setAttribute("style", "display:flex;flex-wrap:wrap;")
					document.getElementById('my-div2').innerHTML = woutput
				})
			}
		}
	}
	xhr.send()
}, 1000);























document.getElementById('search-btn').addEventListener('click', () => {

	xhr.open('GET', url)
	xhr.setRequestHeader('Authorization', `Bearer ${token}`);
	xhr.setRequestHeader('Client-Id', 'wxcizc5kndyng22j25b87gjlmnpzqx');
	text = document.getElementById("search-text").value

	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4 && xhr.status == 200) {
			response = JSON.parse(xhr.responseText)
			output = ''
			console.log(response.data);
			for (let i = 0; i < response.data.length; i++) {

				if (text == response.data[i].game_name || text == response.data[i].user_login || text == response.data[i].user_name) {
					languages = ''
					for (let i = 0; i < response.data[i].tags.length; i++) {
						languages += `<span style="color: gray; background-color: lightgrey; border-radius: 3px; padding: 2px; margin:2px;">${response.data[i].tags[i]}</span>`
					}
					woutput = `
                    <iframe src="https://player.twitch.tv/?channel=${response.data[i].user_login}&parent=127.0.0.1" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><br>
					<span style="font-size:medium;"><b>${response.data[i].title}</b></span><br>
					<span style="color: grey;font-size:x-large;">${response.data[i].user_login}</span><br>
					<span> game name: ${response.data[i].game_name}</span><br>
					<p> started at : ${response.data[i].started_at}</p>
					<p> viewer count: ${response.data[i].viewer_count}</p>${languages}
                    `
					document.getElementById('my-div2').setAttribute("style", "width:70%; margin-left:10%")
					document.getElementById('mainpage').setAttribute("style", "display:flex;flex-wrap:wrap;")
					document.getElementById('my-div2').innerHTML = woutput
				}
			}
		}
	}
	xhr.send()
})

























document.getElementById('search-text').addEventListener('keypress', (e) => {
	if (e.key == 'Enter') {
		e.preventDefault()
		text = document.getElementById("search-text").value


		xhr.open('GET', url)
		xhr.setRequestHeader('Authorization', `Bearer ${token}`);
		xhr.setRequestHeader('Client-Id', 'wxcizc5kndyng22j25b87gjlmnpzqx');


		xhr.onreadystatechange = () => {
			// console.log(xhr.readyState);
			if (xhr.readyState == 4 && xhr.status == 200) {
				response = JSON.parse(xhr.responseText)
				output = ''
				console.log(response.data);

				// console.log(typeof(response));
				for (let i = 0; i < response.data.length; i++) {

					if (text == response.data[i].game_name || text == response.data[i].user_login || text == response.data[i].user_name) {
						languages = ''
						for (let i = 0; i < response.data[i].tags.length; i++) {
							languages += `<span style="color: gray; background-color: lightgrey; border-radius: 3px; padding: 2px; margin:2px;">${response.data[i].tags[i]}</span>`
						}

						woutput = `
						<iframe src="https://player.twitch.tv/?channel=${response.data[i].user_login}&parent=127.0.0.1" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><br>
						<span style="font-size:medium;"><b>${response.data[i].title}</b></span><br>
						<span style="color: grey;font-size:x-large;">${response.data[i].user_login}</span><br>
						<span> game name: ${response.data[i].game_name}</span><br>
						<p> started at : ${response.data[i].started_at}</p>
						<p> viewer count: ${response.data[i].viewer_count}</p>${languages}
						`
						document.getElementById('my-div2').setAttribute("style", "width:70%; margin-left:10%")
						document.getElementById('mainpage').setAttribute("style", "display:flex;flex-wrap:wrap;")
						document.getElementById('my-div2').innerHTML = woutput
					}
				}
			}
		}
		xhr.send()
	}
})