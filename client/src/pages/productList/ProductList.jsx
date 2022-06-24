import './productList.scss';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteProduct, getProducts } from '../../redux/apiCall';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    {
      field: 'product',
      headerName: 'Product',
      width: 250,
      renderCell: (params) => {
        return (
          <div className="renderProduct">
            <img className="productImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: 'inStock',
      headerName: 'Stock',
      width: 90,
      renderCell: (params) => {
        return <>{params.row.inStock === true ? 'Yes' : 'No'}</>;
      },
    },

    {
      field: 'price',
      headerName: 'Price',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 90,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link className="link" to={`/product/${params.row._id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className="productDeleteIcon"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      {products.length === 0 ? (
        ''
      ) : (
        <div className="gridContainer">
          <DataGrid
            className="dataGrid"
            rows={products}
            columns={columns}
            pageSize={13}
            rowsPerPageOptions={[13]}
            checkboxSelection
            disableSelectionOnClick
            getRowId={(row) => row._id}
          />
        </div>
      )}
      <div className="btnContainer">
        <Link className="link" to="/newproduct">
          <button className="createBtn">Create</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
