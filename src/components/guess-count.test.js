import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './board';

describe('<GuessCount />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessCount />);
    });
});