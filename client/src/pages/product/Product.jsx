import './product.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useMemo, useEffect } from 'react';
import Chart from '../../components/chart/Chart';
import { userRequest } from '../../requestMethods';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { updateProduct } from '../../redux/apiCall';

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [pStats, setPStats] = useState([]);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);

  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );

  const MONTHS = useMemo(
    () => [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get('orders/income?pid=' + productId);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

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
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            _id: productId,
            ...inputs,
            img: downloadURL,
          };

          updateProduct(productId, product, dispatch);
          navigate('/products');
        });
      }
    );
  };

  return (
    <div className="product">
      <div className="titleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="addButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="topLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="topRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="infoItem">
              <span className="infoKey">id:</span>
              <span className="infoValue">{product._id}</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">sales:</span>
              <span className="infoValue">4123</span>
            </div>
            <div className="infoItem">
              <span className="infoKey">in stock:</span>
              <span className="infoValue">
                {product.inStock === true ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="formLeft">
            <label htmlFor="name">Product Name</label>
            <input
              name="title"
              id="name"
              type="text"
              placeholder={product.title}
              onChange={handleChange}
            />
            <label htmlFor="name">Product Description</label>
            <textarea
              name="desc"
              id="name"
              type="text"
              placeholder={product.desc}
              onChange={handleChange}
            />
            <label htmlFor="name">Product Price</label>
            <input
              name="price"
              id="name"
              type="text"
              placeholder={`$${product.price}`}
              onChange={handleChange}
            />
            <label htmlFor="inStock">In Stock</label>
            <select name="inStock" id="inStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="formRight">
            <div className="productUpload">
              {file ? (
                <img
                  src="https://c.tenor.com/l6xMWS1HEtIAAAAj/loading-load.gif"
                  alt=""
                  className="productUploadImg"
                />
              ) : (
                <img src={product.img} alt="" className="productUploadImg" />
              )}
              <label htmlFor="file">
                <PublishOutlinedIcon
                  className="productIcon"
                  style={{ cursor: 'pointer' }}
                />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: 'none' }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <button className="productButton" onClick={handleUpdateProduct}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
