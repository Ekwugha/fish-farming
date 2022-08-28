import React from 'react';
import CardBody from '../card/card.component';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import CustomButton from '../button/button.component';

export class MenuData extends React.Component {
    constructor() {
        super();
       
        this.state = {
            sections: [
                {
                  id: 1,
                  category: 'CatFish',
                  image: "assest/catfish.png",
                  title: 'CatFish',
                  price: '₦ 2200.00',
                  add: <button> Add To Cart  </button>
                },
                {
                    id: 2,
                    category: 'Salmon',
                    image: "assest/salmon.jpg",
                    title: 'Salmon',
                    price: '₦ 1500.00',
                    add: <button> Add To Cart  </button>
                },
                  {
                    id: 3,
                    category: 'Tuna',
                    image: "assest/tuna.jpg",
                    title: 'Tuna',
                    price: '₦ 2000.00',
                    add: <button> Add To Cart  </button>
                  },
                  {
                    id: 4,
                    category: 'Mackerel',
                    image: "assest/mackerel.jpg",
                    title: 'Mackerel',
                    price: '₦ 2500.00',
                    add: <button> Add To Cart  </button>
                  },
                  {
                    id: 5,
                    category: 'Tilapia',
                    image: "assest/tilapia.jpg",
                    title: 'Tilapia',
                    price: '₦ 1200.00',
                    add: <button> Add To Cart  </button>
                  },
                  {
                    id: 6,
                    category: 'Titus',
                    image: "assest/titus.jpg",
                    title: 'Titus',
                    price: '₦ 1500.00',
                    add: <button> Add To Cart  </button>
                  },
            ]
              
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.state.sections.map (({ id, title, image, price, add, category }) => (
                    <CardBody key={id} title={ title } image={image} add={add} category={category} price={price} />
                ))} 
            </React.Fragment>
        )
    }
    

}
export default MenuData;