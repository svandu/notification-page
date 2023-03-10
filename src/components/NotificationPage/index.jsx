import { useState } from "react";

function NotificationPage(props) {

  const [notification, setNotification] = useState([
    {
      id: 1,
      img: "/assets/img/avatar-mark-webber.webp",
      name: "Mark Webber",
      para: "reacted to your recent post",
      topic: "My first tournament today!",
      time: "1m ago",
      private_msg: "",
      msg_img: "",
    },
    {
      id: 2,
      img: "/assets/img/avatar-angela-gray.webp",
      name: "Angela Gray",
      para: "followed you",
      topic: "",
      time: "5m ago",
      private_msg: "",
      msg_img: "",
    },
    {
      id: 3,
      img: "/assets/img/avatar-jacob-thompson.webp",
      name: "Jacob Thompson",
      para: "has joined your group",
      topic: "Chess Club",
      time: "1 day ago",
      private_msg: "",
      msg_img: "",
    },
    {
      id: 4,
      img: "/assets/img/avatar-rizky-hasanuddin.webp",
      name: "Rizky Hasanuddin",
      para: "sent you a private message",
      topic: "",
      time: "5 days ago",
      private_msg:
        "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game",
      msg_img: "",
    },
    {
      id: 5,
      img: "/assets/img/avatar-kimberly-smith.webp",
      name: "Kimberly Smith",
      para: "commented on your picture",
      topic: "",
      time: "1 week ago",
      private_msg: "",
      msg_img: "/assets/img/image-chess.webp",
    },
    {
      id: 6,
      img: "/assets/img/avatar-nathan-peterson.webp",
      name: "Nathan Peterson",
      para: "reacted to your recent post",
      topic: "5 end-game strategies to increase you win rate",
      time: "2 weeks ago",
      private_msg: "",
      msg_img: "",
    },
    {
      id: 7,
      img: "/assets/img/avatar-anna-kim.webp",
      name: "Anna Kim",
      para: "left the group",
      topic: "Chess Club",
      time: "2 weeks ago",
      private_msg: "",
      msg_img: "",
    },
  ]);
  const [notificationNumber, setNotificationNumber] = useState(7);

  const readMsg = (item) => {
    setNotification((prev) => [...prev],(item.isRead =  true));
    setNotificationNumber(notificationNumber - 1);
  }

  const markAllRead = () => {
    notification.forEach((item) => 
    setNotification((prev) => [...prev] , (item.isRead = true)));
    setNotificationNumber(0)
  }

  return (
    <div className="main-container">
      <div className="header-container">
        <div className="first-part">
          <p className="notification-logo">Notifications</p>
          <button className="notification-number">{notificationNumber}</button>
        </div>
        <p className="read-all" onClick={markAllRead}>Mark as all read</p>
      </div>
      {notification.map((item, i) => (
        <div
          key={i}
          className={item.isRead ? "unread-msg" : "notification-msg"}
          onClick={() => readMsg(item)}
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
