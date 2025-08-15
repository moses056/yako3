import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const jobsDataAction = () => async (dispatch) => {
    try {
        let res = [];
        const q = query(collection(db, "job"), where("status", "==", "public"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            res.push(doc.data());
        });
        dispatch({
            type: "JOBS_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};


