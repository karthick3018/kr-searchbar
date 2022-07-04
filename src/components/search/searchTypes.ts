type propTypes = {
  name: string;
  placeholder?: string;
  type?: string;
  value: string | number;
  onChange: (e) => void;
  prefixImage?: {
    src: string;
    alt: string;
  };
};
type searchQuery = number | string;

export { propTypes, searchQuery };
