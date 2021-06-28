import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Apple extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedDish: this.props.dishes
        };
    }


    render(){
        console.log(this.props.dishes.name);

        const comments = this.props.dishes.comments.map((comment)=>{
            return (
                <div>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}</p>
                </div>
            );
        });

        return(
            <div className='row'>
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.dishes.image} alt={this.props.dishes.name} />
                        <CardBody>
                            <CardTitle>{this.props.dishes.name}</CardTitle>
                            <CardText>{this.props.dishes.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h1>Comments</h1>
                    {comments}
                    
                </div>
            </div>
            
        );
    }
}

export default Apple;