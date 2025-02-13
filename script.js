const inputBox = document.getElementById('inputbox');
const resultbox = document.getElementById('resultbox');

async function fetchData() {
    const profilename = inputBox.value;
    try{
        const response = await fetch(`https://api.github.com/users/${profilename}`);
        if (!response.ok){
            throw new Error("couldn't find user");
        }
        const data = await response.json();
        const jsonDataString = JSON.stringify(data, null, 2);
        resultbox.innerHTML = `<pre>${jsonDataString}</pre>`;
    } 
    catch (error) {
        resultbox.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
