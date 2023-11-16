import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";
import type {
  Type,
  Props,
  Key,
  ReactElement,
  Ref,
  ElementType,
} from "shared/ReactTypes";
const ReactElement = function (
  type: Type,
  key: Key,
  ref: Ref,
  props: Props,
): ReactElement {
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

export const jsx = (type: ElementType, config: any, ...maybeChildren) => {
  const key: Key = null;
  const ref: Key = null;
  const props: Key = {};
  for (const prop in config) {
    // const val = config[prop] {
    // }
  }
};
