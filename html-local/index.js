const smurflist = document.querySelector("#smurfs");
console.log(smurflist);


axios.get("http://localhost:3333/smurfs")
.then((res) => {
    console.log(res.data);
    populateSmurfs(res.data);
})
.catch((err) => {
    console.log(err);
});


function populateSmurfs(smurfArray) {
    for(let smurf of smurfArray) {
        let li = document.createElement("li");
        let text = document.createTextNode(smurf.name);
        li.appendChild(text);
        smurflist.appendChild(li);
    }
}