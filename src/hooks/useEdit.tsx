import { doc, updateDoc } from "firebase/firestore";
import { projectFirestore } from "../firebase/config";
import Doc from "../types/Doc";

const useEdit = (
  taginput: string,
  selectedImg: Doc,
  setEdit: (active: boolean) => void
) => {
  return async () => {
    const storageRef = doc(projectFirestore, "images", selectedImg.id);
    await updateDoc(storageRef, { tag: taginput });
    setEdit(false);
  };
};

export default useEdit;
