 
export default function Navbar() {
  return (
    
    <div style={{
      
        backgroundColor:"white",
        top:0,
        width:"100%",
        height:"60px",
        color:"Black",
        display:"flex",
        alignItems:"center",
        gap:"2%"

    }}>
      

    <div><img style={{
      width:"100px",
      height:"60px",
      paddingLeft:"50px"
    }} src="https://www.volvocars.com/static/shared/images/volvo-spread-wordmark.svg" alt="" /></div>
    <div style={{display:"flex",
      justifyContent:"center",
      alignItems:"center",
      marginLeft:"25%",
      gap:"25px",
      fontWeight:"bold",
      fontFamily:"Segoe UI, Arial, sans-serif",
    }}><div>Our Cars</div>
    <div>Shop </div>
    <div>Owners</div>
    <div>About Us</div>
    </div>
    <div style={{
      marginLeft:"28%"
    }}>
      <div><i  className="fa fa-regular fa-user"></i></div>
      <button style={{
        top:"10%",
        backgroundColor:"white",
        border:"none",
        fontSize:"16px",
        
      }}>Sign in</button>
    </div>
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      position:"absolute",
      marginTop:"8%",
      backgroundColor:"black",
      color:"white",
      width:"100%",
      height:"40px"
    }}>
      <a href =" "style={{
        fontFamily:"Segoe UI, Arial, sans-serif",
        fontWeight:"bold",
        textDecoration:"none",
        color:"white"
      }}> LEARN MORE </a>
    </div>
    
</div>
  )
}
