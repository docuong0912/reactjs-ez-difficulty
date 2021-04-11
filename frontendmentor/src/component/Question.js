import React from 'react';
import arrow from '../images/icon-arrow-down.svg';


export default class Question extends React.Component {
    constructor() {
        super();
        this.state = {
            bold: false,
            appear:false
        };
    }
    boldText=()=> {
        const isBolded = this.state.bold;
        this.setState({ bold: !isBolded })
        const appeared = this.state.appear;
        this.setState({ appear: !appeared })
    }
    render() {
        const { questions } = this.props;
        return (
            <div>
                <div className="question" >
                    <span>
                        <p className={this.state.bold ? 'bold' : null} onClick={this.boldText}>{questions.content}</p>
                    </span>
                    <img src={arrow} className={this.state.bold ? 'rotate':'back' } alt="arrow" />
                    <div className={this.state.appear ? 'answer' : 'hidden'}>
                        <p>{questions.content2}</p>
                    </div>
                </div>
                
             </div>
            
        );
    }
}