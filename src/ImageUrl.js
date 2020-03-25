import * as React from 'react';

class HandleApi extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url : null,
        }
    }

    componentDidMount(){
        this.getAvtar()
    }

    getAvtar = () => {
        const url = "https://jsonplaceholder.typicode.com/photos"
        fetch(url)
        .then( response => {
            response = response.json()
            .then( responseJSON => {
                this.setState({
                    url : responseJSON[0]['url']
                })            
            })
        })
        .catch( error => {
            console.log(error);
            
        })
    }

    render(){
        return(
            <React.Fragment>
               <img
                    src={this.state.url}
                    style={{width: 300, height :300, margin :100}}
               />
            </React.Fragment>
        );
    }
};

export default HandleApi;