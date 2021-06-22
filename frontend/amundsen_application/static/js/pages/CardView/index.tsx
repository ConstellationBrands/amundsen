// Copyright Contributors to the Amundsen project.
// SPDX-License-Identifier: Apache-2.0

import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import { resetSearchState } from 'ducks/search/reducer';
import { UpdateSearchStateReset } from 'ducks/search/types';

// imports to be implemented 
/*
import MyBookmarks from 'components/Bookmark/MyBookmarks';
import Breadcrumb from 'components/Breadcrumb';
import PopularTables from 'components/PopularTables';
import SearchBar from 'components/SearchBar';
import TagsListContainer from 'components/Tags';
import Announcements from 'components/Announcements';

import { announcementsEnabled } from 'config/config-utils';

import { SEARCH_BREADCRUMB_TEXT, CARDVIEW_TITLE } from './constants';
*/

import './styles.scss';

export interface DispatchFromProps {
    searchReset: () => UpdateSearchStateReset;
}

export type CardViewProps = DispatchFromProps & RouteComponentProps<any>;

export class CardView extends React.Component<CardViewProps> {

    render() {
        return (
            <main className="container cardview">
                <h1>CardView</h1>
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
