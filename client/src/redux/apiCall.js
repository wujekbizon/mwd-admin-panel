import { publicRequest, userRequest } from '../requestMethods';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutUser,
  registerStart,
  registerSuccess,
  registerFailure,
} from './userRedux';
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from './productRedux';

import {
  getClientStart,
  getClientSuccess,
  getClientFailure,
  addClientStart,
  addClientSuccess,
  addClientFailure,
} from './clientRedux';

export const registerNewUser = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const response = await publicRequest.post('/auth/register', user);
    dispatch(registerSuccess(response.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post('/auth/login', user);
    dispatch(loginSuccess(response.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutUser());
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const response = await publicRequest.get('/products');
    dispatch(getProductSuccess(response.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const response = await userRequest.post('/products', product);
    dispatch(addProductSuccess(response.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

export const getClients = async (dispatch) => {
  dispatch(getClientStart());
  try {
    const res = await userRequest.get('/users');
    dispatch(getClientSuccess(res.data));
  } catch (err) {
    dispatch(getClientFailure());
  }
};
