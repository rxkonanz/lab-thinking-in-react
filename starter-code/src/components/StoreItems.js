import React, { Component, Fragment} from 'react';
import storeItems from '../data.json';

class StoreItems extends Component {

    state = {
        storeItems: storeItems
    }

    showItemsName = () => {
        let list = this.state.storeItems.data.map((item,i) => {
            return <tr><td>{item.name}</td><td>{item.price}</td></tr>
        })
        return list;
    }

    render() {
        return(
            <Fragment>{this.showItemsName()}</Fragment>
        )
    }
}


export default StoreItems;