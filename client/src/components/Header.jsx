import PropTypes from "prop-types";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Header = ({ user }) => {
    return (
        <div className="flex w-full flex-row justify-end border-b border-gray-200 px-24 py-6">
            {user ? <LogoutButton /> : <LoginButton />}
            {user && user.img && <img src={user.img} alt="User Avatar" className="ml-4 h-10 w-10 rounded-full" />}
        </div>
    );
};

Header.propTypes = {
    user: PropTypes.shape({
        user_id: PropTypes.number.isRequired,
        username: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }),
};

Header.defaultProps = {
    user: null,
};

export default Header;
