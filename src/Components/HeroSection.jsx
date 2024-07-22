import React from 'react'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
import { Card, Carousel, CarouselCaption, Form, FormControl, FormGroup, FormLabel, Navbar,  } from 'react-bootstrap'

export default function HeroSection() {
  return (
    <div>
      <div style={{position:"relative"}}>
        <video style={{maxWidth:"100%",
        height:"800px",
        marginTop:"-92px",
        autoPlay:"true"
      }} src="./volvo.webm " autoPlay></video>
      <div style={{position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        color:"white",
        marginTop:"-210px",
      }}><span style={{color:"white",
        fontSize:"18px",
        fontWeight:"bold",
        fontFamily:"Segoe UI, Arial, sans-serif"
        
      }}>A new era for safety</span>
    
      
      </div>
      <div style={{position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        color:"white",
        marginTop:"-150px",
        textAlign:"center",
        fontSize:"30px",
        fontWeight:"bold",
        fontFamily:"Segoe UI, Arial, sans-serif"
        
        }}><p>Does how you feel affect <br />how you drive?</p></div>
        <div
        style={{position:"absolute",
          top:"50%",
          left:"50%",
          transform:"translate(-50%, -50%)",
          color:"white",
          marginTop:"-150px",
          textAlign:"center",
          fontSize:"30px",
          fontWeight:"bold",
          fontFamily:"Segoe UI, Arial, sans-serif"}}>
        <button style={{
        border:"none",
        padding:"15px 35px",
        borderRadius:"5px",
        marginTop:"160px",
        fontWeight:"bold"
       
        }}>Learn more</button>
        </div>
        
      </div>
      <div style={{textAlign:"center",marginTop:"-50px",fontFamily:"Segoe UI, Arial, sans-serif"
        ,fontSize:"20px",fontWeight:"normal"
      }}><h2>All models</h2>
     <div style={{marginTop:"50px"}}> <a style={{textDecoration:"none",color:"grey",marginRight:"10px",fontSize:"15px"}} href="">All(5)</a> <a style={{textDecoration:"none",color:"grey",marginRight:"10px",fontSize:"15px"}} href="">SUV(4)</a> <a style={{textDecoration:"none",color:"grey",marginRight:"10px",fontSize:"15px"}} href="">Sedan(1)</a> </div></div>
      <div style={{marginTop:"60px",display:"flex"}}>
            
                <Card style={{marginLeft:"20px",
                  fontFamily:"Segoe UI, Arial, sans-serif",
                }}>
                    <Card.Text style={{
                      color:"grey",
                      fontSize:"14px",
                      fontWeight:"bold"
                    }}>SUV</Card.Text>
                    <Card.Text style={{
                      fontWeight:"bold",
                      marginTop:"5px"
                    }}>C40 Recharge <span style={{color:"grey",fontWeight:"normal"}}>pure electric</span>
                    </Card.Text>
                    <Card.Text style={{color:"grey",
                      marginTop:"5px",
                      marginBottom:"10px",
                      fontSize:"13px"
                    }}>From $62,95,000</Card.Text>
                    <Card.Img style={{ width:"400px",height:"200px"}} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6Sk8EMMN50Xb20bPAYNw5whexCJLyP8s4BugysKIiZcUd7_pZ"/>
                    <div style={{display:"flex",
                      justifyContent:"space-evenly",
                      fontSize:"16px",
                      color:"#1560BD",
                      fontWeight:"bold",
                      marginTop:"15px"
                      
                    }}>
                    <Card.Text> <a style={{textDecoration:"none",color:"#1560BD"}} href="">Learn</a> </Card.Text>
                    <Card.Text> <a style={{textDecoration:"none",color:"#1560BD"}} href="">Order Online</a></Card.Text>
                    </div>
                </Card>
                <Card style={{marginLeft:"20px",
                  fontFamily:"Segoe UI, Arial, sans-serif",
                }}>
                    <Card.Text style={{
                      color:"grey",
                      fontSize:"14px",
                      fontWeight:"bold"
                    }}>SUV</Card.Text>
                    <Card.Text style={{
                      fontWeight:"bold",
                      marginTop:"5px"
                    }}>XC40 Recharge <span style={{color:"grey",fontWeight:"normal"}}>fully electric</span></Card.Text>
                    <Card.Text style={{color:"grey",
                      marginTop:"5px",
                      marginBottom:"10px",
                      fontSize:"13px"
                    }}>Starting From $54,95,000</Card.Text>
                    <Card.Img style={{ width:"400px",height:"200px"}} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSC53kkVwAu1JEDXqan8Y9XuAxCQe5Y8RKg_aNtDk8lswcjt99J"/>
                    <div style={{display:"flex",
                      justifyContent:"space-evenly",
                      fontSize:"16px",
                      color:"#1560BD",
                      fontWeight:"bold",
                      marginTop:"15px"
                      
                    }}>
                    <Card.Text> <a style={{textDecoration:"none",color:"#1560BD"}} href="">Learn</a> </Card.Text>
                    <Card.Text> <a style={{textDecoration:"none",color:"#1560BD"}} href="">Order Online</a></Card.Text>
                    </div>
                </Card>
                <Card style={{marginLeft:"20px",
                  fontFamily:"Segoe UI, Arial, sans-serif",
                }}>
                    <Card.Text style={{
                      color:"grey",
                      fontSize:"14px",
                      fontWeight:"bold"
                    }}>SUV</Card.Text>
                    <Card.Text style={{
                      fontWeight:"bold",
                      marginTop:"5px"
                    }}>XC60 </Card.Text>
                    <Card.Text style={{color:"grey",
                      marginTop:"5px",
                      marginBottom:"10px",
                      fontSize:"13px"
                    }}>From $68,90,000</Card.Text>
                    <Card.Img style={{ width:"400px",height:"200px"}} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSC53kkVwAu1JEDXqan8Y9XuAxCQe5Y8RKg_aNtDk8lswcjt99J"/>
                    <div style={{display:"flex",
                      justifyContent:"space-evenly",
                      fontSize:"16px",
                      color:"#1560BD",
                      fontWeight:"bold",
                      marginTop:"15px"
                      
                    }}>
                    <Card.Text> <a style={{textDecoration:"none",color:"#1560BD"}} href="">Learn</a> </Card.Text>
                    <Card.Text> <a style={{textDecoration:"none",color:"#1560BD"}} href="">Order Online</a></Card.Text>
                    </div>
                </Card>
            
        </div>
        <div style={{display:"flex",justifyContent:"center",
          marginTop:"60px"
        }}><button style={{ backgroundColor:"white",color:"#1560BD",borderColor:"#1560BD",padding:"12px 25px",border:"2px solid #1560BD",borderRadius:"4px",fontWeight:"bold"}}>Compare models</button></div>
        <div style={{display:"block",marginLeft:"auto",marginRight:"auto",width:"90%",marginTop:"80px"}}>
          <Carousel>
            <Carousel.Item>
             <img  style={{width:"1100px"}}
             src="https://www.volvocars.com/images/cs/v3/assets/blt618dcb179a89242d/blt8b193448d24bd8ae/65798f0524605c000ddedf57/homepage-whyvolvo-desktop-16x9.jpg?branch=prod_alias&auto=webp&iar=0&w=1920&imdensity=1"
             />
             {/* <CarouselCaption ><h3>First slide</h3></CarouselCaption> */}
            </Carousel.Item>
            
          </Carousel>
        </div>
        <div style={{textAlign:"center",fontFamily:"Segoe UI, Arial, sans-serif",marginTop:"80px"}}> <h2>Request CallBack</h2>
        <div style={{backgroundColor:"whitesmoke",display:"block",marginLeft:"auto",marginRight:"auto",width:"50%",marginTop:"50px"}}>
        <Form style={{textAlign:"center"}} >
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Name</Form.Label>
        <Form.Control style={{width:"20%",backgroundColor:"skyblue"}} />
      </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" style={{width:"20%",backgroundColor:"skyblue"}}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control style={{width:"20%",backgroundColor:"skyblue"}} />
      </Form.Group>
        </Form>
        <button  style={{ backgroundColor:"white",color:"#1560BD",borderColor:"#1560BD",padding:"5px 10px",border:"2px solid #1560BD",borderRadius:"4px",fontWeight:"bold" ,marginTop:"15px"}} >Submit</button>
        </div>
        
        </div>
        <div style={{marginTop:"50px",backgroundColor:"#efefef",fontFamily:"Segoe UI, Arial, sans-serif"}}>
          <footer>
            <h3 style={{textAlign:"center",marginBottom:"40px"}}>Back to top</h3>
            <div style={{marginLeft:"300px",marginTop:"50px"}}>
              <span style={{fontSize:"13px",color:"grey",fontWeight:"bold"}}>HELP & SUPPORT</span>
              <p style={{marginTop:"20px",fontWeight:"bold"}}>Book a service</p>
              <p style={{ marginTop:"20px",fontWeight:"bold"}}>Support & manuals</p>
            </div>
            <div style={{marginLeft:"570px",marginTop:"-104px"}}>
              <span style={{fontSize:"13px",color:"grey",fontWeight:"bold"}}>CONTACT US</span>
              <p style={{marginTop:"20px",fontWeight:"bold"}}>Contact Volvo</p>
              <p style={{ marginTop:"20px",fontWeight:"bold"}}>Find a dealer</p>
              <p style={{ marginTop:"20px",fontWeight:"bold"}}>Book a test drive</p>
            </div>
            <div style={{marginLeft:"880px",marginTop:"-144px"}}>
              <span style={{fontSize:"13px",color:"grey",fontWeight:"bold"}}>VOLVO CARS APP</span>
              <p style={{marginTop:"20px",fontWeight:"bold"}}>App Store</p>
              <p style={{ marginTop:"20px",fontWeight:"bold"}}>Google play</p>
            </div>
            <div style={{marginTop:"100px",textAlign:"center",fontFamily:"Segoe UI, Arial, sans-serif",fontSize:"10px",fontWeight:"bold",color:"grey"}}> <p>Copyright © 2024 Volvo Car Corporation (or its affiliates or licensors)</p></div>
            


          </footer>
        </div>
     
    </div>
  )
}
