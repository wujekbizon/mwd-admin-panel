import './product.scss';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useMemo, useEffect } from 'react';
import Chart from '../../components/chart/Chart';
import { userRequest } from '../../requestMethods';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split('/')[2];
  const [pStats, setPStats] = useState([]);

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
              <span className="infoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="formLeft">
            <label htmlFor="name">Product Name</label>
            <input id="name" type="text" placeholder={product.title} />
            <label htmlFor="name">Product Description</label>
            <textarea id="name" type="text" placeholder={product.desc} />
            <label htmlFor="name">Product Price</label>
            <input id="name" type="text" placeholder={`$${product.price}`} />
            <label htmlFor="inStock">In Stock</label>
            <select name="inStock" id="inStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="formRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <PublishOutlinedIcon className="productIcon" />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
