import { Navigate } from "react-router-dom";
import { useAppSelector } from "../assets/store";

// interface Props{
//   children: <HTML
// }

export function Protected({ children }: { children: React.ReactNode }) {
  const loggedIn = useAppSelector((state) => state.authentication.loggedIn);
  if (!loggedIn) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
}

// console.log('LoggedIn ko value',loggedIn);
// const [flag, setFlag] = useState(false);
// console.log("Flag ko value", flag);
/*
useEffect(() => {
  console.log("Protected route mounted");
  
  return () => {
    console.log("Protected route unmounted");
  };
}, [loginStatus]);
*/
