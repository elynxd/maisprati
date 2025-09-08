export const Product = (props) => {
  return (
    <>
        <h2>Product Name: {props.name}</h2>
        <p>Price: ${props.price}</p>
        <p>Description: {props.description}</p>
    </>
  );
}