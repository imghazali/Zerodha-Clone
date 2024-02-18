let books=[
    { title:"Book1",
    genre:"History",
    edition:1980
},
{
    title:"Book2",
    genre:"Math",
    edition:1920
},
{
    title:"Book3",
    genre:"Science",
    edition:1908
}
]
let output=books.filter((bk)=>{
   return bk.genre === "History"; 
})
console.log(output);
