import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";
import type {
  Type,
  Props,
  Key,
  ReactElementType,
  Ref,
  ElementType,
} from "shared/ReactTypes";

const ReactElement = function (
  type: Type,
  key: Key,
  ref: Ref,
  props: Props,
): ReactElementType {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    key,
    ref,
    props,
    __mark: "DARYL",
  };
  return element;
};

export const jsx = (type: ElementType, config: any, ...maybeChildren: any) => {
  let key: Key = null;
  let ref: Ref = null;
  const props: Key = {};
  for (const prop in config) {
    const val = config[prop];
    if (prop === "key") {
      key = "" + val;
    }
    if (prop === "ref") {
      if (val !== undefined) {
        ref = val;
        continue;
      }
    }
    if ({}.hasOwnProperty.call(config, prop)) {
      props[prop] = val;
    }

    const maybeChildrenLen = maybeChildren.length;
    if (maybeChildrenLen) {
      if (maybeChildrenLen === 1) {
        props.children = maybeChildren[0];
      } else {
        props.children = maybeChildren;
      }
    }
  }
  return ReactElement(type, key, ref, props);
};

export const jsxDEV = jsx;
