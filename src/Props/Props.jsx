
function Props({title, name, age,image}){
     return (
          <div className="card">
               <div className="img-container">
                    <img src={image} alt={image} />
               </div>
               <h1 >Props in React</h1>
               <h2>My title is {title}</h2>
               <h2>My name is {name}</h2>
               <h2>My age is {age}</h2>

          </div>
     )
}
export default Props;