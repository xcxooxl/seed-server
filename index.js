const { get } = require("alias-hq");
get("module-alias");
const { hookRouter } = require("@utils/hookRouter");
hookRouter();
require("./server");
