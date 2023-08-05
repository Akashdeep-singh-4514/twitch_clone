setTimeout(() => {
    const url = `https://api.twitch.tv/helix/videos?id=987654321`
const xhr = new XMLHttpRequest()

const token = "z1tf616p6orah9l8yzzwc8lltfzx81"


// console.log("helo");

xhr.open('GET', url)
xhr.setRequestHeader('Authorization', `Bearer ${token}`);
xhr.setRequestHeader('Client-Id', 'wxcizc5kndyng22j25b87gjlmnpzqx');


xhr.onreadystatechange = () => {
    // console.log(xhr.readyState);
    if (xhr.readyState == 4 && xhr.status == 200) {
        const response = JSON.parse(xhr.responseText)
        output=''
        console.log(response.data);
        
       
        // console.log(response);
    }
}
xhr.send()
    
}, 1000);