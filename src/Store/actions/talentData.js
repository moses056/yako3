import { auth, db } from "../../firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const talentDataAction = () => (dispatch) => {
    try {
        let res;
        const docRef = doc(db, "talent", auth?.currentUser?.uid);
        onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
                res = doc.data();
                dispatch({
                    type: "USER_DATA",
                    payload: res,
                });
            }
        });

    } catch (err) {
        console.log(err);
    }
};
