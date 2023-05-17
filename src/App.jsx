import { Navbar } from "./components/Navbar";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div>
        <Navbar />
      </div>
      {/*instructions to use website*/}
      <div className="information">
        <h1>Hello, my name is Aldo and welcome to my portfolio website!!</h1>
        <br />
        <h3>This is a small ECommerce website.</h3>
        <br />
        <br />
        <p>
          <b>
            Above you can see 3 buttons (Instruction), (Shop), (Cart). Shop will
            take you to the main page where you can find our products. Please
            choose the product(s) you would like to add to the Cart.
          </b>
          <br />
          <br />
          <b>
            Then once you have at least one product added to the Cart, you can
            continue your purchase, otherwise you will see (Your shopping cart
            is empty).
          </b>
          <br />
          <br />
          <b>
            When you are on the (Cart) section you can edit the amount of
            devices to be purchased by clicking on (+) or (-) you will get
            automatically the price to be paid.
          </b>

          <br />
          <br />
          <b>
            After that you can proceed to click on checkout, there fill the form
            so that we can send your package. Check all the information is
            correct and click on (Proceed to make the payment.). You will get an
            alert that you will get redirected to make your payment.
          </b>
        </p>
        <br />
        <br />
        <h1>
          ¡Hola, mi nombre es Aldo y bienvenido al sitio web de mi portafolio!
        </h1>
        <br />
        <h3>Este es un pequeño sitio web de comercio electrónico.</h3>
        <br />
        <br />
        <p>
          <b>
            Arriba puede ver 3 botones (Instructions), (Shop), (Cart). Shop lo
            llevará a la página principal donde podrá encontrar nuestros
            productos. Por favor elija los productos que desea agregar al
            carrito.
          </b>
          <br />
          <br />
          <b>
            Luego, una vez que haya agregado al menos un producto al carrito,
            puede continúar con tu compra, de lo contrario verás (Your shopping
            cart is empty).
          </b>
          <br />
          <br />
          <b>
            Cuando esté en la sección (Cart) puede editar la cantidad de
            productos a comprar haciendo clic en (+) o (-) obtendrá
            automáticamente el precio a pagar.
          </b>

          <br />
          <br />
          <b>
            Después de eso, puede proceder a hacer clic en Checkout, allí
            rellene el formulario para que podamos enviar su paquete. Compruebe
            que toda la información es corregir y hacer clic en (Proceed to make
            the payment). obtendrás un alerta de que será redirigido para
            realizar su pago.
          </b>
        </p>
      </div>
    </div>
  );
}
