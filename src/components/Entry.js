import React from 'react';

export default function Entry(props) {
    return (
        <div className="entry">
            <div className="image">
                <img src={`./images/${props.item.imageUrl}`} alt={props.item.title}/>
            </div>
            <div className="text">
                <div className="upper">
                    <img className="pin" src="./images/pin.png" alt=""/>
                    <span className="location">{props.item.location}</span>
                    <a className="link" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <div className="title">{props.item.title}</div>
                <div className="dates">{props.item.startDate} - {props.item.endDate}</div>
                <div className="description">{props.item.description}</div>
            </div>
        </div>
    )
}