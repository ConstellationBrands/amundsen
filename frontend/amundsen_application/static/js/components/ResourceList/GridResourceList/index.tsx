// Copyright Contributors to the Amundsen project.
// SPDX-License-Identifier: Apache-2.0

import * as React from 'react';
import { GridResource, ResourceType } from '../../../interfaces';
import * as Constants from '../constants';

import '../styles.scss';
import GridListItem from 'components/ResourceListItem/GridListItem';

export interface GridResourceListProps {
    slicedItems: GridResource[];
    totalItemsCount: number;
}

class GridResourceList extends React.Component<GridResourceListProps> {
    render() {
        const {
            totalItemsCount,
            slicedItems,
        } = this.props;

        return (
            <div className="grid-resource-list">
                {slicedItems.map((item, idx) => {
                    return <GridListItem gridItem={item} key={idx}></GridListItem>
                })}
            </div>
        );
    }
}

export default GridResourceList;
