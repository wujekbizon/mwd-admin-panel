import './newProduct.scss';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import { useState } from 'react';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { addProduct } from '../../redux/apiCall';
import { useDispatch } from 'react-redux';

const NewProduct = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(','));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label htmlFor="name">Title</label>
          <input
            name="title"
            id="name"
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="name">Description</label>
          <textarea
            name="desc"
            id="name"
            type="text"
            placeholder="description..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="name">Price</label>
          <input
            name="price"
            id="name"
            type="number"
            placeholder="$123"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="name">Categories</label>
          <input
            id="name"
            type="text"
            placeholder="shirts"
            onChange={handleCat}
          />
        </div>
        <div className="addProductItem">
          <label htmlFor="stock">Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="addProductItem">
          <label htmlFor="file">
            Image
            <PublishOutlinedIcon className="uploadIcon" />
            Upload a photo
          </label>
          <input
            type="file"
            id="file"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button className="addProductButton" onClick={handleAddProduct}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
