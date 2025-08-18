import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export const clientDataAction = () => async (dispatch) => {
    try {
        let res;
        const docRef = doc(db, "client", auth?.currentUser?.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            res = docSnap.data();
            
            // Convert Firestore Timestamps to serializable format
            res = convertTimestamps(res);
        }
        dispatch({
            type: "CLIENT_DATA",
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