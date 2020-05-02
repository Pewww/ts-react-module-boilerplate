// Test code for your React Component

import React from 'react';
import {render} from '@testing-library/react';
import Comp from '../';

describe('Comp 컴포넌트 렌더링 테스트', () => {
  it('Comp 컴포넌트 렌더링 시 "Hello React Module!" 텍스트가 출력되어야 한다.', () => {
    const {getByText} = render(<Comp/>);
    const divElement = getByText('Hello React Module!');

    expect(divElement).toBeInTheDocument();
  });
});
