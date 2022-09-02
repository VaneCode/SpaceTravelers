import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import store from "../../redux/configureStore";
import RocketsList from "../RocketsList/RocketsList";

describe("Rocket list test", () => {
  test("snapshot", () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <RocketsList />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});