import { render } from "@testing-library/react";
import * as Mocks from "~/mocks";

import * as RemixReact from "@remix-run/react";
import { loader } from "~/routes";
import Index from "~/routes/index";

vi.mock("@remix-run/react", () => Mocks.createRemixReactMock({ path: "/" }));
const RemixReactMock = RemixReact as unknown as ReturnType<
  typeof Mocks.createRemixReactMock
>;

describe("component", () => {
  beforeEach(() => {
    RemixReactMock.useLoaderData.mockReturnValue({
      message: "Welcome to Remix",
    });
  });

  test("renders default message", () => {
    const { getByText } = render(<Index />);
    expect(getByText("Welcome to Remix")).toBeDefined();
  });
});

describe("loader", () => {
  describe("should have default message", () => {
    test("when no name is provided", async () => {
      const request = new Request("http://test.com/");
      const response = await loader({ context: {}, params: {}, request });
      expect(response.status).toBe(200);

      const data = await response.json();
      expect(data.message).toBe("Welcome to Remix");
    });

    test("when name is blank string", async () => {
      const request = new Request("http://test.com?name=   ");
      const response = await loader({ context: {}, params: {}, request });
      expect(response.status).toBe(200);

      const data = await response.json();
      expect(data.message).toBe("Welcome to Remix");
    });

    test("when name is given", async () => {
      const request = new Request("http://test.com?name=given");
      const response = await loader({ context: {}, params: {}, request });
      expect(response.status).toBe(200);

      const data = await response.json();
      expect(data.message).toBe("Welcome to Remix, given!");
    });
  });
});
