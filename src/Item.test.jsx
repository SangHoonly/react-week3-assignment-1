import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

describe('Item ', () => {
  context('when task exist', () => {
    it('display task', () => {
      const task = {
        id: 1,
        title: '뭐라도 하기',
      };

      const handleClick = jest.fn();

      const { container, getByText } = render((
        <Item
          task={task}
          onClickDelete={handleClick}
        />
      ));

      expect(container).toHaveTextContent('뭐라도 하기');
      expect(container).toHaveTextContent('완료');

      expect(handleClick).not.toBeCalled();

      fireEvent.click(getByText('완료'));

      expect(handleClick).toBeCalledWith(1);
    });
  });
});
