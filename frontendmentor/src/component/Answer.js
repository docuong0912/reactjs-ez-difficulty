// JavaScript source code
import React from 'react';
export default class Answer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [
                {
                    id:1,
                    content:'2fcas'
                },
                {
                    id: 2,
                    content:'asd'
                }
            ],
        };
    }

    render() {
        return (
            <div>
            
                    {this.state.list.map(item => (
                        <p key={item.id}>{item.content}</p>
                    ))}
               
            </div>
        );
    }
}