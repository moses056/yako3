import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const jobsDataAction = () => async (dispatch) => {
    try {
        let res = [];
        const q = query(collection(db, "job"), where("status", "==", "public"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // Convert Firestore Timestamps to serializable format
            res.push(convertTimestamps(data));
        });
        dispatch({
            type: "JOBS_DATA",
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};

// Helper function to convert Firestore Timestamps to serializable format
function convertTimestamps(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  
  const converted = {};
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object' && obj[key].seconds !== undefined) {
      // Convert Timestamp to ISO string or milliseconds
      converted[key] = obj[key].toDate().toISOString();
    } else if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      converted[key] = convertTimestamps(obj[key]);
    } else {
      converted[key] = obj[key];
    }
  }
  return converted;
}


