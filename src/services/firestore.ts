import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore"

export async function salvarPost(data:any){
  try {
    const result = await addDoc(collection(db, 'questionario'), data)
    return result.id
  } catch(error){
    console.log('Erro add post:', error)
    return 'erro'
  }
}
