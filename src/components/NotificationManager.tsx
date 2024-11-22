import { useState } from 'react';

const NotificationManager = () => {
  const [subscribed, setSubscribed] = useState(false);

  const toggleSubscription = () => {
    setSubscribed((prev) => !prev);
    alert(subscribed ? 'Unsubscribed from notifications' : 'Subscribed to notifications');
  };

  return (
    <button onClick={toggleSubscription}>
      {subscribed ? 'Unsubscribe from Notifications' : 'Subscribe to Notifications'}
    </button>
  );
};

export default NotificationManager;
