import React from 'react';
import {HeadFrame} from './Frame';
import Title from '../Title';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export function Header() {
    return (
        <HeadFrame>
            <Title text={`Collage Site`} />
        </HeadFrame>
    );
}