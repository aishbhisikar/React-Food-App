import React from 'react'
import {Card,Button,Carousel} from 'react-bootstrap'
import {FacebookIcon,FacebookShareButton,WhatsappIcon,WhatsappShareButton } from "react-share"

function Menu(props) {
    
    return (
            <Card style={{ width: '18rem' }} className="boxCard" id="menu">
                
                        <Carousel>
                        <Carousel.Item>
                        <img style={{width:'200px',height:'200px'}}
                            src={props.photo1}
                            alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img style={{width:'200px',height:'200px'}}
                            src={props.photo2}
                            alt="Second slide"/>
                        </Carousel.Item>
                    </Carousel>
                    

                <Card.Body>
                    <Card.Title style={{textAlign:'center'}}>{props.dishName}</Card.Title>
                    <Card.Title style={{textAlign:'center'}} >Price:$ {props.rate}</Card.Title>
                    <Card.Text style={{textAlign:'center'}}>
                            {props.desc}
                    </Card.Text>
                    <Button variant="primary"
                     style={{float:'left'}} 
                     onClick={()=>props.addCart(props.id,props.dishName, props.photo1, props.rate)}>
                         🛒 Add to Cart 
                     </Button>
                    
                     <FacebookShareButton url={"www.facebook.com"} style={{ float:'right'}} > 
                        <FacebookIcon size={32} round={true}/>
                     </FacebookShareButton>
                     <WhatsappShareButton url={'https://web.whatsapp.com/'} style={{ float:'right'}} > 
                        <WhatsappIcon size={32} round={true}/>
                     </WhatsappShareButton>


                </Card.Body>
            </Card>

    )
}

export default Menu


