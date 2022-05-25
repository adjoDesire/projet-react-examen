import '../styles/Cart.css';

function Cart(){
    const prix1 = 8
    const prix2 = 10
    const prix3 = 15

    return (<div className="lmj-cart">
        <h2>Panier</h2>
        <ul> 
            <li> monstera : { prix1} F cfa </li>
            <li> lierre : { prix2} F cfa </li>
            <li> bouquet de fleurs : { prix3} F cfa </li>
            Total { prix1 + prix2 + prix3} F cfa
        </ul>
    </div>)

}

export default Cart