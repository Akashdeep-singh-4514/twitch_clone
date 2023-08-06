setTimeout(() => {
    url = `https://api.twitch.tv/helix/streams?first=40`
    xhr = new XMLHttpRequest()
    token = "z1tf616p6orah9l8yzzwc8lltfzx81"


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

                languages = ''
                for (let i = 0; i < response.data[i].tags.length; i++) {
                    languages += `<span style="color: gray; background-color: lightgrey; border-radius: 3px; padding: 2px; margin:2px;">${response.data[i].tags[i]}</span>`
                }
                thumb1 = response.data[i].thumbnail_url.replace("{width}", "440")
                thumb2 = thumb1.replace("{height}", "250")
                output += `
            <div style="width: 23%; margin: 9px;">
                <a href="https://www.twitch.tv/${response.data[i].user_login}" style="text-decoration:none; color:black;"><img src="${thumb2}" width="100%"><br>
                <span style="font-size:medium;"><b>${response.data[i].title}</b></span><br>
                <span style="color: grey;font-size:medium;">${response.data[i].user_login}</span><br>
                <span>${response.data[i].game_name}</span><br>${languages}</a>
            </div>
            
            `

            }
            document.getElementById('my-div').innerHTML = output

            // console.log(response);
        }
    }
    xhr.send()

}, 1000);


document.getElementById('search-btn').addEventListener('click', () => {
    text = document.getElementById("search-text").value

    url = `https://api.twitch.tv/helix/streams?first=30`
    xhr = new XMLHttpRequest()
    token = "z1tf616p6orah9l8yzzwc8lltfzx81"


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
                    thumb1 = response.data[i].thumbnail_url.replace("{width}", "440")
                    thumb2 = thumb1.replace("{height}", "250")
                    output += `
                    <div style="width: 50%; margin: 9px;">
                        <a href="https://www.twitch.tv/${response.data[i].user_login}" style="text-decoration:none; color:black;"><img src="${thumb2}" width="100%"><br>
                        <span style="font-size:medium;"><b>${response.data[i].title}</b></span><br>
                        <span style="color: grey;font-size:medium;">${response.data[i].user_login}</span><br>
                        <span>${response.data[i].game_name}</span><br>${languages}</a>
                    </div>
                    
                    `

                }

            }
            document.getElementById('my-div').innerHTML = output
            document.getElementById("return").innerHTML=`<a href="index.html"><button><</button></a>`


            // console.log(response);
        }
    }
    xhr.send()

})
document.getElementById('search-text').addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        e.preventDefault()
        text = document.getElementById("search-text").value

        url = `https://api.twitch.tv/helix/streams?first=30`
        xhr = new XMLHttpRequest()
        token = "z1tf616p6orah9l8yzzwc8lltfzx81"


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
                        thumb1 = response.data[i].thumbnail_url.replace("{width}", "440")
                        thumb2 = thumb1.replace("{height}", "250")
                        output += `
                    <div style="width: 50%; margin: 9px;">
                        <a href="https://www.twitch.tv/${response.data[i].user_login}" style="text-decoration:none; color:black;"><img src="${thumb2}" width="100%"><br>
                        <span style="font-size:medium;"><b>${response.data[i].title}</b></span><br>
                        <span style="color: grey;font-size:medium;">${response.data[i].user_login}</span><br>
                        <span>${response.data[i].game_name}</span><br>${languages}</a>
                    </div>
                    
                    `

                    }

                }
                document.getElementById('my-div').innerHTML = output
                document.getElementById("return").innerHTML=`<a href="index.html"><button><</button></a>`



                // console.log(response);
            }
        }
        xhr.send()

    }
})
