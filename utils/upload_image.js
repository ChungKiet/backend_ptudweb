import { storage } from '../db/firebase';

handleUpload = (image) => {
   const name = image.name + '-' + Date.now();
   const uploadTask = storage.ref(`images/${name}`).put(image);
   uploadTask.on('state_changed',
      (snapshot) => {
         // progrss function ....
         // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
         // this.setState({ progress });
      },
      (error) => {
         // error function ....
         console.log(error);
      },
      () => {
         // complete function ....
         storage.ref('images').child(name).getDownloadURL().then(url => {
            console.log(url);
            return url
            // document get element and then set
         })
      });
}