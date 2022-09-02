import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import Mission from "../Mission/Mission";
import store from "../../redux/configureStore"

describe("mission test", () => {
  test("snapshot", () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
