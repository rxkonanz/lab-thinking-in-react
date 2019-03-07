import React, { Component } from 'react';
import StoreItems from './StoreItems';

class ItemsTable extends Component {

    render() {
        return(
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>idk</td>
                    <td>cool</td>
                </tr>
                <StoreItems />
            </table>
        )
    }
}

export default ItemsTable;