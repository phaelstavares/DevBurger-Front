import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useCart } from "../../hooks/CartContext";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice"; 
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { Container} from "./styles";


export function CartResume() {

  const [finalPrice, SetFinalPrice] = useState(0);
  const [deliveryTax] = useState(500);
  const {cartProducts} = useCart();
  const navigate = useNavigate();

useEffect(()=>{ 
    const sumAllItems = cartProducts.reduce((acc, current)=> {
        return current.price * current.quantity + acc;
    },0)

    SetFinalPrice(sumAllItems)

},[cartProducts]);



const submitOrder = async () => {
    const products = cartProducts.map((product) => {
        return {id: product.id, 
            quantity: product.quantity, 
            price: product.price};
    });

    try{
        const {data} = await api.post('/create-payment-intent',{products});

        navigate('/checkout',{
            state: data,
        })

    } catch(err){
       
        toast.error('Tente novamente!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            
            });

        }
//
};



    return(
        <div>
        <Container>
            <div className="container-top">
             <h2 className="title">Resumo do pedido</h2>
             <p className="items">Itens</p>
             <p className="items-price">{formatPrice(finalPrice)}</p>
             <p className="delivery-tax">Taxa de entrega</p>
             <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
            </div>

            <div className="container-bottom">
                <p>Total</p>
                <p>{formatPrice(finalPrice + deliveryTax)}</p>
            </div>
        </Container>
        
        <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>

);

}