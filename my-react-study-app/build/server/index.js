import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Provider } from "react-redux";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let prohibitOutOfOrderStreaming = isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const API_BASE_URL = "https://rickandmortyapi.com/api";
const itemsApi = createApi({
  reducerPath: "itemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: (params) => {
        const newParams = {
          name: params.name,
          page: params.page
        };
        return { url: params.section, params: newParams };
      }
    }),
    getItem: builder.query({
      query: (params) => ({ url: `${params.section}/${params.id}` })
    })
  })
});
const initialState$1 = {
  currentRequest: "",
  currentPage: 1,
  currentId: null,
  section: "",
  loading: true,
  loadingCard: true,
  error: false
};
const itemsSlice = createSlice({
  name: "items",
  initialState: initialState$1,
  reducers: {
    setSection: (state, action) => {
      state.section = action.payload;
      state.loading = true;
    },
    setStartСondition: (state, action) => {
      state.section = action.payload;
      state.currentRequest = action.payload;
      state.currentPage = 1;
      state.currentId = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setLoadingCard: (state, action) => {
      state.loadingCard = action.payload;
    },
    setCurrentRequest: (state, action) => {
      state.currentRequest = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(itemsApi.endpoints.getItems.matchPending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addMatcher(itemsApi.endpoints.getItems.matchFulfilled, (state) => {
      state.loading = false;
    });
    builder.addMatcher(itemsApi.endpoints.getItems.matchRejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addMatcher(itemsApi.endpoints.getItem.matchPending, (state) => {
      state.loadingCard = true;
      state.error = false;
    });
    builder.addMatcher(itemsApi.endpoints.getItem.matchFulfilled, (state) => {
      state.loadingCard = false;
    });
    builder.addMatcher(itemsApi.endpoints.getItem.matchRejected, (state) => {
      state.loadingCard = false;
      state.error = true;
    });
  }
});
const itemsReducer = itemsSlice.reducer;
const initialState = {
  selectedItems: []
};
const itemsSelectedSlice = createSlice({
  name: "itemsSelected",
  initialState,
  reducers: {
    setSelectedItems: (state, action) => {
      state.selectedItems.push(action.payload);
    },
    unsetSelectedItems: (state, action) => {
      state.selectedItems.splice(
        state.selectedItems.findIndex((elem) => JSON.stringify(elem) === JSON.stringify(action.payload)),
        1
      );
    },
    unsetAllSelectedItems: (state) => {
      state.selectedItems = [];
    }
  }
});
const itemsSelectedReducer = itemsSelectedSlice.reducer;
itemsSelectedSlice.actions;
const rootReducer = combineReducers({
  itemsReducer,
  itemsSelectedReducer,
  [itemsApi.reducerPath]: itemsApi.reducer
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(itemsApi.middleware)
});
const meta = () => [
  { title: "Rick & Morty" },
  { name: "description", content: "RS School React Study Task" }
];
const links = () => [{ rel: "icon", type: "image/png", href: "/favicon.ico" }];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Provider, { store, children }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  links,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "assets/entry.client-B3A1yU6u.js", "imports": ["assets/components-Bw80z_4T.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "assets/root-B4SexQyj.js", "imports": ["assets/components-Bw80z_4T.js"], "css": [] } }, "url": "assets/manifest-2be5b2ce.js", "version": "2be5b2ce" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": true, "v3_relativeSplatPath": true, "v3_throwAbortReason": true, "unstable_singleFetch": false, "unstable_lazyRouteDiscovery": false };
const isSpaMode = false;
const publicPath = "";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
