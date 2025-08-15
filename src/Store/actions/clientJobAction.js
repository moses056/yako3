import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const clientJobsAction = (firstCond, condation, secondCond) => async (dispatch) => {
    try {
        let res = [];
        const q = query(collection(db, "job"), where(firstCond, condation, secondCond));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            if (data.status !== "private") {
                res.push({ docID: doc.id, data: data });
            }
        });
        dispatch({
            type: "CLIENT_JOBS_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};