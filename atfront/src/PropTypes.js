/* 
All about propTypes
productArray's properties need to be displayed but one of the objects in the array has missing properties
Using both defaultProps and short circuit operator to solve the problem
+ inline styling
 */
import PropTypes from 'prop-types';

const productArray = [
    {
        id: '1',
        name: 'sofa',
        price: 400,
        image: {
            url: '/images/sofa.jpg'
        }
    },
    {
        id: '2',
        name: 'bed',
        price: 600,
        image: {
            url: '/images/bed.jpg'
        }
    },
    {
        id: '3',
        name: 'drawer',
        /* price: 200,
        image: {
            url: '/images/drawer.jpg'
        } */
    }
];
const defaultIMG = '/images/default.jpg';
const ProductPT = () => {
    return(
        <>
            <h1>PropTypes</h1>
            {
                productArray.map((product)=>{
                    return(
                        <Products key={product.id} {...product} />
                    );
                })
            }
        </>
    );
};
export default ProductPT;

const Products = ({name, price, image}) => {
    const url = image && image.url;
    return(
        <article>
            <p>---------------</p>
            <img src={url || defaultIMG} alt={name || 'default name'} style={{width:'300px', height:'300px'}} />
            <p style = {{fontSize:'50px'}}>{name}</p>
            <p style={{fontSize:'50px'}}>{price}</p>
            <p>---------------</p>
        </article>
    );
};

Products.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.object.isRequired
};

Products.defaultProps = {
    name: 'default name',
    price: 150,
};