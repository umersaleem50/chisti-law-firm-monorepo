import { render } from '@testing-library/react';

import GenerateUi from './generate-ui';

describe('GenerateUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GenerateUi />);
    expect(baseElement).toBeTruthy();
  });
});
