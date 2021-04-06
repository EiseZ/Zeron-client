import styles from "../styles/Navbar.module.css";
import PropTypes from "prop-types";

export default function Navbar(props) {
  
  const items = [];
  props.items.forEach(item => {
      items.push(<a className={styles.item} href={item.toLowerCase()}>{item}</a>);
  });
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src="/vercel.svg" alt="Logo"/>
      {items}
    </div>
  );
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}