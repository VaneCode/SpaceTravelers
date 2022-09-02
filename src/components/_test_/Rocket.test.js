import { Provider } from "react-redux";
import TestRenderer from "react-test-renderer";
import store from "../../redux/configureStore";
import Rocket from "../Rocket/Rocket";

describe("Rocket test", () => {
  test("snapshot", () => {
    const rocket = {
      id: 1,
      rocket_name: "Falcon1",
      description: "Fake description",
      flickr_images:
        "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
      reserved: false,
    };
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Rocket rocket={rocket}/>
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
