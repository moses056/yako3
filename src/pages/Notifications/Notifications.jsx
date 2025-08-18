/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { useEffect, useState } from "react"
import { auth, db } from "../../firebase"
import { collection, query, orderBy, getDocs } from "firebase/firestore";
import NotificationCard from "./NotificationCard";

export default function Notifications() {

    const [notifications, setNotifications] = useState([])
    const collectionName = localStorage.getItem('userType');

    useEffect(() => {
        getNotifications();
    }, [])

    const getNotifications = () => {
        const arr = [];
        const q = query(
            collection(db, collectionName, auth.currentUser.uid, "notification"),
            orderBy("time", "desc")
        );
        
        getDocs(q).then(res => {
            res.docs.forEach(notification => arr.push({ data: { ...notification.data() }, docID: notification.id }));
            setNotifications([...arr])
        })
    }


    return (
        <div className="container">
            <div className="row mt-5 mb-3 mx-5">
                <h3>Notifications</h3>
            </div>
            <div className="mt-3 mb-5 mx-5">
                <div className="row border border-1 bg-white py-3 px-3 mt-2">
                    <h5>Check what's new</h5>
                </div>
                {
                    notifications?.length > 0
                        ? notifications.map((notification, index) =>
                            <NotificationCard
                                notification={notification}
                                collectionName={collectionName}
                                getNotifications={getNotifications}
                                key={index}
                            />
                        )
                        :
                        <div className="row border border-1 bg-white py-4 px-3">
                            <p className="h3">No notifications to show</p>
                        </div>
                }

            </div>
        </div>
    )
}
