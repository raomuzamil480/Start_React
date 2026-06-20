export default function Button () {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            alert("Form Submitted!");
            e.target.reset();
        }}>
               <input type="text" placeholder="Enter your name" />
               <button type="submit">Submit</button>
        </form>
    )
}