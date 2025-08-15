import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export const jobDataAction = (jobId) => async (dispatch) => {
    try {
        let res;
        const docRef = doc(db, "job", jobId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            res = docSnap.data();
        }
        dispatch({
            type: "JOB_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};