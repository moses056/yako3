import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

export const jobDetailsAction = (id) => async (dispatch) => {
  try {
    let res;
    const docRef = doc(db, "job", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      res = docSnap.data();
      
    
    // Convert Firestore Timestamps to serializable format
    if (res) {
      res = convertTimestamps(res);
    }
    
    dispatch({
      type: "JOB_DATAILS",
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
