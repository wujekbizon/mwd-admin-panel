import './newUser.scss';

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="john@gmail.com" />
        </div>
        <div className="newUserItem">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" placeholder="+1 234 456 67" />
        </div>
        <div className="newUserItem">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" placeholder="New Jersey , USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="male" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="female" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="other" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label htmlFor="active">Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
