// js
// react
// third
// own
import { EVENTS, BUTTONS } from "../utils/consts";

// eslint-disable-next-line react-refresh/only-export-components
export function navigate(href) {
    history.pushState({}, '', href);
    // Create event custom.
    const navigationEvent = new Event(EVENTS.PUSHSTATE);
    dispatchEvent(navigationEvent);
}

export function Link({target, to, ...props}) {
    const handleClick = (event) => {
        const isMainEvent = event.button === BUTTONS.PRIMARY; // left click or primary click.
        const isModifiedEvent = event.metaKey ||
            event.altKey || event.ctrlKey || event.shiftKey;
        const isManageableEvent = target === undefined || target === '_self';
        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault();
            navigate(to);
        }
    }

    return <a
        onClick={handleClick}
        href={to}
        target={target}
        {...props}
    />
}