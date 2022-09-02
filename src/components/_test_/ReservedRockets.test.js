import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import store from "../../redux/configureStore";
import ReservedRockets from "../ReservedRockets/ReservedRockets";

describe("Reserved rockets", () => {
  test("snapshot", () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <ReservedRockets />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});