import { createBrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header';
import { Home, Login, Menu, Register, Cart, CheckOut, CompletePayment, Admin } from '../containers';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Home />
            </>
        ),
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/cardapio',
        element: (
            <>
                <Header />
                <Menu />
            </>
        ),
    },
    {
        path: '/carrinho',
        element: (
            <>
                <Header />
                <Cart />
            </>
        ),
    },
    {
        path: '/checkout',
        element: (
            <>
                <Header />
                <CheckOut />
            </>
        ),
    },
    {
        path: '/complete',
        element: <CompletePayment />,
    },

    {
        path: '/pedidos',
       element: (
           <PrivateRoute isAdmin={true}>
               <Admin />
           </PrivateRoute >
       )},


]);

