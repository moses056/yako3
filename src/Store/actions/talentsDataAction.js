import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const talentsDataAction = () => async (dispatch) => {
    try {
        let res = [];
        const querySnapshot = await getDocs(collection(db, "talent"));
        querySnapshot.forEach((doc) => {
            res.push(doc.data());
        });
        dispatch({
            type: "TALENTS_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};


