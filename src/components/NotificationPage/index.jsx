import React from "react";

function NotificationPage(props) {
  const notification = [
    {
      img: "./public/assets/img/avatar-mark-webber.webp",
      name: "Mark Webber",
      para: "reacted to your recent post",
      topic: "My first tournament today!",
      time: "1m ago",
    },
    {
      img: "./public/assets/img/avatar-angela-gray.webp",
      name: "Angela Gray",
      para: "followed you",
      time: "5m ago",
    },
    {
      img: "./public/assets/img/avatar-jacob-thompson.webp",
      name: "Jacob Thompson",
      para: "has joined your group",
      topic: "Chess Club",
      time: "1 day ago",
    },
    {
      img: "./public/assets/img/avatar-rizky-hasanuddin.webp",
      name: "Rizky Hasanuddin",
      para: "sent you a private message",
      time: "5 days ago",
      message:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
    },
    {
      img: "./public/assets/img/avatar-kimberly-smith.webp",
      name: "Kimberly Smith",
      para: "commented on your picture",
      time: "1 week ago",
      msg_img: "./public/assets/img/image-chess.webp",
    },
    {
      img: "./public/assets/img/avatar-nathan-peterson.webp",
      name: "Nathan Peterson",
      para: "reacted to your recent post",
      topic: "5 end-game strategies to increase you win rate",
      time: "2 weeks ago",
    },
    {
      img: "./public/assets/img/avatar-anna-kim.webp",
      name: "Anna Kim",
      para: "left the group",
      topic: "Chess Club",
      time: "2 weeks ago",
    },
  ];

  return (
    <div className="main-container">
      <div className="header-container">
        <div className="first-part">
          <p className="notification-logo">Notifications</p>
          <button className="notification-number">3</button>
        </div>
        <p className="read-all">Mark all as read</p>
      </div>
      {notification.map((singleNotification, i) => (
        <div key={i} className="notification-msg">
          <div className="notification-line">
            <img
              className="profile-img"
              src={singleNotification.img}
              alt="profile image"
            />
            <span className="person-name">{singleNotification.name}</span>{" "}
            <span className="person-para">{singleNotification.para}</span>{" "}
            <span className="person-topic">{singleNotification.topic} </span>
            <img className="msg-img" src={singleNotification.msg_img} alt="msg_image"/>
          </div>
          <p className="msg-time">{singleNotification.time}</p>
          <div className="private-msg">{singleNotification.message}</div>
        </div>
      ))}
    </div>
  );
}

export default NotificationPage;
