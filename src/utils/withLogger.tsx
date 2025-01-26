import React, { useEffect } from 'react';

// Higher-Order Component
const withLogger = <P extends object>(Component: React.ComponentType<P>) => {
  const WrappedComponent: React.FC<P> = (props) => {
    useEffect(() => {
      console.log(`${Component.name} mounted`);
      return () => {
        console.log(`${Component.name} unmounted`);
      };
    }, []);

    return <Component {...props} />;
  };

  return WrappedComponent;
};

export default withLogger;
