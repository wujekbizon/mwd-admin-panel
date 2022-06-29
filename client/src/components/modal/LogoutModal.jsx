import './logoutModal.scss';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../redux/modalRedux';
import { logout } from '../../redux/apiCall';
import { useNavigate } from 'react-router-dom';

const LogoutModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    logout(dispatch);
    dispatch(closeModal());
    navigate('/login');
  };
  return (
    <aside className="logoutModal">
      <div className="modal">
        <h3 className="title">Are you sure you want to log out?</h3>
        <div className="buttonContainer">
          <button className="buttonConfirm" onClick={handleLogout}>
            Confirm
          </button>
          <button
            className="buttonCancel"
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default LogoutModal;
