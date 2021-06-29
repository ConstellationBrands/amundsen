// Copyright Contributors to the Amundsen project.
// SPDX-License-Identifier: Apache-2.0

import * as React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export interface GraphicCardProps {
    title?: string;
    author: string;
    subtitle?: string;
    photo?: string;
    copy?: string | JSX.Element;
    isLoading?: boolean;
    href?: string;
    onClick?: (e: React.SyntheticEvent) => void;
}

const CardShimmerLoader: React.FC = () => (
    <div className="card-shimmer-loader">
        <div className="card-shimmer-row shimmer-row-line--1 is-shimmer-animated" />
        <div className="card-shimmer-row shimmer-row-line--2 is-shimmer-animated" />
        <div className="card-shimmer-row shimmer-row-line--3 is-shimmer-animated" />

        <div className="card-shimmer-loader-body">
            <div className="card-shimmer-row shimmer-row-line--4 is-shimmer-animated" />
            <div className="card-shimmer-row shimmer-row-line--5 is-shimmer-animated" />
        </div>
    </div>
);

const GraphicCard: React.FC<GraphicCardProps> = ({
    title,
    author,
    subtitle,
    href,
    photo,
    isLoading = false,
}: GraphicCardProps) => {
    let card;
    let cardContent = (
        <div className="graphic-card">
            {photo && <img src={photo} alt={title} />}
            <div className="graphic-card-content">
                {title && <h2 className="card-title">{title}</h2>}
                {author && <h4 className="card-author">By {author}</h4>}
                {subtitle && <h3 className="card-subtitle">{subtitle}</h3>}
            </div>
        </div>
    );

    if (isLoading) {
        cardContent = <CardShimmerLoader />;
    }

    if (href) {
        card = (
            <Link
                className={`is-link ${isLoading ? 'is-loading' : ''}`}
                to={href}
                style={{ textDecoration: 'none' }}
            >
                {cardContent}
            </Link>
        );
    } else {
        card = (
            <article className={`${isLoading ? 'is-loading' : ''}`}>
                {cardContent}
            </article>
        );
    }

    return <>{card}</>;
};

export default GraphicCard;
