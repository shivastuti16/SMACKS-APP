type MenuItemProps = {
    name: string;
    price: string;
    description: string;
    allergyInfo: string;
    image: string;
  };
  
  const MenuItem = ({ name, price, description, allergyInfo, image }: MenuItemProps) => (
    <div className="menu-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Allergy Info: {allergyInfo}</p>
    </div>
  );
  
  export default MenuItem;
  