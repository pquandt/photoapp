import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../firebase/config';
import { collection, serverTimestamp, doc, setDoc } from '@firebase/firestore';
import { ref, getDownloadURL, uploadBytesResumable  } from '@firebase/storage';



const useStorage = (file: File) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = ref(projectStorage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file)
    const newImageRef = doc(collection(projectFirestore,"images"))
    
    uploadTask.on('state_changed',
    (snapshot:any) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err: any) => {
      setError(err);
    }, async () => {
      const url:any = await getDownloadURL(storageRef);
      const timestamp = serverTimestamp()
      const data = {url: url, createdAt: timestamp}
     await setDoc(newImageRef, data)
     setUrl(url);
    }
    );
  }, [file]);

  return { progress, url, error };
}

export default useStorage;