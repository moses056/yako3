import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export const clientDataAction = () => async (dispatch) => {
    try {
        let res;
        const docRef = doc(db, "client", auth?.currentUser?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            res = docSnap.data();
        }
        dispatch({
            type: "CLIENT_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};