import { createBrowserHistory } from "history";

const history = createBrowserHistory({ basename: process.env.APP_BASE_PATH });

export { history };
