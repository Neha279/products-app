import { render, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { shallow } from 'enzyme';

const mockStore = configureMockStore();
const store = mockStore({});

describe("App Component", () => {
    it("should render without throwing an error", () => {
      const app = shallow(
        <Provider store={store}>
            <App> </App>
        </Provider>
    ).dive();
        expect(
            app.exists(<div>Market Place</div>)
        ).not.toBeNull();
    });
});