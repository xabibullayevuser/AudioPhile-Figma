fetch("http://localhost:3000/product")
.then((data) =>{
    return data.json();
})
.then((product) => {
    console.log(product);
});