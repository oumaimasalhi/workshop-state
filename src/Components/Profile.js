import React, { Component } from 'react'
import { Card,Button} from 'react-bootstrap'
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            count: 0,
            intervalId: 0 
          }
    }
    componentDidMount() {
         this.state.intervalId = setInterval(() => {
          this.setState(prevState => {
            return {
              count: prevState.count + 1,
            };
          });
        }, 2000);
      }
      componentWillUnmount(){
        clearInterval(this.state.intervalId);
      }    
    handle = () =>{ 
        this.setState({count: 0});
    }
    render() {
        return (
            <div>
               <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.person.imgSrc} />
                    <Card.Body>
                        <Card.Title>{this.props.person.fullName}</Card.Title>
                        <Card.Text>
                            {this.props.person.bio}
                            {this.props.person.profession}
                            <hr />
                            {this.state.count} seconds have elapsed since mounting.
                        </Card.Text>
                        <Button variant="primary" onClick={this.handle}>Rest time !</Button>
                    </Card.Body>
                </Card> 
            </div>
        )
    }
}
