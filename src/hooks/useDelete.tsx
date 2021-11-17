import { getStorage, ref, deleteObject } from "firebase/storage";
import {
  getDocs,
  doc,
  deleteDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import Doc from "../types/Doc";
import { Dispatch, SetStateAction } from "react";
import { projectFirestore } from "../firebase/config";

const useDelete = (
  selectedImg: Doc,
  setSelectedImg: Dispatch<SetStateAction<Doc | null>>
) => {
  return async () => {
    //delete databse entry
    const storageRef = collection(projectFirestore, "images");
    const q = query(storageRef, where("url", "==", selectedImg.url));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docs) => {
      deleteDoc(doc(projectFirestore, "images", docs.id));
    });

    //delete File part
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, selectedImg.url);

    deleteObject(desertRef)
      .then(() => {
        console.log("File deleted Succesful");
        setSelectedImg(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default useDelete;
