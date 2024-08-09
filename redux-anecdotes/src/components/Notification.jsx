import { useSelector } from 'react-redux';

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  };

  const notification = useSelector(store => store.notification);

  return (
    <div style={style}>
      {notification}
    </div>
  );
};

export default Notification;