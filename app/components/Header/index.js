import React from 'react';
import {HeadFrame} from './Frame';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export function Header() {
    return (
        <HeadFrame>
            <FormattedMessage {...messages.title}/>
        </HeadFrame>
    );
}