// Copyright Contributors to the Amundsen project.
// SPDX-License-Identifier: Apache-2.0

import * as React from 'react';

import { GridResource } from 'interfaces';

import GraphicCard from 'components/GraphicCard';

export interface GridListItemProps {
    gridItem: GridResource;
}

const DEFAULT_PHOTO = 'https://t3.ftcdn.net/jpg/03/06/93/82/360_F_306938279_ezPVDtcNE0Q2Z1JOFPfYowmvFbzp1T4W.jpg'

const GridListItem: React.FC<GridListItemProps> = ({ gridItem }) => (
    <div className="grid-item">
        <GraphicCard
            title={gridItem.title}
            author={gridItem.author}
            subtitle={gridItem.subtitle}
            photo={gridItem.photo ? gridItem.photo : DEFAULT_PHOTO}
            href={gridItem.href}
        />
    </div>
);
export default GridListItem;
