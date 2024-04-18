import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';


//criação das rotas das páginas

const router = createBrowserRouter([
  {
    path:"/",
    element: <LoginPage />,
  },
  {
    path:'/cadastro',
    element: <SignupPage/>,
  }
]);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
