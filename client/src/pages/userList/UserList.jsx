import './userList.scss';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../../redux/apiCall';

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) =>
    state.client.users.filter((user) => user.username !== 'admin')
  );

  const admin = useSelector((state) => state.user.currentUser?.isAdmin);

  useEffect(() => {
    getClients(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    // setData(users.filter((item) => item.id !== id));
  };

  const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    {
      field: 'user',
      headerName: 'User',
      width: 250,
      renderCell: (params) => {
        return (
          <div className="renderUser">
            <img src={params.row.img} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },

    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row._id}`}>
              <button className="userListEdit">Edit</button>
            </Link>
            {admin && (
              <DeleteOutlineOutlinedIcon
                className="userDeleteIcon"
                onClick={() => handleDelete(params.row._id)}
              />
            )}
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        className="dataGrid"
        rows={users}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default UserList;
