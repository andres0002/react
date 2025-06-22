// js
// react
import { useState, useEffect, Children } from "react";
// third
import { match } from "path-to-regexp";
// own
import { EVENTS } from "../utils/consts";
import { getCorrentPath } from "../utils/utils";

export function Router({children, routes=[], defaultComponent}) {
    const DefaultComponent = defaultComponent ?? (() => <h1>404-no-found</h1>);
    const [currentPath, setCurrentPath] = useState(getCorrentPath());

    useEffect(() => {
    const onLocationChange = () => {
        setCurrentPath(getCorrentPath());
    }
    addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    addEventListener(EVENTS.POPSTATE, onLocationChange);
    return () => {
        removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
        removeEventListener(EVENTS.POPSTATE, onLocationChange);
    }
    }, []);

    let routeParams = {};

    // add routes from children <Route /> components.
    const routesFromChildren = Children.map(children, ({props, type}) => {
        const {name} = type;
        const isRoute = name === 'Route';
        return isRoute ? props : null;
    });

    const routesToUse = routes.concat(routesFromChildren).filter(Boolean);

    const Page = routesToUse.find(({path}) => {
        if (path === currentPath) return true;
        // se a usado path-to-regexp.
        // para detectar rutas dinamicas.
        // example -> /search/:query <- :query es una ruta dinamic.
        const matcherURL = match(path, {decode: decodeURIComponent});
        const matched = matcherURL(currentPath); // /search/javascript.
        if (!matched) return false;
        // guardar los parametros de la url que eran dinamicos.
        // que se han extraído con path-to-regexp.
        // example -> si la ruta es /search/:query.
        // y la url is /search/javascript
        // matched.params.query === 'javascript'.
        routeParams = matched.params; // {query: 'javascript'} // /search/javascript
        return true;
    })?.Component;
    return Page
        ? <Page routeParams={routeParams} />
        : <DefaultComponent routeParams={routeParams} />
}