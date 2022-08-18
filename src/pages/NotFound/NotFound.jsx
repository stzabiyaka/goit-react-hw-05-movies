import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => navigate('/', { replace: true }), [navigate]);
};

export default NotFound;
