import { db } from "../config/firebase";
import { collection, addDoc, query, onSnapshot } from 'firebase/firestore';

export async function salvarPost(data: any) {
  try {
    const result = await addDoc(collection(db, 'questionario'), data)
    return result.id
  } catch (error) {
    console.log('Erro add post:', error)
    return 'erro'
  }
}

export async function questionarioCompleto(setposts: any) {
  const ref = query(collection(db, "questionario"))
  onSnapshot(ref, (querySnapshot) => {
    const posts: any[] = []
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() })
    })
    setposts(posts)
  })
}