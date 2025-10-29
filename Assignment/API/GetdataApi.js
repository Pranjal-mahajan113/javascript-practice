    let url = ("https://jsonplaceholder.typicode.com/users");
    fetch(url)
    .then((response)=>{
        return response.json();

    })
    .then((data)=>{
        // console.log(data.name); // It gives Undefined
        for(let item in data){
            console.log(data[item].name)
        }

    })
