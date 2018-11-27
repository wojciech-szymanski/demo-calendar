import React from 'react';

const Day = (props) => {
    return  (
        <div className="column">
            <div className="ui fluid card">
                <div className="ui content one column grid">
                    {
                        props.events.map(event => (
                            <p key={ event.id }
                                className={"column " + (event.colour)}>{ event.title }</p>
                        ))
                    }
                </div>
                <div className="extra content">
                    <span className="right floated star">{ props.date }</span>
                </div>
            </div>
        </div>
    );
}

export default Day;