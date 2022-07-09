import * as React from "react";

type ImageObject = {
  src: string;
  alt?: string;
};

type ImageElement = React.FunctionComponent<any> | React.ElementType;

type PrefixImage<T> = T extends ImageObject ? ImageObject : ImageElement;

type PropTypes<T> = {
  name: string;
  placeholder?: string;
  type?: string;
  value: string | number;
  onChange: (e) => void;
  prefixImage: ImageElement;
};
type searchQuery = number | string;

export { PropTypes, searchQuery };
