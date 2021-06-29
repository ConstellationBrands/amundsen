// Copyright Contributors to the Amundsen project.
// SPDX-License-Identifier: Apache-2.0

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { resetSearchState } from 'ducks/search/reducer';
import { UpdateSearchStateReset } from 'ducks/search/types';

import { ResourceType } from 'interfaces';
import GridResourceList from 'components/ResourceList/GridResourceList/'

import './styles.scss';

export interface DispatchFromProps {
    searchReset: () => UpdateSearchStateReset;
}

export type CardViewProps = DispatchFromProps & RouteComponentProps<any>;
export interface CardViewState {
    cards,
    cardCount
}

/*
export const getLink = (table, logging) =>
  `/table_detail/${table.cluster}/${table.database}/${table.schema}/${table.name}` +
  `?index=${logging.index}&source=${logging.source}`;
*/

export class CardView extends React.Component<CardViewProps, CardViewState> {

    constructor(props) {
        super(props);

        this.state = { cards: [], cardCount: 0 };
    }

    componentDidMount() {
        this.GetSources();
    }

    GetSources() {
        const count = 12;
        this.setState({ cardCount: count })
        // for (let i = 0; i < count; i++) {

        //     fetch(`http://asdfast.beobit.net/api/?type=word&length=15`)
        //         .then(response => response.json())
        //         .then(data => {
        //             this.setState(({ cards }) => ({
        //                 cards: [
        //                     ...cards.slice(0, i),
        //                     {
        //                         type: ResourceType.grid,
        //                         title: `Lorem Ipsum`,
        //                         author: `Quam Nemo`,
        //                         subtitle: data.text,
        //                         href: `/home`,
        //                         photo: `https://source.unsplash.com/random?sig=${Math.floor(Math.random() * 10000)}`,
        //                     },
        //                     ...cards.slice(i + 1)
        //                 ]
        //             }))
        //         })
        //         .catch(e => console.error(e))
        // }
    }

    render() {
        let { cards, cardCount } = this.state;

        cards = [
            {
                type: ResourceType.grid,
                title: `Wegmans Loyalty data`,
                author: `Aimia-Kantar`,
                subtitle: `Wegmans Loyalty data for use as a reporting tool`,
                href: `/home`,
                photo: `https://images.unsplash.com/photo-1506617420156-8e4536971650?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
            },
            {
                type: ResourceType.grid,
                title: `New Zealand Loyality Data`,
                author: `Foodstuffs`,
                subtitle: `New Zealand Loyality Data via FoodStuffs for use as a reporting tool`,
                href: `/home`,
                photo: `https://images.unsplash.com/photo-1547314283-befb6cc5cf29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60`,
            },
            {
                type: ResourceType.grid,
                title: `BBX Loyal Data`,
                author: `Crowdtwist (BBX)`,
                subtitle: `BBX Loyal Data via Crowdtwist for use as a reporting tool`,
                href: `/home`,
            },
            {
                type: ResourceType.grid,
                title: `Store Insights`,
                author: `Foursquare`,
                subtitle: `Store Insights from Foursquare API within account segmentation`,
                href: `/home`,
                photo: `https://media.istockphoto.com/photos/grocery-store-liquor-department-picture-id506018790?b=1&k=6&m=506018790&s=170667a&w=0&h=vRNwig75SD8OKnWRJqPzB8kytZ27mqANSW7295BAjEM=`,
            },
            {
                type: ResourceType.grid,
                title: `Consumer Profiles`,
                author: `Ground Signal`,
                subtitle: `Insight Tool via Ground Signal for consumer identification`,
                href: `/home`,
                photo: `https://images.unsplash.com/photo-1438557068880-c5f474830377?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjd8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80`,
            },
            {
                type: ResourceType.grid,
                title: `Modelo User List`,
                author: `Angela McMahon`,
                subtitle: `Modelo User List maintained by Angela McMahon for consumer identification.`,
                href: `/home`,
                photo: `https://d2z1w4aiblvrwu.cloudfront.net/ad/dSJm/default-large.jpg`,
            },
            {
                type: ResourceType.grid,
                title: `Grower Management`,
                author: `JDE Grower Management instance`,
                subtitle: `Management of Grower Financial Activities`,
                href: `/home`,
            },
            {
                type: ResourceType.grid,
                title: `Scarborough`,
                author: `Scarborough`,
                subtitle: `Nielsen Scarborough’s qualitative local market research`,
                href: `/home`,
                photo: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYWwlMjBkYXRhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80`,
            },
            {
                type: ResourceType.grid,
                title: `IWSR`,
                author: `IWSR`,
                subtitle: `US Bev Al category (incl vol and consumer data)`,
                href: `/home`,
            },
            {
                type: ResourceType.grid,
                title: `Brands Reviews`,
                author: `PowerReviews`,
                subtitle: `Brand reviews from specific Retailers`,
                href: `/home`,
                photo: `https://www.thedrinksbusiness.com/content/uploads/2020/11/44782716_14968050845939_rId9-1.jpg`,
            },
            {
                type: ResourceType.grid,
                title: `Coupon Redemption Data`,
                author: `InMar`,
                subtitle: `Coupon Redemption Data via InMar`,
                href: `/home`,
                photo: `https://images.unsplash.com/photo-1577538928305-3807c3993047?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ`,
            },
            {
                type: ResourceType.grid,
                title: `POS data`,
                author: `Maverik`,
                subtitle: `POS Beer data only for conv store in Pac NW`,
                href: `/home`,
                photo: `https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80`,
            },
        ]

        return (
            <main className="cardview-container">
                <GridResourceList totalItemsCount={cardCount} slicedItems={cards} />
            </main>
        );
    }
}

export const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators(
        {
            searchReset: () => resetSearchState(),
        },
        dispatch
    );

export default connect<DispatchFromProps>(null, mapDispatchToProps)(CardView);
