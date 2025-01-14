import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useUser } from '../hooks/UserContext';

export function PrivateRoute({ children, isAdmin }) {
  const { userInfo, loading } = useUser();

  if (loading) {
    return <div>Caregando...</div>;
  }

  if (!userInfo){
return <Navigate to="/" replace />;
  }

  if (isAdmin && !userInfo.admin) {
    return <Navigate to="/" replace />;
  }


return children;
}
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isAdmin: PropTypes.bool
};

export default PrivateRoute;
