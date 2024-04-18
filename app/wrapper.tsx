import { ReactNode } from 'react';
import store from '../store/store';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <>{children}</>;
};

export default Wrapper;