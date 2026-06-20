function StyleProps({username,textColor}){
     return(
          <div>
               <h1 style={{color: textColor}}>Style Props</h1>
               <p style={{color: textColor}}>Hello {username}, this is a styled component using props!</p>
          </div>
     )
}
export default StyleProps;