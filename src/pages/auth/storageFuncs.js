import { ref, listAll } from "firebase/storage"
import { storage } from "firebase"

function uploadImage(file, imageName) {
  const projectRef = ref(storage, `/projects/${imageName}`)

  uploadBytes(projectRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!');
  })
}

function updateImage(file, imageName) {
  deleteImage(imageName)
  uploadImage(file, imageName)
}

function getImage(imageName) {
  const projectRef = ref(storage, `/projects/${imageName}`)

  getDownloadURL(projectRef)
    .then((url) => { })
    .catch((error) => {
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });

  // If above not working

  // Create a reference under which you want to list
  const projectsRef = ref(storage, 'files/uid');

  // Find all the prefixes and items.
  listAll(projectsRef)
    .then((res) => {
      res.prefixes.forEach((folderRef) => {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
      });
      res.items.forEach((projectRef) => {
        // All the items under listRef.
      });
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
}
function deleteImage(imageName) {
  const projectRef = ref(storage, `/projects/${imageName}`)

  deleteObject(projectRef).then(() => {
    // File deleted successfully
  }).catch((error) => {
    // Uh-oh, an error occurred!
  })
}


export {
  uploadImage,
  updateImage,
  getImage,
  deleteImage
}