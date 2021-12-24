import React, { Component } from 'react';

import {Card} from "react-bootstrap";
import "./assign3.css";

export class Post extends Component {

    render() {
        return (
        <div>
            <h3 >Post Component</h3>
        <div>

        {this.props.list.map((vals, index)=>{ 
            return(
                <Card id="myCard" style={{ width: '18rem' }} key={vals.id}>
                <Card.Img variant="top" src={vals.myImage} />
                <hr />
                        <Card.Body>
                                    <Card.Title><b>id:</b> {index + 1}</Card.Title>
                                    <Card.Text><b>postName:</b> {vals.postName}</Card.Text>
                                    <Card.Text><b>postDesc:</b> {vals.postDesc}</Card.Text>
                                    <Card.Text><b>postAuthor:</b> {vals.author}</Card.Text>
                                    <Card.Text><b>Date:</b> {vals.date}</Card.Text> 
                    </Card.Body>
                </Card>
            )
        })}

           

                </div>
            </div>
        )
    }
}

export default Post
