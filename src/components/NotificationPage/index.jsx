import React from 'react'

function NotificationPage(props) {

    const notification = [
        {
            name: "Mark Webber",
            para: "reacted to your recent post",
            topic: "My first tournament today!",
            time: "1m ago",
        },
        {
            name: "Angela Gray",
            para: "followed you",
            time: "5m ago",
        },
        {
            name: "Jacob Thompson",
            para: "has joined your group",
            topic: "Chess Club",
            time: "1 day ago",
        },
        {
            name: "Rizky Hasanuddin",
            para: "sent you a private message",
            time: "5 days ago",
            message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
        }, 
        {
            name: "Kimberly Smith", 
            time: "1 week ago",
        },
        {
            name: "Nathan Peterson",
            topic: "5 end-game strategies to increase you win rate",
            time: "2 weeks ago"
        }, 
        {
            name: "Anna Kim", 
            topic: "Chess Club", 
            time: "2 weeks ago",
        }
    ]


  return (
    <div className='main-container'>
        <div className='header-container'>
            <div className='first-part'>
                <p className='notification-logo'>Notifications</p>
                <button className='notification-number'>3</button>
            </div>
            <p className='read-all'>Mark all as read</p>
        </div>
        {notification.map((singleNotification, i) => (
            <div key={i}>
                <span className='person-name'>{singleNotification.name}</span> {singleNotification.para} <span>{singleNotification.topic} </span> {singleNotification.time}
                <div className='private_msg'>
                    {singleNotification.message}
                </div>
            </div>
        ))}
    </div>
  )
}

export default NotificationPage;