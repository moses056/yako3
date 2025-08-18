import { auth, db } from "../firebase";
import { collection, doc, addDoc, setDoc, updateDoc, getDocs, getDoc, deleteDoc } from "firebase/firestore";

// Create New Document - auto id
const createDocument = (collectionName, data) => {
  return addDoc(collection(db, collectionName), data)
    .then((res) => {
      console.log(
        "Document added in " + collectionName + " collection with id: " + res.id
      );
      collectionName === "job" && localStorage.setItem("docID", res.id);
      return res;
    })
    .catch((error) => {
      console.error("Error creating document:", error);
      throw error;
    });
};

// Create New Document - auto id
export const createDocumentWithId = (collectionName, data, id) => {
  if (id) {
    return setDoc(doc(db, collectionName, id), data)
      .then(() => {
        console.log("Document added in " + collectionName);
        return true;
      })
      .catch((error) => {
        console.error("Error creating document with ID:", error);
        throw error;
      });
  }
  return Promise.reject(new Error("No ID provided"));
};

// Update User Data
export const updateUserData = (collectionName, newData) => {
  return updateDoc(doc(db, collectionName, auth.currentUser.uid), newData)
    .then(() => {
      console.log("user data updated");
      return true;
    })
    .catch((error) => {
      console.error("Error updating user data:", error);
      throw error;
    });
};

// Update Job
export const updateJob = (newData, docID) => {
  if (!docID) {
    return Promise.reject(new Error("No document ID provided"));
  }
  return updateDoc(doc(db, "job", docID), newData)
    .then(() => {
      console.log("job updated");
      return true;
    })
    .catch((err) => {
      console.error("Error updating job:", err);
      throw err;
    });
};

// get Collection Docs
export const getCollectionDocs = collectionName => {
  return getDocs(collection(db, collectionName))
    .then((snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    })
    .catch((error) => {
      console.error("Error getting collection docs:", error);
      throw error;
    });
};

// get Document by doc id
export const getDocumentByDocID = async (collectionName, docID) => {
  try {
    const docRef = doc(db, collectionName, docID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Document not found");
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw error;
  }
};

// new proposal
export const subCollection = (
  collectionName,
  subCollectionName,
  data,
  docId
) => {
  return addDoc(collection(db, collectionName, docId, subCollectionName), data)
    .then((res) => {
      console.log(res.id, "add new subCollection");
      return res;
    })
    .catch((e) => {
      console.error("Error adding subcollection:", e);
      throw e;
    });
};

export const deletesubCollection = (
  collectionName,
  subCollectionName,
  docId,
  docIds
) => {
  return deleteDoc(doc(db, collectionName, docId, subCollectionName, docIds))
    .then(() => {
      console.log("document deleted");
      return true;
    })
    .catch((e) => {
      console.error("Error deleting subcollection:", e);
      throw e;
    });
};

//getJobData
export const getJobData = async (jobId) => {
  try {
    const docRef = doc(db, "job", jobId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Job not found");
    }
  } catch (error) {
    console.error("Error getting job data:", error);
    throw error;
  }
};

export const savedjobs = (text, setText, id, user) => {
  if (text === "Saved Job") {
    return updateUserData("talent", { savedJobs: [...user?.savedJobs, id] })
      .then(() => {
        text = "Unsave Job";
        setText(text);
        console.log(user?.savedJobs?.length);
        return text;
      })
      .catch((error) => {
        console.error("Error saving job:", error);
        throw error;
      });
  } else {
    const updatedSavedJobs = user?.savedJobs?.filter((item) => item !== id) || [];
    return updateUserData("talent", { savedJobs: updatedSavedJobs })
      .then(() => {
        text = "Saved Job";
        setText(text);
        console.log(updatedSavedJobs);
        return text;
      })
      .catch((error) => {
        console.error("Error unsaving job:", error);
        throw error;
      });
  }
};

export const changeSavedJobsText = (text, setText, id, user) => {
  if (user?.savedJobs?.length > 0) {
    const isSaved = user?.savedJobs?.includes(id);
    text = isSaved ? "Unsave Job" : "Saved Job";
    setText(text);
  } else {
    text = "Saved Job";
    setText(text);
  }
  return text;
};

export default createDocument;