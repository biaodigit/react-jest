import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';



Enzyme.configure({ adapter: new Adapter() });

test('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText('hello world');
  // expect(linkElement).toBeInTheDocument();
  const wrapper = shallow(<App/>)
  expect(wrapper.find('[data-test="container"]')).toExist()
  expect(wrapper.find('[data-test="container"]')).toHaveProp('title','111')
});
