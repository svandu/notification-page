import { useState } from "react";

function NotificationPage(props) {

  const [notification, setNotification] = useState([
    {
      img: "./public/assets/img/avatar-mark-webber.webp",
      name: "Mark Webber",
      para: "reacted to your recent post",
      topic: "My first tournament today!",
      time: "1m ago",
      private_msg: "",
      msg_img: "",
    },
    {
      img: "./public/assets/img/avatar-angela-gray.webp",
      name: "Angela Gray",
      para: "followed you",
      topic: "",
      time: "5m ago",
      private_msg: "",
      msg_img: "",
    },
    {
      img: "./public/assets/img/avatar-jacob-thompson.webp",
      name: "Jacob Thompson",
      para: "has joined your group",
      topic: "Chess Club",
      time: "1 day ago",
      private_msg: "",
      msg_img: "",
    },
    {
      img: "./public/assets/img/avatar-rizky-hasanuddin.webp",
      name: "Rizky Hasanuddin",
      para: "sent you a private message",
      topic: "",
      time: "5 days ago",
      private_msg:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
      msg_img: "",
    },
    {
      img: "./public/assets/img/avatar-kimberly-smith.webp",
      name: "Kimberly Smith",
      para: "commented on your picture",
      topic: "",
      time: "1 week ago",
      private_msg: "",
      msg_img: "./public/assets/img/image-chess.webp",
    },
    {
      img: "./public/assets/img/avatar-nathan-peterson.webp",
      name: "Nathan Peterson",
      para: "reacted to your recent post",
      topic: "5 end-game strategies to increase you win rate",
      time: "2 weeks ago",
      private_msg: "",
      msg_img: "",
    },
    {
      img: "./public/assets/img/avatar-anna-kim.webp",
      name: "Anna Kim",
      para: "left the group",
      topic: "Chess Club",
      time: "2 weeks ago",
      private_msg: "",
      msg_img: "",
    },
  ]);

  const readMSg = () => {
    setNotification()
  }

  return (
    <div className="main-container">
      <div className="header-container">
        <div className="first-part">
          <p className="notification-logo">Notifications</p>
          <button className="notification-number">3</button>
        </div>
        <p className="read-all">Mark all as read</p>
      </div>
      {notification.map((item, i) => (
        <div
          key={i}
          className="notification-msg"
          // className={ ? "unread-msg" : "notification-msg"}
          // onClick={() => readMsg()}
        >
          <div className="notification-line">
            <img className="profile-img" src={item.img} alt="profile image" />
            <span className="person-name">{item.name}</span>{" "}
            <span className="person-para">{item.para}</span>{" "}
            <span className="person-topic">{item.topic} </span>{" "}
            {item.msg_img !== "" ? (
              <img className="msg-img" src={item.msg_img} alt="msg_image" />
            ) : (
              <img className="no-msg-img" />
            )}
          </div>
          <p className="msg-time">{item.time}</p>
          {item.private_msg !== "" ? (
            <div className="private-msg">{item.private_msg}</div>
          ) : (
            <div className="no-private-msg"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default NotificationPage;
