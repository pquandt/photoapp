import { getStorage, ref, deleteObject } from "firebase/storage";
import {
  getDocs,
  doc,
  deleteDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
import { projectFirestore } from "../firebase/config";
const useDelete = (selectedImg: string, setSelectedImg: any) => {
  return async () => {
    //delete databse entry
    const storageRef = collection(projectFirestore, "images");
    const q = query(storageRef, where("url", "==", selectedImg));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docs) => {
      deleteDoc(doc(projectFirestore, "images", docs.id));
    });

    //delete File part
    const storage = getStorage();

    // Create a reference to the file to delete
    const desertRef = ref(storage, selectedImg);

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
