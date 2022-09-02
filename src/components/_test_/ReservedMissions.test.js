import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import store from "../../redux/configureStore";
import ReservedMissions from "../ReservedMissions/ReservedMissions";

describe("Reserved missions test", () => {
  test("snapshot", () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <ReservedMissions />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});