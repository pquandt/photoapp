import { doc, updateDoc } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";

const useEdit = (
  taginput: string,
  selectedImg: string,
  setEdit: (active: boolean) => void
) => {
  return async () => {
    const storageRef = doc(projectFirestore, "images", selectedImg[1]);
    await updateDoc(storageRef, { tag: taginput });
    setEdit(false);
  };
};

export default useEdit;
